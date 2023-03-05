import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRoutes } from './routes'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7352C7'
    }
  }
})

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRoutes />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
