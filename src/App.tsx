import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login, SignUp, Home, Comments } from '@pages/index';
import GlobalStyle from 'styles/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/comments" component={Comments} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
