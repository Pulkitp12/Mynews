import React from 'react';
import '../components/css/subscription.css';

const Subscription=(props)=> {
  return (
    <div className='' id="hii">  
           <div className="card mx-4 my-5 text-center" id='i1'style={props.mode==='light'?{boxShadow: '14px 17px 21px -15px rgb(13, 13, 14)'}:{boxShadow: '14px 17px 31px -16px rgba(170,171,176,1)'}}>
           <img src="https://media.istockphoto.com/id/174797487/photo/metal-background.jpg?b=1&s=612x612&w=0&k=20&c=NSz2qnrKEV02EEu8Sevmw8XpaOqzy2RaIykzzexUlL0=" className="card-img-top" alt="..."/>
            <div className="card-body fs-3 my-4">
                <h5 className="card-title text-center">Silver Plan</h5>
                <p className="card-text text-center">For 3 Months</p>
                <h5 className="card-title text-center rs">₹ 300.00</h5>
                <a href="# " rel="noreferrer" className="form-control btn btn-secondary">Buy Now</a>
        
            </div></div>
           
            <div className="card mx-4 my-5 text-center" id='i2' style={props.mode==='light'?{boxShadow: '14px 17px 21px -15px rgb(13, 13, 14)'}:{boxShadow: '14px 17px 31px -16px rgba(170,171,176,1)'}} >
            <img src="https://images.pexels.com/photos/260286/pexels-photo-260286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..."/>
            <div className="card-body fs-3 my-4 ">
                <h5 className="card-title text-center">Gold Plan</h5>
                <p className="card-text text-center">For 6 Months</p>
                <h5 className="card-title text-center rs">₹ 500.00</h5>
                <a href="# " rel="noreferrer" className="form-control btn btn-warning">Buy Now</a>
      
            </div></div>
        
            <div className="card mx-4 my-5 text-center" id='i3'style={props.mode==='light'?{boxShadow: '14px 17px 21px -15px rgb(13, 13, 14)'}:{boxShadow: '14px 17px 31px -16px rgba(170,171,176,1)'}}>
            <img src='https://images.pexels.com/photos/1022928/pexels-photo-1022928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="card-img-top" alt="..."/>
            <div className="card-body fs-3 my-4">
                <h5 className="card-title text-center">Platinum Plan</h5>
                <p className="card-text text-center">For 12 Months</p>
                <h5 className="card-title text-center rs">₹ 1000.00</h5>
                <a href="# " rel="noreferrer" className="form-control btn btn-info">Buy Now</a>
         
            </div></div>
    </div>
  )
}

export default Subscription;