import React from 'react'
import '../components/css/Login.css';

const LogIn = (props) => {
  let x=0;
  const submit=(e)=>{
    x=x+1;
    e.preventDefault();
    let a=document.getElementById("Password1").value;
    let b=document.getElementById("Password2").value;
    let c=document.getElementById("Email1").value;
    if(a!==b){
       alert("Password dont match");
    }
    
    else{
      localStorage.setItem("Email"+x,c);
      localStorage.setItem("Password"+x,a);
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
    if(email==="pulkitpareek12@gmail.com" && password==="123456"){
      window.location.href = "http://localhost:3001/";
    }
    else{ alert("LogIn Credentials Doesnt Match")}
  }
 const chan = ()=>{
    let a=document.getElementById('psin');
    a.setAttribute("type","text");
    setInterval(()=>{
      a.setAttribute("type","password");
    },2000)
  }
  
    return (
      <div className='hey1' style={props.mode==='light'?{color:'black',backgroundColor:'white'}:{color:'white',backgroundColor:'black'}}>
        <div className='row'>
      <div className='col-md-4 form' id='sub' style={props.mode==='light'?{color:'black',backgroundColor:'white',border: '3px solid black'}:{color:'white',backgroundColor:'black',border: '3px solid white'}}><h2 className='text-center'>LogIn/SignUp</h2>
        <input type="text" name="email" id="emin" placeholder="Enter Email here" className='mt-3'/>
        <input type="Password" name="password" id="psin" placeholder="Enter password"/><button className="see" onMouseDown={chan}>&#9739;</button>
        <button className='btnn mt-4' onClick={add}>LOGIN</button>
        <div className='d-flex justify-content-between my-3 py-3'>
         <h5>Don't have an Account  &#8688;</h5>
        <button onClick={show} className="btn btn-sm btn-primary">SignUp</button>
        </div>
        <span className='mt-3'><h2 className='text-center'>Log In With</h2></span>
        <div className='mt-4'id='icns'>
        
        <a href="/"><i className="fa fa-2x fa-facebook-official"></i></a>
            <a href="/"><i className="fa fa-x fa-google-plus"></i></a>
           <a href="/"><i className="fa fa-2x fa-instagram"></i></a>
           <a href="/"><i className="fa fa-2x fa-linkedin-square"></i></a>
           
        </div>
      </div>
      <div className='col-md-2'></div>
      <div className='col-md-4 bord' id="sup" style={props.mode==='light'?{color:'black',backgroundColor:'white',border: '3px solid black'}:{color:'white',backgroundColor:'black',border: '3px solid white'}}><h1 className='text-center'>SignUp</h1>
      <form className=' px-2 py-3'>
                <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" aria-describedby="emailHelp"/>
                <label  className="form-label">Last Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="Password1"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="Password2"/>
              </div>
              
              <button className="btn btn-primary" onClick={submit}>Submit</button>
            </form>
      </div>
      </div>
      </div>
    )
}
 export default LogIn;
