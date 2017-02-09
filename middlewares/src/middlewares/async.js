export default function({ dispatch }) {
  return next => action => {
    if(!action.payload || !action.payload.then) {
      return next(action);
    }

    console.log('we have promise', action);

    action.payload
      .then(response => {
      const newAction = { ...action, payload: response };

      dispatch(newAction);
    });
  }
}
