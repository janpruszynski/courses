import * as courseActionTypes from "../constants/actionConstants";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case courseActionTypes.CREATE_COURSE:
      return [...state, { ...action.course }];
    case courseActionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
