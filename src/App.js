import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {createContext,useState,useEffect} from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import RollDice from './pages/rollDice'
import CoinFlip from './pages/coinFlip'
import Marque from './components/marque/index'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [navState, setNavState] = useState(localStorage.getItem('theme') || 'dark')
  const themeVal = useSelector((selector) => selector?.themeReducer?.value)
  useEffect(() => {
    console.log(navState)
  }, [navState])
  
  useEffect(() => {
    setTheme(localStorage.getItem('theme'))
  }, [localStorage.getItem('theme')])
   
  const themeLight=()=>{
    localStorage.setItem('theme','light')
    setTheme('light')
  }
  const themeDark=()=>{
    localStorage.setItem('theme','dark')
    setTheme('dark')
  }
  return (
      <div className="App" id={theme}>
        {/* <div 
          onClick={themeDark}
          >dark</div>
          <div 
          onClick={themeLight}
          >light</div>
          <div className="switch">
        </div> */}
       <Router>
       <div className={theme}>
         <Routes>
           {/* <Route path='/' element={<Dashboard />} /> */}
           <Route path='/games/dice' element={<RollDice />} />
           <Route path='/games/coin' element={<CoinFlip />} />
         </Routes>
       </div>
     </Router>
<<<<<<< HEAD
  <Sidebar />
  <div>
  <Marque />
  </div>
  
=======
  <Sidebar setNav={(val)=>setNavState(val)} />
  <div 
  style={{
    border:'1px solid red',
    height:'100vh',
    width:navState? '550px':'200px',
    transition:'.5s'
    
  }}/>
>>>>>>> a44b43b6656ed2a0a767a9c7ee1c2e51ed82e0fb
      </div>
  );
}

export default App;

