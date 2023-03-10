import React  from 'react'
import '../components/css/navbar.css';
import {Link}  from "react-router-dom";

const Navbar = (props)=> {
  const active=(e)=>{
    let mnit= document.getElementsByClassName('mnt');
    for(let i=0;i<mnit.length;i++){
      mnit[i].style.backgroundColor="";
      mnit[i].style.color="";
    }
    e.currentTarget.style.backgroundColor="gainsboro";
    e.currentTarget.style.color="black";
  }
  
    return (
      <div>
        <nav className= {`navbar navbar-expand-lg fixed-top navbar-${props.mode}`} style={props.mode==='light'?{backgroundColor:'rgb(168, 167, 167)'}:{backgroundColor:'rgb(49, 48, 48)'}} >
            <div className="container-fluid">
            <span className="navbar-brand fs-3 px-3 title"><i className="fa fa-x fa-newspaper-o"></i> NEWSHALA</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0 ">
                        <li className="nav-item nv">
                        <Link className="nav-link mnt" aria-current="page" to="/" onClick={active}><i className="fa fa-fw fa-home"></i>Top Headlines</Link>
                        </li>
                        <li className="nav-item nv">
                        <Link className="nav-link mnt" to="/about" onClick={active}><i className="fa fa-fw fa-cloud"></i>Weather</Link>
                        </li>
                        <li className="nav-item dropdown nv">
                        <a className="nav-link dropdown-toggle mnt" id='open' href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={active}>
                        <i className="fa fa-fw fa-bars"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" id="lgn" to="/login"><i className="fa fa-fw fa-user"></i>LogIn/SignUp</Link></li>
                            <li><Link className="dropdown-item" to="/subs"><i className="fa fa-fw fa-dollar"></i>Subscription</Link></li>
                            <span><hr className="dropdown-divider"/></span>
                            <li><Link className="dropdown-item" to="/contact"><i className="fa fa-fw fa-envelope"></i> Contact Us</Link></li>
                        </ul>
                        </li>
                        <li className="nav-item dropdown" id="lgnn" style={props.mode==='light'?{color:'black'}:{color:'white'}}>
                        <a href='/' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-x fa-user-circle-o" aria-hidden="true" /></a>
                        <ul className="dropdown-menu px-3 py-3">
                        <li className='py-2 text-center'><h3>Account Info</h3></li>
                                <li className='py-2'><h5>Username :</h5>  <p>{localStorage.getItem("fullName").toUpperCase()}</p></li>
                                
                                <li className='py-2'><h5>Subscription :</h5>  <p>Not subscribed</p></li>
                                
                                <li className='py-2'><h5>Email :</h5>  <p>{localStorage.getItem("Email")}</p></li>
                                <li><hr/></li>
                                <li className='py-2 text-center'><a href="/" onClick={props.diblrev} id="sout">Sign Out</a></li>
                            
                            </ul>
                            </li>
                            </ul>  
                    <div className="form-check form-switch">
                         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                         <label className="form-check-label" id ='lbl' htmlFor="flexSwitchCheckDefault" style={props.mode==='light'?{color:'black'}:{color:'white'}}>Darkmode</label>
                         </div>
                </div>
            </div>
        </nav>
      </div>
    )
}
export default Navbar;
