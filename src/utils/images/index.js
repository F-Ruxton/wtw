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
    options: { type: 'upload', tag }
  });

  return _.get(['data', 'resources', 0], mainImg);
}

export const fetchImage = (imgRequest = {}) => {
  if (_.isEmpty(imgRequest)) { return {}; }

  switch (imgRequest.type) {
    case 'tag': return fetchImageByTag(imgRequest.tag);
    default: return {};
  }
};
