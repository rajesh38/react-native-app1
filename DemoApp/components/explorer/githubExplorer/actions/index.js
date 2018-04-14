import axios from 'axios';
import * as ActionTypes from './ActionTypes'

function loadRepoSuccess (data) {
  return {
    type: ActionTypes.LOAD_REPO_SUCCESS,
    data: data
  }
}
function loadRepoStart (repoOwner) {
  return {
    type: ActionTypes.LOAD_REPO_START,
    data: {repoOwner}
  }
}
export function loadRepos (repoOwner) {
  return ((dispatch) => {
    dispatch(loadRepoStart(repoOwner));
    return axios.get(`https://api.github.com/users/${repoOwner}/repos`)
                .then((resp) => {
                  let repos = resp.data;
                  let data = {
                    repoOwner,
                    repos
                  }
                  dispatch(loadRepoSuccess(data))
                })
  })
}
