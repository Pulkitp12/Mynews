import React from 'react';
import './App.css';
import LogIn from './components/LogIn';
import NavBar from './components/Navbar';
import Newscomp from './components/Newscomp';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import { useState } from 'react';
import Subscription from './components/Subscription';
import ContactUs from './components/ContactUs';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Side from './components/Side';

const App=()=>{
  const pagesize=9;
  const apikey= process.env.REACT_APP_API_KEY2;
  // const apikey = process.env.REACT_APP_API_KEY;
  const apik= process.env.REACT_APP_API_KEY3;
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

const dibl=()=>{
  let a= document.getElementById('lgn');
  let b= document.getElementById('lgnn');
        a.style.display="none";
        b.style.display="block";
}
const diblrev=()=>{
  let a= document.getElementById('lgn');
  let b= document.getElementById('lgnn');
        a.style.display="block";
        b.style.display="none";
}
  const eml=(s)=>{
     let a=s.indexOf('@');
     let b=s.indexOf('.');
     let c= s.length;
     if(s.includes(" ") || a>b || (c-b)<2 || (b-a<3)){
      return 0;
     }
     else{
      return 1;
     }
  }
  
    return (
      <div>
            <Router>
              <NavBar mode={mode} toggleMode={toggleMode} dibl={dibl} diblrev={diblrev}/>
              <ProSidebarProvider>  
                <Routes>
                    <Route exact path="/" element={<><Side/><Newscomp mode={mode} apikey={apikey} key="s" className="col-9" category={""} pagesize={pagesize} toggleMode={toggleMode}/></>}/> 
                    <Route exact path="/business" element={<><Side/><Newscomp mode={mode} apikey={apikey}  key="business"  className="col-9" category={"business"} pagesize={pagesize} toggleMode={toggleMode}/></>}/>
                    <Route exact path="/entertainment" element={<><Side/><Newscomp mode={mode} apikey={apikey}  key="entertainment" className="col-9" category={"entertainment"} pagesize={pagesize} toggleMode={toggleMode}/></>}/> 
                    <Route exact path="/general" element={<><Side/><Newscomp mode={mode} apikey={apikey}  key="general" className="col-9" category={"general"} pagesize={pagesize} toggleMode={toggleMode}/></>}/> 
                    <Route exact path="/health" element={ <><Side/><Newscomp mode={mode} apikey={apikey}  key="health" className="col-9" category={"health"} pagesize={pagesize} toggleMode={toggleMode}/></>}/>
                    <Route exact path="/science" element={<><Side/> <Newscomp mode={mode} apikey={apikey}  key="science" className="col-9" category={"science"} pagesize={pagesize} toggleMode={toggleMode}/></>}/>
                    <Route exact path="/sports" element={<><Side/><Newscomp mode={mode} apikey={apikey}  key="sports" className="col-9" category={"sports"} pagesize={pagesize} toggleMode={toggleMode}/></>}/> 
                    <Route exact path="/technology" element={<><Side/> <Newscomp mode={mode} apikey={apikey}  key="technology" className="col-9" category={"technology"} pagesize={pagesize} toggleMode={toggleMode}/></>}/>
                    <Route path="/login" element={<LogIn mode={mode} eml={eml} diblrev={diblrev} dibl={dibl} toggleMode={toggleMode} />}/>
                    <Route path="/subs" element={<Subscription mode={mode}  toggleMode={toggleMode}/>}/>
                    <Route path="/about" element={<About mode={mode} apikey={apik} toggleMode={toggleMode}/>}/>
                    <Route path="/contact" element={<ContactUs mode={mode} eml={eml} toggleMode={toggleMode}/>}/>
                  </Routes>      
                  </ProSidebarProvider>        
          </Router>
      </div>
    )
}

export default App;