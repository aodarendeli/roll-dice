import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {createContext,useState,useEffect} from 'react'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div 
        onClick={toggleTheme}
        >anaa</div>
        <div className="switch">
          <Sidebar />
        </div>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
