import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Login,
  Dashboard,
  PersonasDashboard,
  SignUp,
  LoadingPage
} from '../pages'
import { DashboardLayout } from '../layouts'
import { useEffect } from 'react'
import { PublicRoute, PrivateRoutes } from './'
import { useAuthStore } from '../GeneralHooks/useAuthStore'

const BrowserRoutes = () => {
  const { checkAuthToken, status } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  if (status === 'checking') {
    return <LoadingPage />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/sign-up'
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route element={<PrivateRoutes><DashboardLayout /></PrivateRoutes>}>
          <Route path='/' element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route
            path='dashboard/perfil/personas'
            element={<PersonasDashboard />}
          />
        </Route>
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default BrowserRoutes
