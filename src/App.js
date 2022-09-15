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
  const [navState, setNavState] = useState(false)
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
       <Router>
       <div className={theme}>
         <Routes>
           {/* <Route path='/' element={<Dashboard />} /> */}
           <Route path='/games/dice' element={<RollDice />} />
           <Route path='/games/coin' element={<CoinFlip />} />
         </Routes>
       </div>
     </Router>
  <Sidebar setNav={(val)=>setNavState(val)} />
<div style={{
    marginLeft:navState? '180px':'40px',
    transition:'.5s'
    
  }} >
  <Marque />
</div>
      </div>
  );
}

export default App;

