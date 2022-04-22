import { ADD_POST, SET_POSTS } from '../types/postsTypes'

// eslint-disable-next-line default-param-last
const postsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.payload

    case ADD_POST:
      return [
        ...state,
        action.payload,
      ]

    default:
      return state
  }
}

export default postsReducer
