import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export const useIsAuthenticated = (state) => {
  const { status } = useSelector((state) => state.auth)
  const isAuthenticated = useMemo(() => status === state, [status])

  return { isAuthenticated }
}
