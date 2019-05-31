
import React from 'react';
import {Provider} from 'react-redux';
import store from './../redux/store'

import Routers from './Routers'
import {NotificationContainer} from 'react-notifications';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* header and footer components*/
import Header from './../../components/layouts/Header';
import Footer from './../../components/layouts/Footer';
/* all components with initial*/
import Cousres from './../Courses';
import AddCourse from './../Courses/AddCourse';
import Students from './../Students';
import AddStudent from './../Students/AddStudent';

const App = () => (

  <Provider store={store} >
    <BrowserRouter>
      <NotificationContainer />
      <Header />
      <Switch>
        <Route exact path="/" component={Cousres} exact={true} />
        <Route path="/student" component={Students} />
        <Route path="/addstudent" component={AddStudent} />
        <Route path="/addcourse" component={AddCourse} exact={true} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </Provider >

);

export default App;
