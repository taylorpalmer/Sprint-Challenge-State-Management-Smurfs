export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS_START });

  xhttp
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res);

      dispatch({
        type: FETCHING_SMURFS_SUCCESS,
        payload: res.data.name,
      });
    })
    .catch((err, res) => {
      console.log(err);

      dispatch({
        type: FETCHING_SMURFS_FAILURE,
        payload: res.error.message,
      });
    });
};

export const addSmurf = () => (dispatch) => {
  dispatch({ type: ADD_SMURF });

  xhttp
    .post("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
