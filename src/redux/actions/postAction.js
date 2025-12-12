export const GET_POST_REQUEST = "GET_POST_REQUEST"
export const GET_POST_SUCCESS = "GET_POST_SUCCESS"
export const GET_POST_ERROR = "GET_POST_ERROR"

const API = "https://striveschool-api.herokuapp.com/api/posts/"
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGIwN2QzMjJmNTAwMTUxMDc2YTAiLCJpYXQiOjE3NjUyNjgyMzEsImV4cCI6MTc2NjQ3NzgzMX0.xpmE3XKHeFyn9woNxPxv0Fs_cK7s5T7gtcpLwDMBGII"

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: GET_POST_REQUEST })

    fetch(API, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore nel fetch" + res.status)
        }
      })
      .then((data) => {
        dispatch({ type: GET_POST_SUCCESS, payload: data })
        console.log(data)
      })
      .catch((err) => {
        console.log("Errore nel fetch" + err.message)
        dispatch({
          type: GET_POST_ERROR,
          payload: err.message,
        })
      })
  }
}
