import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About2 from './About2';
import About from './About';
import Textform from './Textform';
import React, {useState} from 'react'
import Alert from './Alert';
import { BrowserRouter , Routes, Route, } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled !","success");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
      
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled !","success");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
      
    }
  }
  // const changeMode = ()=>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = 'darkblue';
  //     showAlert("Blue mode has been enabled !","success");
  //     setTimeout(() => {
  //       setAlert(null);
  //     }, 1500);
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled !","success");
  //     setTimeout(() => {
  //       setAlert(null);
  //     }, 1500);
  //   }
  // }

  // const switchMode = ()=>{
  //   if(mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = 'Red';
  //     showAlert("Red Mode has been enabled !","success");
  //     setTimeout(() => {
  //       setAlert(null);
  //     }, 1500);
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled !","success");
  //     setTimeout(() => {
  //       setAlert(null);
  //     }, 1500);
  //   }
  // }
  const [alert, setAlert] = useState(null);
   
   const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   }


  return (
    <>
    
    <div>
        <Navbar title="TEXTUTILS" about="About" home="Home" mode={mode} toggleMode={toggleMode} />
        {/* changeMode={changeMode} switchMode={switchMode} use this for blue and red mode */}
    </div>
    <div>
     <Alert alert={alert} />
   </div>
    <div className="container"  >
      <Textform heading="Enter the text to analyze here" mode={mode} showAlert={showAlert}/>
    </div>

      {/* <BrowserRouter> */}
        {/* <Routes>
            <Route path="/" element={<div className="container"  >
                                      <Textform heading="Enter the text to analyze here" mode={mode} showAlert={showAlert}/>
                                      </div>}/>
            <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>                         
                          
        </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;









//  {/* NAVBAR */}
//  <div>
//  <Navbar title="TEXTUTILS" about="About" home="Home" mode={mode} toggleMode={toggleMode} changeMode={changeMode} switchMode={switchMode}/>
// </div>
// <div>
//  <Alert alert={alert} />
// </div>

// {/* TEXTFORM */}
{/* <div className="container"  >
   <Textform heading="Enter the text to analyze here" mode={mode} showAlert={showAlert}/>
</div> */}

// {/* ABOUT */}

{/* <About mode={mode} toggleMode={toggleMode}/> */}


// {/* ABOUT 2nd TYPE */}
// {/* <About2/> */}