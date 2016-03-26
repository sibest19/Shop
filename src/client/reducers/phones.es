const initialState = {
  phones: []
};

export function phones(state = initialState, action) {
  switch (action.type) {
  case 'ADD_PHONE':
    return {
      ...state,
      phones: [
        ...state.phones, {
          text: action.fields.name.value,
        },
      ],
    };

  case 'DELETE_PHONE':
    return {
      ...state,
      phones: [
        ...state.phones.slice(0, action.index),
        ...state.phones.slice(+action.index + 1),
      ],
    };

  default:
    return state;
  }
}