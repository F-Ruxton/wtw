import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';
import CloudinaryConfig from '../../config/cloudinary';
import axios from 'axios';

export const url = (publicId, options) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  const cl = CoreCloudinary.new(CloudinaryConfig);
  return cl.url(publicId, scOptions);
};

export const resources = async ({ method = 'get', options = {} }) => {
  const resources = await axios.post('/resources', options);
  return resources;
}

export const fetchPhotos = () => {
  return resources();
  // return axios.get(urlPath)
  //     .then(res => res.text())
  //     .then(text => (text ? JSON.parse(text).resources : []));
};
