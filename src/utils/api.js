/* eslint-disable no-unused-vars */
import Cookies from 'js-cookie'

const BASEAPI = 'http://161.97.167.198:4109/v1'

export const getAllUsers = async () => {
  const token = Cookies.get('token')
  return fetch(`${BASEAPI}/users`, {
    method: 'GET',
    headers: {
      token
    }
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error))
}

export const postAuthLogin = async data => {
  return fetch(`${BASEAPI}/auth`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error))
}

export const postCreateUser = async data => {
  return fetch(`${BASEAPI}/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error))
}

export const putUser = async data => {
  const token = Cookies.get('token')
  const id = data.idUser
  delete data.idUser
  return fetch(`${BASEAPI}/users/${id}`, {
    method: 'PUT',
    headers: {
      token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error))
}

export const deleteUser = async data => {
  const token = Cookies.get('token')
  return fetch(`${BASEAPI}/users/${data}`, {
    method: 'DELETE',
    headers: {
      token
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error))
}
