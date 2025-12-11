import { USER_LOADING, USER_ERROR, USER_SUCCESS } from "../actions/usersAction"

const initialState = {
  users: [],
  loading: false,
  error: null,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, loading: true }
    case USER_SUCCESS:
      return { ...state, loading: false, users: action.payload }
    case USER_ERROR:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
export default usersReducer
