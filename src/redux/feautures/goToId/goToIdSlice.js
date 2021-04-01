const GO_TO_ID_CHANGED = 'GO_TO_ID_CHANGED';

const initialState = window.location.pathname.slice(3);

export const changeGoToIdCreateAction = function(id) {
  return {
    type: GO_TO_ID_CHANGED,
    id: id
  };
}

export const goToIdReducer = function(state = initialState, action) {
  switch (action.type) {
    case GO_TO_ID_CHANGED: {
      state = action.id;

      return state;
    }
    default: {
      return state;
    }
  }
}
