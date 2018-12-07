import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import PhotosListReducer from './redux/reducers/PhotosListReducer';
import UploadedPhotosReducer from './redux/reducers/UploadedPhotosReducer';
import CloudinaryConfig from './config/cloudinary';
import registerServiceWorker from './registerServiceWorker';
import './styles/global.css';

const rootReducer = combineReducers({
  photos: PhotosListReducer,
  uploadedPhotos: UploadedPhotosReducer,
});

const store = process.env.NODE_ENV === 'production'
  ? createStore(rootReducer)
  : (
    createStore(rootReducer, {}, compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))
  );

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
