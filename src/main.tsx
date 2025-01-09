import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { I18nextProvider } from 'react-i18next'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App'
import i18n from './locales/i18n'

const theme = createTheme({
  palette: {
    mode: 'dark', // Change to 'dark' for dark mode
    primary: {
      main: '#1976d2'
    },
    secondary: {
      main: '#dc004e'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
