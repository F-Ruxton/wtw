import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { photosFetched } from '../../actions';
import PhotoListContainer from '../PhotoList';
import { fetchPhotos, resources } from '../../utils/images/CloudinaryService';

import Nav from '../Nav';
import Footer from '../Footer';
import SwitchRouter from '../Pages/routing/SwitchRouter';
import pages from '../Pages';

import './styles.css';


class App extends Component {
  async componentDidMount() {
    const { cloudName, onPhotosFetched } = this.props;

    const photos = await fetchPhotos(cloudName);
    const availableResources = await resources();

    console.log('photos');
    console.log(photos);
    console.log('resources');
    console.log(resources);

    onPhotosFetched(photos);
  }

  render() {
    return (
      <CloudinaryContext
        cloudName={this.props.cloudName}
        uploadPreset={this.props.uploadPreset}
      >
        {/*This will render the image fetched from a remote HTTP URL using Cloudinary*/}
        <Image
          type="fetch"
          publicId="https://cloudinary.com/images/logo.png"
          fetch-format="auto"
          quality="auto"
        />

        <Router>
          <div className="App">
            <Nav />
            <SwitchRouter pages={pages} />
            <Footer />
          </div>
        </Router>

      </CloudinaryContext>
    );
  }
}

App.propTypes = {
  cloudName: PropTypes.string,
  uploadPreset: PropTypes.string,
  onPhotosFetched: PropTypes.func,
};

App.contextTypes = {
  cloudName: PropTypes.string,
  uploadPreset: PropTypes.string,
};

const AppContainer = connect(null, { onPhotosFetched: photosFetched })(App);
Object.assign(AppContainer.contextTypes, App.contextTypes);

export default AppContainer;
