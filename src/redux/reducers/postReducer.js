import {
  GET_POST_REQUEST,
  GET_POST_ERROR,
  GET_POST_SUCCESS,
  POST_POST_REQUEST,
  POST_POST_ERROR,
  POST_POST_SUCCESS,
  PUT_POST_REQUEST,
  PUT_POST_ERROR,
  PUT_POST_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,
} from "../actions/postAction"

const initialState = {
  data: [],
  loading: false,
  error: null,
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    // REQUEST
    case GET_POST_REQUEST:
    case POST_POST_REQUEST:
    case PUT_POST_REQUEST:
    case DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }

    // SUCCESS
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      }
    case PUT_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      }
    case POST_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
      }
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.filter((post) => post._id !== action.payload),
      }

    // ERROR
    case GET_POST_ERROR:
    case PUT_POST_ERROR:
    case POST_POST_ERROR:
    case DELETE_POST_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
export default postReducer
