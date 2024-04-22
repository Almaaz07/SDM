import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Sidebar from './components/sidebar';
function App() {
  const [show, SetShow] = useState(false)

  const showDash =()=>{
    SetShow(!show)
  }
  return (
    <>
     <Navbar showDash={showDash} />
     <div className='flex w-[]'>
      <Sidebar SetShow={SetShow} show={show}/>
      <Hero/>
    </div>
    </>
  )
}

export default App
