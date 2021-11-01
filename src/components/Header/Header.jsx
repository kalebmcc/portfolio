import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <ul className='nav'>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
            </ul>
            
            <h1>Kaleb McCullough</h1>
            <ul className='nav2'>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#background">Background</a></li>
            </ul>
        </div>
    )
}
