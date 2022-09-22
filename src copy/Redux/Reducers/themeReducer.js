const defaultState = {
  value: 'dark',
}

function themeReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        value: action.payload,
      }
    default:
      return state
  }
}

export default themeReducer
