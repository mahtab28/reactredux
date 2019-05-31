import React, { Component} from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Select from 'react-select'
import { _addStudent } from './../redux/actions/listActions';

class AddStudent extends Component {

  constructor() {
    super()
    this.state={
      isRedirect: false
    }
  }
  /* on submit event handling*/
  handleSubmitEvent(el){

    const { props } = this;
    el.preventDefault()
    let response  = props._addStudent(el, props.students)

    if( response )
      this.redirectTo('/student')
  }

  render() {

    const { isRedirect }  = this.state
    const { courses }     = this.props

    return (
      <div className="container">
        <div className="col-md-8  mx-auto mt-5">
          { isRedirect && <Redirect to={isRedirect} />}
          <div className="card">
            <h5 className="card-header info-color white-text text-center py-4">
              <strong>Add Student</strong>
            </h5>
            <div className="card-body px-lg-5 pt-0">
              <form className="text-center" onSubmit={(el) => this.handleSubmitEvent(el)}>
                <div className="md-form">
                  <input type="text" name="name" id="materialRegisterFormEmail" placeholder="Student Name*" className="form-control" required/>
                </div>
                <div className="md-form">
                  <input type="number" name="age" id="materialRegisterFormEmail" placeholder="Student Age*" className="form-control" required max="50" />
                </div>
                <div className="md-form">
                  <input type="text" name="rollnumber" id="materialRegisterFormEmail" placeholder="Roll Number" className="form-control" />
                </div>
                <div className="md-form">
                  <Select name="from"
                     options={this.getCourse(courses)}
                     name="course"
                     className="m-h-4"
                     placeholder="Select Course*"
                   />
                </div>
                <button type="submit" className="btn btn-info btn-block my-4 waves-effect waves-light" type="submit">Add Student</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* course data format to accept to react select*/
  getCourse(courses){
      let data = []
      if( courses ){
        courses.map(function(option,index){
          data.push({value:option.id, label:option.name })
        })
      }
    return data
  }

  /* get redirected */
  redirectTo( url ){
    this.setState({isRedirect: url})
  }
}

/* validate components*/
AddStudent.propTypes = {
  _addStudent: propTypes.func.isRequired,
}

/* mapping state to props and send*/
const mapStateToProps = state => ({
  students: state.storeData.students,
  courses: state.storeData.courses,
})

export default connect (mapStateToProps, { _addStudent } )( AddStudent )
