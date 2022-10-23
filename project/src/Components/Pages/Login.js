import React from 'react'
import '../Style/Login.css'
import { NavLink,Outlet } from 'react-router-dom'

export default function Login(props) {
  return (
    <div className='container'>
        <div className='left-Side'>
        </div>
        <div className='right-Side'>
          <div className='right-content'>
            <h2>Login</h2>
            <div id={props.mode?"light-form":"dark-form"} className='form-content'>
                <div className='users'>
                        <NavLink exact to={'Student'} id={props.mode?"light-form":"dark-form"}>Student</NavLink>
                        <NavLink to={'Teacher'} id={props.mode?"light-form":"dark-form"}>Teacher</NavLink>
                        <NavLink to={'Administrator'} id={props.mode?"light-form":"dark-form"}>Administrator</NavLink>
                </div>
                <hr className={props.mode?"light-form":"dark-form"}/>
                <Outlet/>
            </div>
            <br/><br/>
            <button>LogIn</button>
          </div>
        </div>
      </div>
  )
}
