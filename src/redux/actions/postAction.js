export const GET_POST_REQUEST = "GET_POST_REQUEST"
export const GET_POST_SUCCESS = "GET_POST_SUCCESS"
export const GET_POST_ERROR = "GET_POST_ERROR"

export const PUT_POST_REQUEST = "PUT_POST_REQUEST"
export const PUT_POST_SUCCESS = "PUT_POST_SUCCESS"
export const PUT_POST_ERROR = "PUT_POST_ERROR"

export const POST_POST_REQUEST = "POST_POST_REQUEST"
export const POST_POST_SUCCESS = "POST_POST_SUCCESS"
export const POST_POST_ERROR = "POST_POST_ERROR"

export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST"
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS"
export const DELETE_POST_ERROR = "DELETE_POST_ERROR"

const API = "https://striveschool-api.herokuapp.com/api/posts/"
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGIwN2QzMjJmNTAwMTUxMDc2YTAiLCJpYXQiOjE3NjUyNjgyMzEsImV4cCI6MTc2NjQ3NzgzMX0.xpmE3XKHeFyn9woNxPxv0Fs_cK7s5T7gtcpLwDMBGII"

export const getPostAction = () => {
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

// PUT
export const putPostAction = (postId, editPost) => {
  return (dispatch) => {
    dispatch({ type: PUT_POST_REQUEST })
    fetch(`${API}${postId}`, {
      method: "PUT",
      headers: {
        Authorization: TOKEN,
        "Content-type": "application/json",
      },
      body: JSON.stringify(editPost),
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else throw new Error("Errore Fetch Profilo" + res.status)
      })
      .then((editedData) => {
        dispatch({ type: PUT_POST_SUCCESS, payload: editedData })
        dispatch(getPostAction())
        console.log(editedData)
      })
      .catch((err) => {
        console.log("Errore nel fetch" + typeof err)
        dispatch({
          type: PUT_POST_ERROR,
          payload: err.message,
        })
      })
  }
}

// POST

export const postPostAction = (newPost) => {
  return (dispatch) => {
    dispatch({ type: POST_POST_REQUEST })
    fetch(API, {
      method: "POST",
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else throw new Error("Errore Fetch Profilo", res.status)
      })
      .then((postedData) => {
        dispatch({ type: POST_POST_SUCCESS, payload: postedData })
        dispatch(getPostAction())
        console.log(postedData)
      })
      .catch((err) => {
        console.log("Errore nel fetch" + typeof err)
        dispatch({
          type: POST_POST_ERROR,
          payload: err.message,
        })
      })
  }
}

// DELETE

export const deletePostAction = (postId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_POST_REQUEST })
    fetch(`${API}${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return
        } else throw new Error("Errore Fetch Post" + res.status)
      })
      .then((deletedData) => {
        dispatch({ type: DELETE_POST_SUCCESS, payload: deletedData })
      })
      .catch((err) => {
        console.log("Errore nel fetch" + typeof err)
        dispatch({
          type: DELETE_POST_ERROR,
          payload: JSON.stringify(err, Object.getOwnPropertyNames(err)),
        })
      })
  }
}
