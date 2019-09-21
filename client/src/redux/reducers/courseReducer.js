import * as courseActionTypes from "../constants/actionConstants";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case courseActionTypes.CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
