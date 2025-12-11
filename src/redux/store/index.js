import { configureStore } from "@reduxjs/toolkit"
import MyProfileReducer from "../reducers/MyProfileReducer"
import experienceReducer from "../reducers/experienceReducer"
import usersReducer from "../reducers/usersReducer"

const store = configureStore({
  reducer: {
    profile: MyProfileReducer,
    users: usersReducer,
    experiences: experienceReducer,
  },
})
export default store
