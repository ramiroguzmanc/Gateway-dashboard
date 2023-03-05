import { Navigate } from 'react-router-dom'
import { useIsAuthenticated } from '../GeneralHooks'

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useIsAuthenticated('authenticated')
  return !isAuthenticated ? children : <Navigate to='/' />
}

export default PublicRoute
