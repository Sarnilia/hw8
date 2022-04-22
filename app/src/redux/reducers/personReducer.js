/* eslint-disable default-param-last */
import { SIGN_IN, SIGN_UP } from '../types/personType'

// eslint-disable-next-line import/prefer-default-export
export const personReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        ...action.payload,
      }

    case SIGN_UP:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
