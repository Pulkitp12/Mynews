import React, { useState } from 'react'
import '../components/css/Login.css';
import { useNavigate } from "react-router-dom";

const LogIn = (props) => {
  const [success,setSuccess]= useState('secondary');
  const navigate = useNavigate();
  const submit=(e)=>{
    e.preventDefault();
    let a1=document.getElementById("a1").value;
    let a2=document.getElementById("a2").value;
    let a=document.getElementById("Password1").value;
    let p=document.getElementById("Password2").value;
    let c=document.getElementById("Email1").value;
    let b = document.getElementById('ale');
    let x=props.eml(c);
    if(a!==p){
      setSuccess('warning');
      b.textContent="OOPS! Password dont match";
      b.style.display="block";
     setTimeout(()=>{
     b.style.display="none";
   },2000);
    }
    else if(a1==="" ||a2===""||a===""||p===""||c===""){
      setSuccess('warning');
      b.textContent="OOPS! Fill All The Field";
      b.style.display="block";
     setTimeout(()=>{
     b.style.display="none";
   },2000);}
   else if(x===0){
    setSuccess('warning');
    b.textContent="OOPS! Enter valid Email";
    b.style.display="block";
   setTimeout(()=>{
   b.style.display="none";
 },2000);
  }
    else if(x===1){
      setSuccess('success');
      b.textContent="Congrats on Signing Up";
      b.style.display="block";
     setTimeout(()=>{
     b.style.display="none";
   },2000);
      
      localStorage.setItem("Email",c);
      localStorage.setItem("Password",a);
      localStorage.setItem("fullName",a1 + " " +a2);
      setTimeout(()=>{
        window.location.reload();
      },2000);
    }
  
  }
  const show=()=>{
    let a= document.getElementById("sup");
    a.style.display="block";
    let b = document.getElementById("sub");
    b.style.display="none";
  }
  
  const add= ()=>{
    let email = document.getElementById('emin').value;
    let password = document.getElementById('psin').value;
    let a=localStorage.getItem("Email");
    let b= localStorage.getItem("Password");
    let y = document.getElementById('ale');
    if(email===a && password===b){
      props.dibl();
      navigate("/");
        }
    else{ 
      setSuccess('danger');
      y.textContent="OOPS! Login Credential Dosen't Match";
      y.style.display="block";
     setTimeout(()=>{
     y.style.display="none";
   },2000);
    }
  }
 const chan = ()=>{
    let a=document.getElementById('psin');
    a.setAttribute("type","text");
    setTimeout(()=>{
      a.setAttribute("type","password");
    },3000)
  }
 
    return (
      <div className='hey1' style={props.mode==='light'?{color:'black',backgroundColor:'white'}:{color:'white',backgroundColor:'black'}}>
        <div className='row'>
      <div className='col-md-4 form' id='sub' style={props.mode==='light'?{color:'black',backgroundColor:'white',border: '3px solid black'}:{color:'white',backgroundColor:'black',border: '3px solid white'}}><h2 className='text-center'>LogIn/SignUp</h2>
        <input type="text" name="email" id="emin" placeholder="Enter Email here" className='mt-3'/>
        <input type="Password" name="password" id="psin" placeholder="Enter password"/><button className="see" onClick={chan}>&#9739;</button>
        <span className={`text-center text-${success}`} id='ale' style={{display:'none'}}></span>
        <button className='btn btn-md btn-success mt-4' id='lgn' onClick={add}>LOGIN</button>
        <div className='d-flex justify-content-between my-3 py-3'>
         <h4>Don't have an Account  &#8688;</h4>
        <button onClick={show} className="btn btn-md btn-primary">SignUp</button>
        </div>
        <span className='mt-3'><h2 className='text-center'>Log In With</h2></span>
        <div className='my-4' id='icns'>
        
           <a href="https://www.facebook.com/login/"><i className="fa fa-2x fa-facebook-official"></i></a>
          <a href="https://accounts.google.com/signinchooser?ifkv=AeAAQh4hG3swBqX66zBXdZFV7Tx3jIDecvn7cfCvAX7BEx9GWZ7APYugk9ox0J6bIZgfI_mqIQgX&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><i className="fa fa-2x fa-google-plus"></i></a>
           <a href="https://www.instagram.com/accounts/login/"><i className="fa fa-2x fa-instagram"></i></a>
           <a href="https://www.linkedin.com/login"><i className="fa fa-2x fa-linkedin-square"></i></a>
           
        </div>
      </div>
      <div className='col-md-2'></div>
      <div className='col-md-4 bord' id="sup" style={props.mode==='light'?{color:'black',backgroundColor:'white',border: '3px solid black'}:{color:'white',backgroundColor:'black',border: '3px solid white'}}><h1 className='text-center'>SignUp</h1>
      <form className='px-2 py-3'>
                <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" id='a1' className="form-control" aria-describedby="emailHelp"/>
                <label  className="form-label">Last Name</label>
                <input type="text" id="a2" className="form-control" aria-describedby="emailHelp"/>
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="Password1"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="Password2"/>
              </div>
              <span className={`text-center text-${success}`} id='ale' style={{display:'none'}}></span>
              <button className="mt-2 btn btn-primary" onClick={submit}>Submit</button>
            </form>
            
      </div>
      </div>
      
      </div>
    )
}
 export default LogIn;
