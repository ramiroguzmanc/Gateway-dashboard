import { axiosInstance } from '../../api/'

export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const { data } = await axiosInstance.post('/auth/login', {
      email,
      password
    })
    return { ok: true, data }
  } catch (error) {
    const errorMessage = error.response.data.message.toString()
    return { ok: false, data: errorMessage }
  }
}
