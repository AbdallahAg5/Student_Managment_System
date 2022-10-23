import React from 'react'
import './Style/Nav.css'
import logonav from './Logo/logoNav.png'
import {Link} from 'react-router-dom'

 function Nav({mode,menu,goback}) {
  return (
    <div>
        <nav style={mode?{color:'#2B084C'}:{color:'white' }}>
              <h1><img src={logonav}/><sapn> YA-Edu</sapn></h1> 
              <ul id={menu?null:"ul-go"}>
                <li><Link to={'/'} onClick={goback} style={mode?{color:'#2B084C'}:{color:'white' }} href='#'>Home</Link></li>
                <li><Link to={'/Login'} onClick={goback} style={mode?{color:'#2B084C'}:{color:'white' }} href='#'>LogIn</Link></li>
                <li><Link to={'/About'} onClick={goback} style={mode?{color:'#2B084C'}:{color:'white' }} href='#'>About</Link></li>
                <li><Link to={'/Contacts'} onClick={goback} style={mode?{color:'#2B084C'}:{color:'white' }} href='#'>Contacts</Link></li>
              </ul>  
        </nav>
    </div>
  )
}


export default Nav