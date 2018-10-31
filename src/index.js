import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './styles/global.css';
import App from './components/App';
import PhotosListReducer from './redux/reducers/PhotosListReducer';
import UploadedPhotosReducer from './redux/reducers/UploadedPhotosReducer';
import CloudinaryConfig from './config/cloudinary';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  photos: PhotosListReducer,
  uploadedPhotos: UploadedPhotosReducer,
});

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App
      cloudName={CloudinaryConfig.cloud_name}
      uploadPreset={CloudinaryConfig.upload_preset}
    />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
