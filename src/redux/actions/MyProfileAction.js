export const PROFILE_LOADING = "PROFILE_LOADING"
export const PROFILE_SUCCESS = "PROFILE_SUCCESS"
export const PROFILE_ERROR = "PROFILE_ERROR"

// PER IL NOSTRO PROFILO
const API_ME = "https://striveschool-api.herokuapp.com/api/profile/me"
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGIwN2QzMjJmNTAwMTUxMDc2YTAiLCJpYXQiOjE3NjUyNjgyMzEsImV4cCI6MTc2NjQ3NzgzMX0.xpmE3XKHeFyn9woNxPxv0Fs_cK7s5T7gtcpLwDMBGII"

export const fetchMyProfile = () => {
  return (dispatch) => {
    dispatch({ type: PROFILE_LOADING })
    fetch(API_ME, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else throw new Error("Errore Fetch Profilo" + res.status)
      })
      .then((data) => {
        dispatch({ type: PROFILE_SUCCESS, payload: data })
        console.log(data)
      })
      .catch((err) => {
        console.log("Errore nel fetch" + typeof err)
        dispatch({
          type: PROFILE_ERROR,
          payload: err.message,
        })
      })
  }
}
