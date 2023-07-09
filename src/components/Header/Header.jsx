import React from 'react'
import './Header.css'
import { LinkedinOutlined } from '@ant-design/icons'
import { GithubOutlined } from '@ant-design/icons'

export default function Header() {
    return (
        <div className='header'>
            <span className="desktop-header"><h1>Kaleb McCullough // <em>Developer</em></h1></span>
            <span className="mobile-header"><h1>KM</h1></span>
            
            
            <div className="icons">
                <div className='git'>
                    <a href='https://www.linkedin.com/in/kaleb-mccullough/' target='_blank' rel="noreferrer">
                    <GithubOutlined style={{fontSize:'40px'}}/>
                    </a>
                </div>
                
                <div className='linkedin'>
                    <a href='https://www.linkedin.com/in/kaleb-mccullough/' target='_blank' rel="noreferrer">
                    <LinkedinOutlined style={{fontSize:'40px'}}/></a>
                </div>
            </div>
        </div>
    )
}
