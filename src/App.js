import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import VersionTwo from './components/version-two';


const getBasename = path => path.substr(0, path.lastIndexOf('/'));


const App = () => {

  return (
      <Router basename={getBasename(window.location.pathname)}>
        <Switch>
          <Route path='/' exact component={VersionTwo} />
        </Switch>
      </Router>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
