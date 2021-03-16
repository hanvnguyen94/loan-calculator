import apiUrl from '../apiConfig'
import axios from 'axios'

export const loanIndex = user => {
  return axios({
    url: apiUrl + '/loans',
    method: 'GET',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const loanCreate = (loan, user) => {
  return axios({
    url: apiUrl + '/loans',
    method: 'POST',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
    },
    // send the loan object as our data for creating a loan
    data: { loan }
  })
}
// get a single purchase
export const loanShow = (id, user) => {
  return axios({
    url: apiUrl + `/loans/${id}`,
    method: 'GET',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const loanDelete = (id, user) => {
  return axios({
    url: apiUrl + `/loans/${id}`,
    method: 'DELETE',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const calculatorUpdate = (id, loan, user) => {
  return axios({
    url: apiUrl + `/loans/${id}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { loan }
  })
}
