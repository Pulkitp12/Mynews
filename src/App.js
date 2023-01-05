import React from 'react';
import './App.css';
import LogIn from './components/LogIn';
import NavBar from './components/Navbar';
import Newscomp from './components/Newscomp';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import { useState } from 'react';

const App=()=>{
  const pagesize=9;
  const [mode, setMode]= useState('light')
  const toggleMode = () => {
  if (mode==='light')
  {setMode('dark');
   document.body.style.backgroundColor="black";}
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
  }
}
  
    return (
      <div>
            <Router>
              <NavBar mode={mode} toggleMode={toggleMode}/>
                <Routes>
                    <Route exact path="/" element={<Newscomp mode={mode} key="s" className="active col-9" category={""} pagesize={pagesize} toggleMode={toggleMode}/>}/> 
                    <Route exact path="/business" element={<Newscomp mode={mode}  key="business"  className="col-9" category={"business"} pagesize={pagesize} toggleMode={toggleMode}/>}/>
                    <Route exact path="/entertainment" element={<Newscomp mode={mode}  key="entertainment" className="col-9" category={"entertainment"} pagesize={pagesize} toggleMode={toggleMode}/>}/> 
                    <Route exact path="/general" element={<Newscomp mode={mode}  key="general" className="col-9" category={"general"} pagesize={pagesize} toggleMode={toggleMode}/>}/> 
                    <Route exact path="/health" element={ <Newscomp mode={mode}  key="health" className="col-9" category={"health"} pagesize={pagesize} toggleMode={toggleMode}/>}/>
                    <Route exact path="/science" element={ <Newscomp mode={mode}  key="science" className="col-9" category={"science"} pagesize={pagesize} toggleMode={toggleMode}/>}/>
                    <Route exact path="/sports" element={<Newscomp mode={mode}  key="sports" className="col-9" category={"sports"} pagesize={pagesize} toggleMode={toggleMode}/>}/> 
                    <Route exact path="/technology" element={ <Newscomp mode={mode}  key="technology" className="col-9" category={"technology"} pagesize={pagesize} toggleMode={toggleMode}/>}/>
                    <Route path="/login" element={<LogIn mode={mode}  toggleMode={toggleMode}/>}/>
                    <Route path="/about" element={<About mode={mode}  toggleMode={toggleMode}/>}/>
                  </Routes>               
          </Router>
      </div>
    )
}

export default App;