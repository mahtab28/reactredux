import React, { Component} from 'react';
import { connect } from 'react-redux';
import { _deleteStudent } from './../redux/actions/listActions';
import propTypes from 'prop-types'

class StudentDetails extends Component {


  /* handle student Delete event*/
  handleDeleteEvent( id ){

    let response        = null
    const { students }  = this.props;

    if( window.confirm('Are you sure you want to delete this student?') ){
      response = this.props._deleteStudent(id, students)
      if( response )
        this.forceUpdate()
    }
  }
  /* render component*/
  render() {
    const { students } = this.props;

    return (
      <div className="container">
        <div className="col-md-9 mx-auto mt-5">
          <div className="card">
            <h5 className="card-header info-color white-text text-center py-4">
            <strong>Student List</strong>
            </h5>

            <div className="card-body px-lg-5 pt-0" method="post">
              { students.length ?
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Student Age</th>
                      <th scope="col">Roll Number</th>
                      <th scope="col">Course Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.studentList(students)}
                  </tbody>
                </table>
                :
                <h4 className="mt-5 text-center">No Student Found</h4>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* get course list*/
  studentList(students){

    let _this = this
    try {

      let index, niddle = 0, course
      const { courses } = this.props;

      if( students ){
        return students.map(function(option, index){

          index     = courses.findIndex(list => list.id == option.course_id )
          course    = ( index >= niddle ) ? courses[index] : false
          return (
            <tr key={option.id}>
              <th scope="row">{option.id}</th>
              <td>{option.name}</td>
              <td>{option.age}</td>
              <td>{option.rollnumber}</td>
              <td>{course.name}</td>
              <td><button type="button" className="btn-light" onClick={() => _this.handleDeleteEvent(option.id)}>Delete</button></td>
            </tr>
          )
        })
      }
    } catch (e) {
      return false
    }
  }
}

/* validate components*/
StudentDetails.propTypes = {
  _deleteStudent: propTypes.func.isRequired,
}

/* mapping state to props and send*/
const mapStateToProps = state => ({
  students: state.storeData.students,
  courses: state.storeData.courses,
})


export default connect (mapStateToProps, { _deleteStudent })( StudentDetails )
