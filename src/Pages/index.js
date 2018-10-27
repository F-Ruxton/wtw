import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import NotFoundPage from './NotFoundPage';
import routes from './routes';

export default {
  home: {
    path: routes.home,
    component: Home,
    exact: true,
  },

  about: {
    path: routes.about,
    component: About,
    exact: true,
  },

  portfolio: {
    path: routes.portfolio,
    component: Portfolio,
    exact: true,
  },

  // ============================== keep this at bottom =================================
  notFoundPage: {
    component: NotFoundPage,
  }
};
