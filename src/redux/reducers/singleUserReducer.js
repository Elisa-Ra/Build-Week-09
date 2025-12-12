import {
  OTHER_USER_LOADING,
  OTHER_USER_SUCCESS,
  OTHER_USER_ERROR
} from '../actions/MyProfileAction'

const initialState = {
  data: null,
  loading: false,
  error: null
}

const singleUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case OTHER_USER_LOADING:
      return { ...state, loading: true, error: null }
    case OTHER_USER_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null }
    case OTHER_USER_ERROR:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
export default singleUserReducer
