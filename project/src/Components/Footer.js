import React from 'react'
import './Style/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <form>
        <div className='footer-form'>
            <div className='form-left'>
              <input type="text"  placeholder="Your name here" />
              <br/>
              <input type="email"  placeholder="Your email here"/>
            </div>
            <div className='form-right'>
            <textarea rows="4" placeholder=" Your opinion here"></textarea>
            </div>
        </div>
        <div className='submit'>
          <input type="submit" value="Send"/>
        </div>
      </form>
      <br/>
      <div className='footer-info'>
        <div className='form-info-left'>
          <h5>YA-EDU</h5>
          <p>This website is for<br/>
            Processing and Managing<br/>
            Student Outcomes</p>
        </div>
        <div className='form-info-center'>
          <h5>PROGRAMMING</h5>
          <p>The languages used to<br/>
              build this website are:<br/>
              <b>(HTML - </b>
              <b>CSS</b>
              <b> - JAVASCRIPT )</b><br/>
              With the help of Framework:<br/>
              <b>REACT.JS</b>
              </p>
        </div>
        <div className='form-info-right'>
          <h5>Programmers Team</h5>
          <p>The programmers involved<br/>
              in building the<br/> 
              YA-Edu website<br/>
            <b>Youssef Bounit</b><br/>
            <b>Abdallah Agmar</b><br/>
            </p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          Copyright &copy;{new Date().getFullYear()} All rights reserved by: <a href="./#"> <b> YA-Edu</b></a></p>          
      </div>
    </div>
  )
}
