import React, {useState} from 'react'

const App = () => {
  const [theme, setTheme] = useState("Light");

  const lightTheme = () =>{
    console.log("setting light theme");
    setTheme("Light");
  }

  const darkTheme = () =>{
    console.log("setting dark theme");
    setTheme("Dark");
  }

  return (
    <div className={`theme-container ${theme}`}>
      <div className="btn-container">
        <button id='Light' onClick={lightTheme}>Light</button>
        <button id='Dark' onClick={darkTheme}>Dark</button>
      </div>
    </div>
  )
}

export default App