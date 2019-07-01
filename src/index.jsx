import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ParallaxProvider } from 'react-scroll-parallax';

import theme from './theme';

import App from './components/Application';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  // uri: 'http://localhost:52723',
  uri: 'https://api.graphcms.com/simple/v1/swapi ',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <ParallaxProvider>
          <Fragment>
            <CssBaseline />
            <App />
          </Fragment>
        </ParallaxProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
