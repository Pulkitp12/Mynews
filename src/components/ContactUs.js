import React, {useState} from 'react';
import '../components/css/contactus.css';

const ContactUs=(props)=> {
	const [success,setSuccess]= useState('secondary');
    const gotcha=(e)=>{
		e.preventDefault();
    let b = document.getElementById('alert');
    let k = document.getElementById('name').value;
    let i = document.getElementById('email').value;
    let x=props.eml(i);
    let j = document.getElementById('msg').value;
    if(k==='' || i==='' || j===''){
		setSuccess('warning');
        b.textContent="Please fill all necessary details first";
        b.style.display="block";
       setTimeout(()=>{
       b.style.display="none";
     },1000);}
    
    else if(x===1){
		setSuccess('success');
    b.textContent="We will get back to you in next 5 minutes";
    b.style.display="block";
     setTimeout(()=>{
    b.style.display="none";
     },2000);}
	 else if(x===0) {
		setSuccess('warning');
		b.textContent="Enter valid Email";
		b.style.display="block";
		 setTimeout(()=>{
		b.style.display="none";
		 },2000);
	 }
    }
  return (
    <div className='mt-4 pt-4'>
        <div className='container mt-5 py-3' style={props.mode==='light'?{color:'black',backgroundColor:'white'}:{color:'white',backgroundColor:'black'}}>
            <div className="container">
		<div className="row ctus">
			<div className="col-md-6">
				<div className="container" style={{marginTop: '-100px'}}>
						<h3>Contact Us</h3>
				<div className="py-3 px-3 border ctfrm">
					<p>Please fill out this form to contact us</p>
					  <div className="mt-3">
					    <label>Name</label>
					    <input type="text" className="mt-3 form-control" id="name"/>
					  </div>
					  <div className="mt-3">
					    <label>Email</label>
					    <input type="email" className="form-control mt-3 " id="email" aria-describedby="emailHelp"/>
					  </div>
					  <div className="mt-3">
					    <label>Message</label>
					    <textarea className="form-control mt-3" id="msg"></textarea>
					  </div>
					  <h4 className={`text-center my-3 border text-${success}`} id='alert' style={{display:'none'}}>Contact</h4>
					  <button className="btn btn-primary mt-3" onClick={gotcha}>Submit</button> 
			</div>
			</div>
			</div>
            <div className='col-md-2'></div>
			<div className="col-md-4 ctinfo">
				<div className="well border py-2 px-2">
				<h3>Who We Are</h3><hr/>
				<p>We are a news app that provides you with latest top news in all genres such as education, health, technology, sports, business etc.We a subscription based plan to notify you at earliest about latest news and you also gets access to our premium live news.</p>	
				</div>
			</div>
		</div>
	</div>  
        </div>
    </div>
  )
}

export default ContactUs;