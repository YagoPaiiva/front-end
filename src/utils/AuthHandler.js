import Cookies from 'js-cookie'

export const isLogged = () => {
  const token = Cookies.get('token')
  return (!!(token))
}
export const doLogin = (token, user) => {
  Cookies.set('token', token)
  Cookies.set('username', user)
}

export const doLogout = () => {
  Cookies.remove('token')
  Cookies.remove('username')
}
