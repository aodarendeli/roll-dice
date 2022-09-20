import './App.css';
import {createContext,useState,useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import RollDice from './pages/rollDice'
import CoinFlip from './pages/coinFlip'
import Dashboard from './pages/Dashboard'


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
           <Route path='/' element={<Dashboard />} />
           <Route path='/games/dice' element={<RollDice />} />
           <Route path='/games/coin' element={<CoinFlip />} />
         </Routes>
       </div>
     </Router>
      </div>
  );
}

export default App;

