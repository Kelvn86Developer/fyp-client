import Container from '../components/layout/Container'
import Navbar from '../components/layout/Navbar'
import SideNav from '../components/layout/SideNav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return( 
   <div className='app flex w-[100%]'>
      <div className='justify-start relative w-[24%] bg-main-400'>
      <SideNav/>
      </div>  
      <Container>
         <Component {...pageProps} />
      </Container>
   </div>
   )
}

export default MyApp
