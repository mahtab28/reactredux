
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* header and footer components*/
import Header from './../../components/layouts/Header';
import Footer from './../../components/layouts/Footer';
/* all components with initial*/
import Cousres from './../Courses';
import AddCourse from './../Courses/AddCourse';
import Students from './../Students';
import AddStudent from './../Students/AddStudent';

const Routers = () => (
  <div className="app-wrapper">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Cousres} />
        <Route path="/student" component={Students} />
        <Route path="/addstudent" component={AddStudent} />
        <Route path="/addcourse" component={AddCourse} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
);

export default Routers;
