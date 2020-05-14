import React from 'react';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Layout from './hoc/Layout';
import Index from './Components/Authentication/Index';
import Register from './Components/Authentication/Register';
import * as ROUTES from './utils/Routs'
import UserDeshboard from './Components/User/UserDeshboard';


class App extends React.Component {


  render() {
    return (
      <Layout>
        <Switch>
          <Route path={ROUTES.USER_DESHBOARD} exact component={UserDeshboard} />
          <Route path={ROUTES.ROOT} exact component={Home} />
          <Route path={ROUTES.LOGIN} exact component={Index} />
          <Route path={ROUTES.REGISTER} exact component={Register} />
        </Switch>
      </Layout>

    );
  }
}

export default App;
