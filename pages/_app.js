import {ThemeProvider} from 'next-themes'
import NextProgress from 'nextjs-progressbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
  <ThemeProvider attribute='class'>
    <NextProgress height={4} />
  <Component {...pageProps} />  
   </ThemeProvider>
)
 
}

export default MyApp
