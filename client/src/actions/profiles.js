import axios from 'axios';

export const getProfiles = () => {
  return (dispatch) => {
    axios.get('/api/profiles')
      .then( res => dispatch({ type: 'PROFILES', profiles: res.data }) )
  }
}

export const addProfile = (profile) => {
  return (dispatch) => {
    axios.post('/api/profiles', { profile } )
     .then( res => dispatch({ type: 'ADD_PROFILE', profile: res.data }) )
  }
}

export const updateProfile = (profile) => {
  return (dispatch) => {
    axios.put(`/api/profiles/${profile.id}`, { profile } )
      .then( res => dispatch({ type: 'UPDATE_PROFILE', profile: res.data }) )
  }
}

export const deleteProfile = (id) => {
  return (dispatch) => {
    axios.delete(`/api/profiles/${id}`)
      .then( () => dispatch({ type: 'DELETE_PROFILE', id }) )
  }
}