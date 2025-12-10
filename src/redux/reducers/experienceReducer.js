import {
  GET_EXP_REQUEST,
  GET_EXP_ERROR,
  GET_EXP_SUCCESS,
  POST_EXP_REQUEST,
  POST_EXP_ERROR,
  POST_EXP_SUCCESS,
  PUT_EXP_REQUEST,
  PUT_EXP_ERROR,
  PUT_EXP_SUCCESS,
  DELETE_EXP_REQUEST,
  DELETE_EXP_ERROR,
  DELETE_EXP_SUCCESS,
} from "../actions/experiencesAction"

const initialState = {
  data: null,
  loading: false,
  error: null,
}

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    // REQUEST
    case GET_EXP_REQUEST:
    case POST_EXP_REQUEST:
    case PUT_EXP_REQUEST:
    case DELETE_EXP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }

    // SUCCESS
    case GET_EXP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      }
    case PUT_EXP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.map((exp, index) => {
          return exp[index] === action.payload
            ? (exp[index] = action.payload)
            : exp
        }),
      }
    case POST_EXP_SUCCESS:
      return { ...(state + action.payload) }
    case DELETE_EXP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.filter((exp) => {
          exp._id !== action.payload
        }),
      }

    // ERROR
    case GET_EXP_ERROR:
    case PUT_EXP_ERROR:
    case POST_EXP_ERROR:
    case DELETE_EXP_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
export default experienceReducer
