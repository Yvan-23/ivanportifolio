import './App.css'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <div id='projects' className='bg-[#080808] text-white px-40 py-20 min-h-screen'>
      <p className='font-bold text-3xl'> My Projects</p>
    </div>
    </>
  )
}

export default App
