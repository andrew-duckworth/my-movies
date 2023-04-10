function toggleEditReducer(state = false, action: any): boolean {
  const { type, payload } = action

  switch (type) {
    case 'TOGGLE_EDIT':
      return !state
    default:
      return state
  }
}

export default toggleEditReducer
