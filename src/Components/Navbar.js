import React, { useEffect } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import logo from '../images/logononame.png'


export default function Navbar() {

    
    useEffect(()=>{
    let sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {
        isFixed:true,
        edge:"right" 
      });
    },[])

    return (
        <div className="navbar navbar-fixed">
            <nav className="white text-green accent-4">
            <div className="nav-wrapper green-text accent-4">
            <a href="/" className="brand-logo"><img className="navbar-logo" src={logo} alt="logo" height="100%" width="100px"   /></a>
            
            <a href="/" data-target="mobile-demo" className="sidenav-trigger right text-green accent-4"><i className="material-icons green-text">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a className=" green-text accent-4" href="#home">Home</a></li>
                <li><a className=" green-text accent-3" href="#about">About</a></li>
                <li><a className=" green-text accent-3" href="#services">Services</a></li>
                <li><a className=" green-text accent-3" href="#features">Features</a></li>

             </ul>
            
            </div>
            
        </nav>

        <ul className="sidenav" id="mobile-demo">
        <li><a className="green-text" href="#home">Home</a></li>
        <li><a className="green-text" href="#about">About</a></li>
        </ul>
        </div>
    )
}
