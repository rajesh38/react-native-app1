import * as ActionTypes from '../githubExplorer/actions/ActionTypes';

const initState = {
  loading: false,
  loaded: false,
  data: {},
};

export default function githubExplorer(state = initState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_REPO_START:
      return {
        ...state, loading: true, data: action.data
      };
    case ActionTypes.LOAD_REPO_SUCCESS:
      return {
        ...state, loading: false, loaded: true, data: action.data
      }
    default:
      return state;
  }
}
