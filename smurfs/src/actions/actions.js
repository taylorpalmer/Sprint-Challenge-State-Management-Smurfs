import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

export const POST_SMURFS_START = "POST_SMURFS_START";
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
export const POST_SMURFS_FAILURE = "POST_SMURFS_FAILURE";

export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = (smurfs) => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS_START });

  axios
    .get("http://localhost:3333/smurfs", smurfs)
    .then((res) => {
      console.log(res);

      dispatch({
        type: FETCHING_SMURFS_SUCCESS,
        payload: smurfs,
      });
    })
    .catch((err, res) => {
      console.log(err);

      dispatch({
        type: FETCHING_SMURFS_FAILURE,
        payload: res.error,
      });
    });
};

export const postSmurfs = (smurfs) => (dispatch) => {
  dispatch({ type: POST_SMURFS_START });

  axios
    .post("http://localhost:3333/smurfs", smurfs)
    .then((res) => {
      console.log(res);

      dispatch({
        type: POST_SMURFS_SUCCESS,
        payload: smurfs,
      });
    })
    .catch((err, res) => {
      console.log(err);

      dispatch({
        type: POST_SMURFS_FAILURE,
        payload: res.error,
      });
    });
};

export const addSmurf = (smurfs) => (dispatch) => {
  dispatch({
    type: ADD_SMURF,
    payload: smurfs,
  });
};
