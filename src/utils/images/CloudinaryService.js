import cloudinary from 'cloudinary'
import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';
import CloudinaryConfig from '../../config/cloudinary';
import axios from 'axios';

export const url = (publicId, options) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  const cl = CoreCloudinary.new(CloudinaryConfig);
  return cl.url(publicId, scOptions);
};

export const fetchPhotoUrls = async ({ method = 'get', options = {} }) => {
  const resources = await axios.post('/resources', options);

  return resources;
}

    // const { cloudName, onPhotosFetched } = this.props;
    // const photos = await fetchPhotos(cloudName);
    // const availableResources = await resources();
    // onPhotosFetched(photos);

    {/* This will render the image fetched from a remote HTTP URL using Cloudinary
        <Image
          type="fetch"
          publicId="https://cloudinary.com/images/logo.png"
          fetch-format="auto"
          quality="auto"
        /> */}

export const resources = async (publicId, options) => {
  cloudinary.config(CloudinaryConfig);
  // const scOptions = Util.withSnakeCaseKeys(options);
  // const cl = CoreCloudinary.new(CloudinaryConfig);
  // return cloudinary.v2.api.resources(function(error, result){console.log(result)});



  var c = await cloudinary.api.resources({type: 'upload'}, function(error, result){});

  console.log({cloudinary});
  console.log({ c });

  return c;
  // return cl.url(publicId, scOptions);
};

export const openUploadWidget = (options, callback) => {
    const scOptions = Util.withSnakeCaseKeys(options);
    window.cloudinary.openUploadWidget(scOptions, callback);
};

export const fetchPhotos = cloudName => {
    // instead of maintaining the list of images, we rely on the 'myphotoalbum' tag
    // and simply retrieve a list of all images with that tag.
    // the version property is used for cache bust (lists are cached by the CDN for 1 minute)
    // *************************************************************************
    // Note that this practice is DISCOURAGED in production code and is here
    // for demonstration purposes only
    // *************************************************************************
    const options = {
        cloudName: cloudName,
        format: 'json',
        type: 'list',
        // version: Math.ceil(new Date().getTime() / 1000),
    };

    const urlPath = 'https://res.cloudinary.com/wtw/image/list/peatys.json'; //url('peatys', options);
    // const urlPath = url('peatys', options);

    console.log({urlPath});

    return resources();
    // return axios.get(urlPath)
    //     .then(res => res.text())
    //     .then(text => (text ? JSON.parse(text).resources : []));
};
