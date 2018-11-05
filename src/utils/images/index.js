import _ from 'lodash/fp';
import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';
import CloudinaryConfig from '../../config/cloudinary';
import axios from 'axios';
import apiConstants from '../../server/apis/cloudinary/contants';

export const url = (publicId, options) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  const cl = CoreCloudinary.new(CloudinaryConfig);
  return cl.url(publicId, scOptions);
};

export const resources = async ({ method = apiConstants.get, options = {} } = {}) => {
  const resources = await axios.post('/resources', { method, options });
  return resources;
}

export const fetchImageByTag = async tag => {
  const mainImg = await resources({
    method: apiConstants.get_by_tag,
    options: { type: 'upload', tag, tags: true }
  });

  // console.log('image fetch by tag');
  // console.log(tag);
  // console.log(mainImg);

  return _.get(['data', 'resources'], mainImg);
}

export const fetchImage = (imgRequest = {}) => {
  if (_.isEmpty(imgRequest)) { return {}; }

  switch (imgRequest.type) {
    case 'tag': return fetchImageByTag(imgRequest.tag);
    default: return {};
  }
};

export const findByTag =
  _.curry((imgs, tag) => _.find(img => _.includes(tag, _.get('tags', img)), imgs));
