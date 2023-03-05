import { Navigate } from 'react-router-dom'
import { useIsAuthenticated } from '../GeneralHooks'

const PrivateRoutes = ({ children }) => {
  const { isAuthenticated } = useIsAuthenticated('authenticated')

  return isAuthenticated ? children : <Navigate to='/login' />
}

export default PrivateRoutes
