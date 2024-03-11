import '../theme/globals.css'
import THEME from '../theme/constants'
import { ThemeProvider } from 'styled-components'


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
