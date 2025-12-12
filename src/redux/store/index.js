import { configureStore } from "@reduxjs/toolkit"
import MyProfileReducer from "../reducers/MyProfileReducer"
import experienceReducer from "../reducers/experienceReducer"
import usersReducer from "../reducers/usersReducer"
import postReducer from "../reducers/postReducer"

const store = configureStore({
  reducer: {
    profile: MyProfileReducer,
    users: usersReducer,
    experiences: experienceReducer,
    posts: postReducer,
  },
})
export default store
