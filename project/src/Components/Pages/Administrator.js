import React from 'react'
import '../Style/Student.css'

export default function Administrator() {
  return (
    <div className='student-form'>
        <label>Administrator ID :</label><br/>
        <input id='input' type='text' placeholder=' Administrator ID #123456'/><br/><br/>
        <label>Administrator Password :</label><br/>
        <input id='password' type='text' placeholder=' Administrator Password ●●●●●●●●'/>
        <div className='student-info'>
            <a>Forget Your Password ?</a><br/><br/>
            <input type='checkbox'/> <span>Validate</span>
        </div>
    </div>
  )
}
