export const USER_LOADING = "USER_LOADING"
export const USER_SUCCESS = "USER_SUCCESS"
export const USER_ERROR = "USER_ERROR"

const API_USER = "https://striveschool-api.herokuapp.com/api/profile/"
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGIwN2QzMjJmNTAwMTUxMDc2YTAiLCJpYXQiOjE3NjUyNjgyMzEsImV4cCI6MTc2NjQ3NzgzMX0.xpmE3XKHeFyn9woNxPxv0Fs_cK7s5T7gtcpLwDMBGII"

export const fetchUser = () => {
  return (dispatch) => {
    dispatch({ type: USER_LOADING })
    fetch(API_USER, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else throw new Error("Errore Fetch Profilo", res.status)
      })
      .then((data) => {
        dispatch({ type: USER_SUCCESS, payload: data })
        console.log(data)
      })
      .catch((err) => {
        console.log("Errore nel fetch" + typeof err)
        dispatch({
          type: USER_ERROR,
          payload: JSON.stringify(err, Object.getOwnPropertyNames(err)),
        })
      })
  }
}
