import React, {Component} from 'react';

export default class Index  extends Component {

    /* create information alerts*/
    validateCourse(data, courses){
      try {
        let course = data.target.course.value
        if( courses.findIndex( list => list.name === course) === -1 ){
          courses.push({id: this.generatItemId(courses), name: course})
          return {courses:courses, success: 'Course has been added successfully!'}
        }
        else
         return {courses:courses, error: 'Duplicate course name!'}
      } catch (e) {} finally {  }
    }

    /* get item id*/
    generatItemId( items ){
      return items.length+1
    }

    /*
      * Student Data Store
      * @params data Array | Students Array
    */
    validateStudent(data, students){
      try {

        let target      =  data.target
        let rollnumber  =  target.rollnumber.value

        if( target.name.value && target.age.value && target.course.value ){

          students.push({id: this.generatItemId(students), name: target.name.value, rollnumber: rollnumber, course_id:target.course.value, age: target.age.value})
          return {students:students, success: 'Student has been added successfully!'}
        }
        else
         return {students:students, error: 'Please check required fields!'}

      } catch (e) {

        return {students:students, error: 'Something went wrong. Please try again!'}
      } finally {  }
    }

    /*
      * Delete Student Data From Store
      * @params data Array | Students Array
    */
    deleteStudent(id, students){
      try {
        let target      =  students.findIndex( list => list.id === id)
        if(  target > -1 ){
          students.splice( target, 1 )
          return {students:students, success: 'Student has been deleted successfully!'}
        }
        else
         return {students:students, error: 'Student Already deleted or Not Exist!'}
      } catch (e) {

        return {students:students, error: 'Something went wrong. Please try again!'}
      } finally {  }
    }
}
