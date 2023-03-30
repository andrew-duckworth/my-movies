function reducer(state = false, action: any): boolean {
  const { type, payload } = action

  switch (type) {
    case 'TOGGLE_LIGHTS':
      return !state
    case 'LIGHTS_ON':
      return true
    case 'CHANGE_LIGHTS':
      return payload
    default:
      return state
  }
}

export default reducer
