import './App.css'
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import OurValues from './pages/OurValues/OurValues'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ourvalues' element={ <OurValues /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
