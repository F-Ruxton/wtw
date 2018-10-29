import cloudinary from 'cloudinary-core';
import axios from 'axios';
import { Buffer } from 'buffer';
import CloudinaryConfig from '../../config/cloudinary';

export const CLOUDINARY_CLOUD_NAME = 'wtw';

var cl = new cloudinary.Cloudinary(CloudinaryConfig);

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
// // GET request for remote image
// axios({
//   method:'get',
//   url:'http://bit.ly/2mTM3nY',
//   responseType:'stream'
// })
//   .then(function (response) {
//     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//   });
