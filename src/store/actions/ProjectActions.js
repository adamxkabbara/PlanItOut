export function createProject(project) {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // Make async call to db
    dispatch({type: 'CREATE_PROJECT', project: project});
  }
};