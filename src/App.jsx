import './App.css'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'


function App() {
  
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <div id='projects' className='bg-[#080808] text-white px-40 py-20 min-h-screen'>
      
    </div>
    </>
  )
}

export default App
