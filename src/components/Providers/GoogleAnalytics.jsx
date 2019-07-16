import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

function sendPageView(location) {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
}

const GoogleAnalytics = ({ children, trackingId, history }) => {
  useEffect(() => {
    ReactGA.initialize(trackingId);
    sendPageView(history.location);
    history.listen(sendPageView);
  }, [history, trackingId]);

  return children;
};

GoogleAnalytics.propTypes = {
  children: PropTypes.node,
  trackingId: PropTypes.string,
  history: PropTypes.shape({
    listen: PropTypes.func,
  }),
};

export default withRouter(GoogleAnalytics);
