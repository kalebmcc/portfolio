import React from 'react'
import './Skills.css'

export default function Skills() {
    return (
        <div className='skills' id='skills'>
            <h2>/Skills/</h2>
            <div className='lists'>
                <div>
                    <h3>Languages:</h3>
                    <ul>
                        <li>Javascript</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div>
                    <h3>Front-end:</h3>
                    <ul>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div>
                    <h3>Backend:</h3>
                    <ul>
                        <li>Node</li>
                        <li>Django</li>
                        <li>Express</li>
                        <li>Mongoose</li>
                    </ul>
                </div>
                <div>
                    <h3>Databases:</h3>
                    <ul>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
