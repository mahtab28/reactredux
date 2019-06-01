import {ADD_COURSE, ADD_STUDENT, DELETE_STUDENT } from './types'
import React from 'react'
import Alerts from './../../../components/helpers/alerts'
import Validator from './../../../components/validator'

const Notifications     = new Alerts();
const valid             = new Validator();

  let response          = null;
  /* add course */
  export const _addCourse = ( data, courses ) => dispatch => {

    if( response = valid.validateCourse(data, courses)){
      /* notification message*/
      alert(response)
      dispatch({
        type: ADD_COURSE,
        payload: response.courses
      })
      if( response.success )
        return response
    }
  }
  /* add student */
  export const _addStudent = ( data, students ) => dispatch => {

    if( response = valid.validateStudent(data, students)){
      /* notification message*/
      alert(response)
      dispatch({
        type: ADD_STUDENT,
        payload: response.students
      })
      if( response.success )
        return response
    }
  }

  /* delete student */
  export const _deleteStudent = ( id, students ) => dispatch => {

    if( response = valid.deleteStudent(id, students)){
      /* notification message*/
      alert(response)
      dispatch({
        type: DELETE_STUDENT,
        payload: response.students
      })
      if( response.success )
        return response
    }
  }
  /* display error message if any*/
  const alert = (data) => {

     if ( data.error )  Notifications.warning('Opps!!', data.error)
     else Notifications.success('Success!!', data.success)
  }
