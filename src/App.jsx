import react from 'react'
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Blogs/>
    <Footer/>
    </>
  )
}

export default App
