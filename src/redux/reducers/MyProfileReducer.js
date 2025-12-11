import {
  PROFILE_LOADING,
  PROFILE_ERROR,
  PROFILE_SUCCESS,
} from "../actions/MyProfileAction"

const initialState = {
  data: null,
  loading: false,
  error: null,
}

const MyProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return { ...state, loading: true, error: null }
    case PROFILE_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null }
    case PROFILE_ERROR:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
export default MyProfileReducer
