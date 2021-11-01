import React from 'react'
import './Resume.css'
import KalebResume from '../../assets/Screen Shot 2021-11-01 at 1.48.35 AM.png'

export default function Resume() {
    return (
        <div className='resume' id='resume'>
            <h2>/Resume/</h2>
            <div className='container'>
                <img id='resume-img' alt='My Resume' src={KalebResume}/>
                <div className='download-container'>
                <a href='https://drive.google.com/file/d/1kOgeo6jQLJXuzH9vlO1pfpU3Mz2VfQs7/view?usp=sharing' target="_blank" className='download'>Download</a>
                </div>
            </div>
            
        </div>
    )
}
