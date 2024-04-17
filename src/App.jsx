import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Sidebar from './components/sidebar';
function App() {


  return (
    <>
     <Navbar/>
    <div className='flex'>
    <Sidebar/>   
    <Hero/>
    </div>
    </>
  )
}

export default App
