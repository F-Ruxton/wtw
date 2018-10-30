import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CloudinaryContext } from 'cloudinary-react';
import { photosFetched } from '../../actions';
import Nav from '../Nav';
import Footer from '../Footer';
import SwitchRouter from '../Pages/routing/SwitchRouter';
import pages from '../Pages';
import './styles.css';

class App extends Component {
  render() {
    return (
      <CloudinaryContext
        cloudName={this.props.cloudName}
        uploadPreset={this.props.uploadPreset}
      >
        <Router>
          <Route
            render={({ location }) => (
              <div className="App">
                <Nav />

                <TransitionGroup>
                  <CSSTransition key={location.key} classNames="fade" timeout={300}>
                    <SwitchRouter pages={pages} />
                  </CSSTransition>
                </TransitionGroup>

                <Footer />
              </div>
            )}
          />
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
