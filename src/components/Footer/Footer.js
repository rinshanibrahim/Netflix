import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-parent'>
        <div className='wrapper'>
            <div className='footer-child'>
            <h6>Questions? Call 000-800-919-1694</h6>
                <ul>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>FAQ</li></Link>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Media Centre</li></Link>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Ways to Watch</li></Link>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Cookie Preferences</li></Link>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Speed Test</li></Link>
                </ul>
            </div>
            <div className='footer-child'>
                <ul>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Help Centre</li></Link>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Investor Relations</li></Link>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Terms of Use</li></Link>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Corporate Information</li></Link>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Legal Notices</li></Link>
                </ul>
            </div>
            <div className='footer-child'>
                <ul>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Account</li></Link>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Jobs</li></Link>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Privacy</li></Link>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Contact Us</li></Link>
                    <Link to={""}><li style={{marginBottom:'10px', marginTop: '10px', color: '#FFFFFFB3'}}>Only on Netflix</li></Link>
                </ul>
            </div>
           

        </div>
    </div>
  )
}

export default Footer