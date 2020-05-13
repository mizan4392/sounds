import React from 'react';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Layout from './hoc/Layout';


class App extends React.Component {


  render() {
    return (
      <Layout> 
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>

    );
  }
}

export default App;
