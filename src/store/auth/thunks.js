import { checkingCredentials, login, logout } from './authSlice'
import { loginWithEmailAndPassword } from './providers'

// export const checkingAuthentication = () => {
//   return async (dispatch) => {
//     dispatch(checkingCredentials())
//   }
// }

export const startLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const { ok, data } = await loginWithEmailAndPassword({ email, password })

    if (!ok) return dispatch(logout({ errorMessage: data }))
    window.localStorage.setItem('token', data.token)
    dispatch(login(data))
  }
}
