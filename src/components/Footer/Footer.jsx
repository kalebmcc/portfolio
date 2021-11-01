import React from 'react'
import {GithubOutlined,LinkedinOutlined} from '@ant-design/icons'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='links'>
                <div className='git'>
                    <a href='https://www.linkedin.com/in/kaleb-mccullough/' target='_blank'>
                    <GithubOutlined style={{fontSize:'25px'}}/>
                    </a>
                </div>
                <div className='linkedin'>
                    <a href='https://www.linkedin.com/in/kaleb-mccullough/' target='_blank'>
                    <LinkedinOutlined style={{fontSize:'25px'}}/></a>
                </div>
            </div>
        </div>
    )
}
