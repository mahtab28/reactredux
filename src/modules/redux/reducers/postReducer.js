/* components constants and list*/
import {ADD_COURSE, ADD_STUDENT, DELETE_STUDENT } from './../actions/types'

const initialState = {
  courses:[],
  students:[]
}

export default function(state = initialState, actions){

  switch( actions.type ){
    case ADD_COURSE:
      return {
        ...state,
        courses: actions.payload
      }
    case ADD_STUDENT:
      return {
        ...state,
        students: actions.payload
      }
    case DELETE_STUDENT:
      return {
        ...state,
        students: actions.payload
      }
    default:
      return state
  }
}
