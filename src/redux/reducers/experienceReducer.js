import {
  GET_EXP_REQUEST,
  GET_EXP_SUCCESS,
  GET_EXP_ERROR,
  PUT_EXP_REQUEST,
  PUT_EXP_SUCCESS,
  PUT_EXP_ERROR,
  POST_EXP_REQUEST,
  POST_EXP_SUCCESS,
  POST_EXP_ERROR,
  DELETE_EXP_REQUEST,
  DELETE_EXP_SUCCESS,
  DELETE_EXP_ERROR,
} from "../actions/experiencesAction"

const initialState = {
  data: [],
  loading: false,
  error: null,
}

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXP_REQUEST:
    case PUT_EXP_REQUEST:
    case POST_EXP_REQUEST:
    case DELETE_EXP_REQUEST:
      return { ...state, loading: true, error: null }

    case GET_EXP_SUCCESS:
      return { ...state, loading: false, data: action.payload }

    case POST_EXP_SUCCESS:
      return { ...state, loading: false, data: [...state.data, action.payload] }

    case PUT_EXP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.map((exp) =>
          exp._id === action.payload._id ? action.payload : exp
        ),
      }

    case DELETE_EXP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter((exp) => exp._id !== action.payload._id),
      }

    case GET_EXP_ERROR:
    case PUT_EXP_ERROR:
    case POST_EXP_ERROR:
    case DELETE_EXP_ERROR:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export default experiencesReducer
