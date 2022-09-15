import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {createContext,useState,useEffect} from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const themeVal = useSelector((selector) => selector?.themeReducer?.value)
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
        <div 
onClick={themeDark}
>dark</div>
<div 
onClick={themeLight}
>light</div>
<div className="switch">
</div>
       <Router>
       <div className={theme}>
         <Routes>
           {/* <Route path='/' element={<Dashboard />} /> */}
           {/* <Route path='/games/dice' element={<RollDice />} /> */}
           {/* <Route path='/games/coin' element={<CoinFlip />} /> */}
         </Routes>
       </div>
     </Router>
  <Sidebar />
      </div>
  );
}

export default App;

