import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

class Content extends React.Component {
  state = { };

  render() {
    return (
      <Switch>
        <Route path="/" component={ Home } />

      </Switch>

    );
  }
}

export default Content;
