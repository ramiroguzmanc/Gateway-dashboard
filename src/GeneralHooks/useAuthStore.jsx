import { useDispatch, useSelector } from 'react-redux'
import { axiosInstance } from '../api'
import { checkingCredentials, clearErrorMessage, login, logout } from '../store/auth'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const startLogin = async ({ email, password }) => {
    dispatch(checkingCredentials())
    try {
      const { data } = await axiosInstance.post('/auth/login', { email, password })
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(login({ id: data.id, displayName: data.displayName, email: data.email, userType: data.userType }))
    } catch (error) {
      dispatch(logout('Credenciales incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const startRegister = async ({ email, password, name }) => {
    dispatch(checkingCredentials())
    try {
      const { data } = await axiosInstance.post('/auth/new', { email, password, name })
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(login({ id: data.id, displayName: data.displayName, email: data.email, userType: data.userType }))
    } catch (error) {
      dispatch(logout(error.response.data?.msg || '--'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const checkAuthToken = async () => {
    const token = window.localStorage.getItem('token')
    if (!token) return dispatch(logout())

    try {
      const { data } = await axiosInstance.get('auth/renew')
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(login({ id: data.id, displayName: data.displayName, email: data.email, userType: data.userType }))
    } catch (error) {
      window.localStorage.clear()
      dispatch(logout())
    }
  }

  const startLogout = () => {
    window.localStorage.clear()
    dispatch(logout())
  }

  return {
    //* Propiedades
    errorMessage,
    status,
    user,

    //* Métodos
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister
  }
}
