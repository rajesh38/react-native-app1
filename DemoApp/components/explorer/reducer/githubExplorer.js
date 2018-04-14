const initState = {
  loading: false,
  loaded: false,
  data: {},
};

export default function githubExplorer(state = initState, action) {
  switch (action.type) {
    case "LOAD_REPOS":
      return {
        ...state, loading: true
      };
    case "LOAD_REPOS_SUCCESS":
      return {
        ...state, loading: false, loaded: true, data: {}
      }
    default:
      return state;
  }
}
