import { configureStore } from "@reduxjs/toolkit"
import profileReducer from "../reducers/MyProfileReducer"
import experienceReducer from "../reducers/experienceReducer"
import usersReducer from "../reducers/usersReducer"

const store = configureStore({
  reducer: {
    profile: profileReducer,
    users: usersReducer,
    experiences: experienceReducer,
  },
})
export default store
