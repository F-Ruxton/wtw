if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

module.exports = {
  cloud_name: 'wtw',
  upload_preset: 'UUUUUUUU',
  api_key: process.env.REACT_APP_CLOUDINARY_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_SECRET,
  secure: true,
};
