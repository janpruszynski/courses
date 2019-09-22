import * as courseActionTypes from "../constants/actionConstants";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: courseActionTypes.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  return { type: courseActionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => {
        throw error;
      }); //dispatch(loadCoursesError(error)));
  };
}
