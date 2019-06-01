import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './../../../styles/bootstrap4.0.min.css'

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (

      <header className="font-small indigo">
        <nav className="navbar navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav">
          <div className="float-left">
            <a href="/" data-activates="slide-out" className="button-collapse"><i className="fas fa-bars"></i></a>
          </div>
          <div className="breadcrumb-dn mr-auto">
            <p className="font-weight-bold text-white">React Redux Test</p>
          </div>
          <ul className="nav navbar-nav nav-flex-icons ml-auto font-weight-bold text-white">
            <li className="nav-item">
              <Link to="/addstudent" className="nav-link text-white">Add Student</Link>
            </li>
            <li className="nav-item">
              <Link to="/addcourse" className="nav-link text-white">Add Course</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Course</Link>
            </li>
            <li className="nav-item">
              <Link to="/student" className="nav-link text-white">Students</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
