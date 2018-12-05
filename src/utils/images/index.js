import _ from 'lodash/fp';
import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';
import CloudinaryConfig from '../../config/cloudinary';
import axios from 'axios';
import apiConstants from '../../redux/apis/cloudinary/contants';

export const url = (publicId, options) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  const cl = CoreCloudinary.new(CloudinaryConfig);
  return cl.url(publicId, scOptions);
};

// const base = process.env.NODE_ENV === 'production' ? 'https://wtw-be.herokuapp.com' : '';
const base = '';

export const resources = async ({ method = apiConstants.get, options = {} } = {}) => {
  const resources = await axios.post(`${base}/resources`, { method, options });
  return resources;
}

export const fetchImageByTag = async ({ tag, multiple = false, options = {} }) => {
  const mainImg = await resources({
    method: apiConstants.get_by_tag,
    options: { type: 'upload', tag, tags: true, ...options },
  });
  const resourcesRaw = _.get(['data', 'resources'], mainImg);

  return multiple
    ? resourcesRaw
    : _.head(resourcesRaw);
}

export const fetchImage = (imgRequest = {}) => {
  if (_.isEmpty(imgRequest)) { return {}; }

  switch (imgRequest.type) {
    case 'tag': return fetchImageByTag(imgRequest);
    default: return {};
  }
};

export const findByTag =
  _.curry((imgs, tag) => _.find(img => _.includes(tag, _.get('tags', img)), imgs));
