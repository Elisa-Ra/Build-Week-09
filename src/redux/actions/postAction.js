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

// PUT
export const putExpAction = (ID, expId, editExp) => {
  return (dispatch) => {
    dispatch({ type: PUT_POST_REQUEST })
    fetch(`${API_USER}${ID}/experiences/${expId}`, {
      method: "PUT",
      headers: {
        Authorization: TOKEN,
        "Content-type": "application/json",
      },
      body: JSON.stringify(editExp),
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else throw new Error("Errore Fetch Profilo" + res.status)
      })
      .then((modifiedData) => {
        dispatch({ type: PUT_POST_SUCCESS, payload: modifiedData })
        dispatch(getExpAction(ID))
        console.log(modifiedData)
      })
      .catch((err) => {
        console.log("Errore nel fetch" + typeof err)
        dispatch({
          type: PUT_POST_ERROR,
          payload: JSON.stringify(err, Object.getOwnPropertyNames(err)),
        })
      })
  }
}

// POST

export const postExpAction = (ID, exp) => {
  return (dispatch) => {
    dispatch({ type: POST_POST_REQUEST })
    fetch(`${API_USER}${ID}/experiences`, {
      method: "POST",
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exp),
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else throw new Error("Errore Fetch Profilo", res.status)
      })
      .then((postedData) => {
        dispatch({ type: POST_POST_SUCCESS, payload: postedData })
        dispatch(getExpAction(ID))
        console.log(postedData)
      })
      .catch((err) => {
        console.log("Errore nel fetch" + typeof err)
        dispatch({
          type: POST_POST_ERROR,
          payload: JSON.stringify(err, Object.getOwnPropertyNames(err)),
        })
      })
  }
}

// DELETE

export const deleteExpAction = (ID, expId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_POST_REQUEST })
    fetch(`${API_USER}${ID}/experiences/${expId}`, {
      method: "DELETE",
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return
        } else throw new Error("Errore Fetch Profilo" + res.status)
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
