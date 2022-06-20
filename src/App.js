import React, {useState} from 'react'
import "./App.css";
import About from "./components/About";
import Forms from "./components/Forms";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [darkMode,setDarkMode] = useState("light")    // State for dark mode in the website

  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    }
    )
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggledark = ()=>{

    let buttons = document.querySelectorAll(".best")
    if(document.getElementById("inlineRadio1").checked === true){
      setDarkMode("dark")
      document.body.style.backgroundColor = "green"
      document.body.style.color = "black"
      for (let index = 0; index < buttons.length; index++) {
        buttons[index].style.backgroundColor = "#0a390a"
      }
      showAlert("Green Dark Mode has been enabled","success")
      document.title = "TextUtils-Green Mode"
    }
    else if(document.getElementById("inlineRadio2").checked === true){
      setDarkMode("dark")
      document.body.style.backgroundColor = "red"
      document.body.style.color = "black"
      for (let index = 0; index < buttons.length; index++) {
        buttons[index].style.backgroundColor = "#411212"
      }
      showAlert("Red Dark Mode has been enabled","success")
      document.title = "TextUtils-Red Mode"
    }
    else if(document.getElementById("inlineRadio3").checked === true){
      setDarkMode("dark")
      document.body.style.backgroundColor = "#353589"
      document.body.style.color = "black"
      for (let index = 0; index < buttons.length; index++) {
        buttons[index].style.backgroundColor = "#131324"
      }
      showAlert("Blue Dark Mode has been enabled","success")
      document.title = "TextUtils-Blue Mode"
    }
    else if(document.getElementById("inlineRadio5").checked === true){
      setDarkMode("dark")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      for (let index = 0; index < buttons.length; index++) {
        buttons[index].style.backgroundColor = "#231e1e"
      }
      showAlert("Dark Mode has been enabled","success")
      document.title = "TextUtils-Dark Mode"
    }
    else{
      setDarkMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light Mode has been enabled","success")
      document.title = "TextUtils-Light Mode"
    }
  }
  return (
    <Router>
    <Navbar title="TextUtils" mode = {darkMode} toggleDark = {toggledark}/>
    <Alert alert={alert}/>
    <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<Forms heading="Enter the text you want to analyze" mode = {darkMode} showalert={showAlert}/>}/>
        </Routes>
    </Router>
  );
}

export default App;
