const profiles = (state = [], action ) => {
  switch(action.type) {
    case 'PROFILES':
      return action.profiles
    case 'ADD_PROFILE':
      return [action.profile, ...state]
    case 'UPDATE_PROFILE':
      return state.map( p => {
        if (p.id === action.profile.id)
          return action.profile
        return p
      })
    case 'DELETE_PROFILE':
      return state.filter( p => p.id !== action.id )
    default:
      return state;
  }
}

export default profiles;