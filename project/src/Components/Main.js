import React from 'react'
import './Style/Main.css'
import logo from './Logo/logo.png'
import { Link } from 'react-router-dom'

export default function Main(props) {
  return (
      <div className='container'>
        <div className='left-Side'>
        </div>
        <div className='right-Side'>
          <div className='right-content'>
            <img src={logo}/>
            <h1>Welcome to <b style={props.mode?{color:'#55185D'}:{color:'#FDD10B' }}>YA-Edu</b></h1>
            <h3>This website is for Processing and Managing Student Outcomes</h3>
            <br/>
            <button id={props.mode?"light":"dark"}><Link style={{color:'#2B084C'}} to={'/Login/Student'}>LogIn</Link></button>
          </div>
        </div>
          
      </div>
  )
}

