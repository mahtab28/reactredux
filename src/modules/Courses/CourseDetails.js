import React, { Component} from 'react';
import { connect } from 'react-redux';

class CourseDetails extends Component {

  render() {

    const { courses } = this.props;

    return (
      <div className="container">
        <div className="col-md-9 mx-auto mt-5">
          <div className="card">
            <h5 className="card-header info-color white-text text-center py-4">
            <strong>Course List</strong>
            </h5>

            <div className="card-body px-lg-5 pt-0" method="post">
              { courses.length ?
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Course Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.courseList(courses)}
                  </tbody>
                </table>
                :
                <h4 className="mt-5 text-center">No Course Found</h4>
              }
            </div>

          </div>
        </div>
      </div>
    );
  }

  /* get course list*/
  courseList(courses){

    try {
      if( courses ){
        return courses.map(function(option, index){

          return (
            <tr key={index}>
              <th scope="row">{option.id}</th>
              <td>{option.name}</td>
            </tr>
          )
        })
      }
    } catch (e) {
      return false
    }
  }
}

  /* mapping state to props and send*/
  const mapStateToProps = state => ({
    courses: state.storeData.courses,
  })

  export default connect (mapStateToProps)( CourseDetails )
