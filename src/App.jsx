import './App.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {

  return (
    <>
        <Navbar />
        <div id="hero">
          <Home />
        </div>
        <Footer />
    </>
  )
}

export default App
