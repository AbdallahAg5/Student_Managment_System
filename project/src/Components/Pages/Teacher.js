import React from 'react'
import '../Style/Student.css'

export default function Teacher() {
  return (
    <div className='student-form'>
        <label>Teacher ID :</label><br/>
        <input id='input' type='text' placeholder=' Teacher ID #123456'/><br/><br/>
        <label>Teacher Password :</label><br/>
        <input id='password' type='text' placeholder=' Teacher Password ●●●●●●●●'/>
        <div className='student-info'>
            <a>Forget Your Password ?</a><br/><br/>
            <input type='checkbox'/> <span>Validate</span>
        </div>
    </div>
  )
}
