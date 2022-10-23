import React from 'react'
import '../Style/Student.css'

export default function Student() {
  return (
    <div className='student-form'>
        <label>Student ID :</label><br/>
        <input id='input' type='text' placeholder=' Student ID #123456'/><br/><br/>
        <label>Student Password :</label><br/>
        <input id='password' type='text' placeholder=' Student Password ●●●●●●●●'/>
        <div className='student-info'>
            <a>Forget Your Password ?</a><br/><br/>
            <input type='checkbox'/> <span>Validate</span>
        </div>
    </div>
  )
}
