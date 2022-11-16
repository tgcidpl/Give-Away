import React from "react";
import './Menu.scss';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export function Menu () {
    return (
        <div className='Menu'>
            <ul className='Menu-auth'>
                <li><Link className='Menu-auth__link' to='/login'>Login</Link></li>
                <li><Link className='Menu-auth__link' to='/sign-up'>Sign Up</Link></li>
            </ul>
            <ul className='Menu-nav'>
                <li><ScrollLink className='Menu-nav__link' to='Menu'>Home</ScrollLink></li>
                <li><ScrollLink className='Menu-nav__link' to='ThreeColumns'>What's It About?</ScrollLink></li>
                <li><ScrollLink className='Menu-nav__link' to=''>About Us</ScrollLink></li>
                <li><ScrollLink className='Menu-nav__link' to=''>Foundation and Organisations</ScrollLink></li>
                <li><ScrollLink className='Menu-nav__link' to=''>Contact</ScrollLink></li>
            </ul>
        </div>
    )
}