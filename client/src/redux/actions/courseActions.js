import * as courseActionTypes from "../constants/actionConstants";

export function createCourse(course) {
  return { type: courseActionTypes.CREATE_COURSE, course };
}
