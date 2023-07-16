import './App.css';
import {useState}  from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
         const [mode, setMode] = useState('light');
         const [alert, setAlert] = useState(null);

       const showAlert = (message, type)=> {
              setAlert({
                msg: message, 
                type : type
              })
              setTimeout(() => {
                setAlert(null);
              }, 1500)
       }

         const toggleMode = () => {
          if(mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor  = '#042743';
            showAlert('dark mode has been enabled', 'success');

          } else {
            setMode('light');
            document.body.style.backgroundColor  = '#fff';
            showAlert('light mode has been enabled', 'success');
          }
         }

  return (
    <BrowserRouter>
<Navbar title="TextUntils" aboutText="About" mode={mode} toggleMode={toggleMode}></Navbar>
   <Alert alert={alert}></Alert>
    <div className='container my-3'>
    <Routes>
      <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode} />} />
      <Route path='/about' element={<About />}/>
    {/* <About></About>
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode} ></TextForm> */}
    </Routes>
 
    </div>
    
    
    
    </BrowserRouter>

  );
}

export default App;

