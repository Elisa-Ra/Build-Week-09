export const GET_EXP_REQUEST = 'GET_EXP_REQUEST';
export const GET_EXP_SUCCESS = 'GET_EXP_SUCCESS';
export const GET_EXP_ERROR = 'GET_EXP_ERROR';

export const PUT_EXP_REQUEST = 'PUT_EXP_REQUEST';
export const PUT_EXP_SUCCESS = 'PUT_EXP_SUCCESS';
export const PUT_EXP_ERROR = 'PUT_EXP_ERROR';

export const POST_EXP_REQUEST = 'POST_EXP_REQUEST';
export const POST_EXP_SUCCESS = 'POST_EXP_SUCCESS';
export const POST_EXP_ERROR = 'POST_EXP_ERROR';

export const DELETE_EXP_REQUEST = 'DELETE_EXP_REQUEST';
export const DELETE_EXP_SUCCESS = 'DELETE_EXP_SUCCESS';
export const DELETE_EXP_ERROR = 'DELETE_EXP_ERROR';

const API_USER = 'https://striveschool-api.herokuapp.com/api/profile/';
const TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGIwN2QzMjJmNTAwMTUxMDc2YTAiLCJpYXQiOjE3NjUyNjgyMzEsImV4cCI6MTc2NjQ3NzgzMX0.xpmE3XKHeFyn9woNxPxv0Fs_cK7s5T7gtcpLwDMBGII';

//   GET
export const getExpAction = (ID) => {
  return (dispatch) => {
    dispatch({ type: GET_EXP_REQUEST });
    fetch(`${API_USER}${ID}/experiences`, {
      headers: {
        Authorization: TOKEN
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else throw new Error('Errore Fetch Profilo' + res.status);
      })
      .then((data) => {
        dispatch({ type: GET_EXP_SUCCESS, payload: data });
        console.log(data);
      })
      .catch((err) => {
        console.log('Errore nel fetch' + typeof err);
        dispatch({
          type: GET_EXP_ERROR,
          payload: JSON.stringify(err, Object.getOwnPropertyNames(err))
        });
      });
  };
};

// PUT
export const putExpAction = (ID, expId, editExp) => {
  return (dispatch) => {
    dispatch({ type: PUT_EXP_REQUEST });
    fetch(`${API_USER}${ID}/experiences/${expId}`, {
      method: 'PUT',
      headers: {
        Authorization: TOKEN,
        'Content-type': 'application/json'
      },
      body: JSON.stringify(editExp)
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else throw new Error('Errore Fetch Profilo' + res.status);
      })
      .then((modifiedData) => {
        dispatch({ type: PUT_EXP_SUCCESS, payload: modifiedData });
        console.log(modifiedData);
      })
      .catch((err) => {
        console.log('Errore nel fetch' + typeof err);
        dispatch({
          type: PUT_EXP_ERROR,
          payload: JSON.stringify(err, Object.getOwnPropertyNames(err))
        });
      });
  };
};

// POST

export const postExpAction = (ID, exp) => {
  return (dispatch) => {
    dispatch({ type: POST_EXP_REQUEST });
    fetch(`${API_USER}${ID}/experiences`, {
      method: 'POST',
      headers: {
        Authorization: TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(exp)
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else throw new Error('Errore Fetch Profilo', res.status);
      })
      .then((postedData) => {
        dispatch({ type: POST_EXP_SUCCESS, payload: postedData });
        console.log(postedData);
      })
      .catch((err) => {
        console.log('Errore nel fetch' + typeof err);
        dispatch({
          type: POST_EXP_ERROR,
          payload: JSON.stringify(err, Object.getOwnPropertyNames(err))
        });
      });
  };
};

// DELETE

export const deleteExpAction = (ID, expId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_EXP_REQUEST });
    fetch(`${API_USER}${ID}/experiences/${expId}`, {
      method: 'DELETE',
      headers: {
        Authorization: TOKEN,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else throw new Error('Errore Fetch Profilo' + res.status);
      })
      .then((deletedData) => {
        dispatch({ type: DELETE_EXP_SUCCESS, payload: deletedData });
        console.log(deletedData);
      })
      .catch((err) => {
        console.log('Errore nel fetch' + typeof err);
        dispatch({
          type: DELETE_EXP_ERROR,
          payload: JSON.stringify(err, Object.getOwnPropertyNames(err))
        });
      });
  };
};
