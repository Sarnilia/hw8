import { API_TOKEN } from '../../constants'
import { ADD_POST, SET_POSTS } from '../types/postsTypes'

const setPosts = (newPostsArray) => ({
  type: SET_POSTS,
  payload: newPostsArray,
})

// eslint-disable-next-line import/prefer-default-export
export const setPostsQuery = (searchValue) => async (dispatch) => {
  const urlForFetch = searchValue
    ? `https://api.react-learning.ru/posts/search/?query=${searchValue}`
    : 'https://api.react-learning.ru/posts'

  const response = await fetch(urlForFetch, {
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
    },
  })

  const dataFromServer = await response.json()
  dispatch(setPosts(dataFromServer))
}

const addPost = (allPosts) => ({
  type: ADD_POST,
  payload: allPosts,
})

export const addPostQuery = (post) => async (dispatch) => {
  const response = await fetch('https://api.react-learning.ru/posts', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: post,
  })

  const dataFromServer = await response.json()

  dispatch(addPost(dataFromServer))
}
