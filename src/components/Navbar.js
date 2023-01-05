import React from 'react'
import '../components/css/navbar.css';
import {Link}  from "react-router-dom";

const Navbar = (props)=> {
    return (
      <div>
        <nav className= {`navbar navbar-expand-lg fixed-top navbar-${props.mode} bg-${props.mode}`} >
            <div className="container-fluid">
            <span className="navbar-brand fs-3 px-3"><i className="fa fa-x fa-newspaper-o"></i> NEWSHALA</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0 ">
                        <li className="nav-item nv">
                        <Link className="nav-link" aria-current="page" to="/"><i className="fa fa-fw fa-home"></i>Home</Link>
                        </li>
                        <li className="nav-item nv">
                        <Link className="nav-link" to="/about"><i className="fa fa-fw fa-bandcamp" style={{color: 'red'}}></i>Live</Link>
                        </li>
                        <li className="nav-item dropdown nv">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa fa-fw fa-bars"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/login"><i className="fa fa-fw fa-user"></i>LogIn/SignUp</Link></li>
                            <li><a className="dropdown-item" href="/"><i className="fa fa-fw fa-dollar"></i>Subscription</a></li>
                            <span><hr className="dropdown-divider"/></span>
                            <li><a className="dropdown-item" href="/"><i className="fa fa-fw fa-envelope"></i> Contact Us</a></li>
                        </ul>
                        </li>
                        
                    </ul>
                    <div className="form-check form-switch">
                         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                         <label className="form-check-label" id ='lbl' htmlFor="flexSwitchCheckDefault" style={props.mode==='light'?{color:'black'}:{color:'white'}}>Enable Darkmode</label>
                         </div>
                </div>
            </div>
        </nav>
      </div>
    )
}
export default Navbar;
