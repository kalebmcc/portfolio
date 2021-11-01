import React from 'react'
import {GithubOutlined,LinkedinOutlined} from '@ant-design/icons'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='links'>
                <div className='git'>
                    <GithubOutlined style={{fontSize:'25px'}}/>
                </div>
                <div className='linkedin'>
                    <LinkedinOutlined style={{fontSize:'25px'}}/>
                </div>
            </div>
        </div>
    )
}
