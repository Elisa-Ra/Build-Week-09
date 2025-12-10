import { configureStore } from "@reduxjs/toolkit"
import profileReducer from "../reducers/profileReducer"
import userReducer from "../reducers/userReducer"

const store = configureStore({
  reducer: {
    profile: profileReducer,
    user: userReducer,
  },
})
export default store
