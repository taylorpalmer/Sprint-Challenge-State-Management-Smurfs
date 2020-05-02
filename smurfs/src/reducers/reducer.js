import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_FAILURE,
  ADD_SMURF,
} from "../actions/actions";

export const initialState = {
  smurfs: [
    {
      name: "",
      age: null,
      height: "",
      id: null,
    },
  ],
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
      };
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case POST_SMURFS_START:
      return {
        ...state,
        smurfs: action.payload,
      };
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
      };
    case POST_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
      };
    default:
      return state;
  }
};
