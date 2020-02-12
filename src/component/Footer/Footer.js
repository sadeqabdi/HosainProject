import React from 'react';
import { Icon } from 'semantic-ui-react'
import './Footer.css'
function Footer() {
  return (
    <div>
      <div  className='container'>
      <div>
        <ul>
          <tr><strong>Home</strong></tr>
          <tr>Contact</tr>
          <tr>About Us</tr>
          <tr>Terms</tr>
        </ul>
      </div>
      <div>
        <ul>
          <tr><strong>Employer</strong></tr>
          <tr>Post a Job</tr>
          <tr>search Resume</tr>
          <tr>Sign in</tr>
        </ul>
      </div>
      <div>
        <ul>
          <tr><strong>Job Seeker</strong></tr>
          <tr>Find Job</tr>
          <tr>Creat Resume</tr>
          <tr>sign in</tr>
        </ul>
      </div>
      <div>
        <ul>
          <tr><Icon name='facebook' size='small' />facebook</tr>
          <tr><Icon name='twitter' size='small' />twitter</tr>
          <tr><Icon name='instagram' size='small' />instagram</tr>
          <tr><Icon name='linkedin square' size='small' />linkedin</tr>
        </ul>
      </div>
      </div>
      <div style={{textAlign:'center', marginTop:'50px', marginBottom:'50px',color:'#9c9c9c', fontSize:'13px'}}>
        <p>
          Copyright 2008.2019 Powerd by Job Board Software
        </p>
      </div>

    </div>
  );
}

export default Footer;
