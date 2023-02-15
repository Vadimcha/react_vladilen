import {Route, Routes} from 'react-router-dom'
import {ProductPage} from './pages/productsPage'
import {AboutPage} from './pages/aboutPage'
import {Navigation} from './components/navigaton'

function App() {
  return (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={ <ProductPage />  } />
      <Route path="/about" element={ <AboutPage />  } />
    </Routes>
   </>
  )
}

export default App;
