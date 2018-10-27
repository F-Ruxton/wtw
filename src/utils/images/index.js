import cloudinary from 'cloudinary-core';
import axios from 'axios';
import { Buffer } from 'buffer';

export const CLOUDINARY_CLOUD_NAME = 'wtw';

var cl = new cloudinary.Cloudinary({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: '673113237363919',
  api_secret: 'qoDrw71Cruf6_vCGRh4hnqjvl3o',
  secure: true,
});

export default {
  getImage: async () => {
    const image =  await axios.get(cl.url('/projects/peatys/building/rollin_bwd_1LS.jpg'));

    // const t = Buffer.from(image.data, 'binary').toString('base64')

  // const text = image.text();
  // const textJson =

    // then(res => res.text())
    // .then(text => (text ? JSON.parse(text).resources : []));

    console.log('image');
    console.log(image);
    // console.log('t');
    // console.log(t);

    // return t;
    return image.data
  }
}
