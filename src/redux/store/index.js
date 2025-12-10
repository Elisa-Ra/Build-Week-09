import { configureStore } from "@reduxjs/toolkit"
import profileReducer from "../reducers/profileReducer"
import experienceReducer from "../reducers/experienceReducer"
import userReducer from "../reducers/userReducer"

const store = configureStore({
  reducer: {
    profile: profileReducer,
    user: userReducer,
    experiences: experienceReducer,
  },
})
export default store
