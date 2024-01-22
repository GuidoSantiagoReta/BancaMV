
import { Header } from './components/Header/Header';
import { FirstSection } from './components/FirstSection/FirstSection';
import { Services } from './components/Services/Services';
import { Products } from './components/Products/Products';
import { Footer } from './components/Footer/Footer';
import { TopButton } from './components/TopButton';




export default function Home() {
  return (
  <>
 <Header/>
 <FirstSection/>
 <Services/>
 <TopButton/>
 <Products/>
 <Footer/>
 </>
  )
}
