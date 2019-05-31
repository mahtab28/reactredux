import React, { Component} from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { _addCourse } from './../redux/actions/listActions';

class AddCourse extends Component {

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
    let response  = props._addCourse(el, props.courses)

    if( response )
      this.redirectTo('/')
  }

  /*rendering component*/
  render() {

    const {isRedirect}  = this.state

    return (
      <div className="container">
        <div className="col-md-8  mx-auto mt-5">
          <div className="card">
            { isRedirect && <Redirect to={isRedirect} />}
            <h5 className="card-header info-color white-text text-center py-4">
            <strong>Add Course</strong>
            </h5>

            <div className="card-body px-lg-5 pt-0" method="post">
              <form className="text-center" onSubmit={(el) => this.handleSubmitEvent(el)}>
                <div className="md-form">
                  <input type="text" name="course" id="materialRegisterFormEmail" placeholder="Course Name" className="form-control px-2" required/>
                </div>
                <button type="submit" className="btn btn-info btn-block my-4 waves-effect waves-light" type="submit">Add Course</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
  /* get redirected */
  redirectTo( url ){
    this.setState({isRedirect: url})
  }
}
/* validate components*/
AddCourse.propTypes = {
  _addCourse: propTypes.func.isRequired,
}

/* mapping state to props and send*/
const mapStateToProps = state => ({
  courses: state.storeData.courses,
})

export default connect (mapStateToProps, { _addCourse } )( AddCourse )
