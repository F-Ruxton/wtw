if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

var api_key = function() {
  console.log('process.env');
  console.log(process.env);

  return process.env.REACT_APP_CLOUDINARY_KEY;
}

module.exports = {
  cloud_name: 'wtw',
  upload_preset: 'UUUUUUUU',
  api_key: api_key(),
  api_secret: process.env.REACT_APP_CLOUDINARY_SECRET,
  secure: true,
};
