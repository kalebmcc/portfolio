import React from 'react'
import './Projects.css'
import Boatimg from '../../assets/BoatBetter.png'
import Parkpassimg from '../../assets/Parkpass.png'
import Dinnerimg from '../../assets/DinnerDash.png'
import Simongameimg from '../../assets/SimonGame.png'

export default function Projects() {
    return (
        <div className='projects' id="projects">
            <h2>/Projects/</h2>
            <div className='project4'>
                <div className="text-container">
                    <h2>Dinner Dash</h2>
                    <div className='button-holder'>
                    <a className="website" href='https://dinnerdashproject.herokuapp.com/' target="_blank">VIEW</a>
                    <a className="website" href='https://github.com/kalebmcc/DinnerDash' target="_blank">REPO</a>
                    </div>
                    <p>Dinner Dash is a full-stack application that is able to allow for multiple users to all share their favorite recipes with each other. Each user is able to edit and delete their own posts with the authorization token from Django. </p><br />
                    <h4>Technologies Used:</h4>
                        <p>Django, PostgreSQL, and React</p>

                </div>
                <div>
                    <img className='parkpassimg' src={Dinnerimg}/>
                </div>
                
            </div>
            <div className='project3'>
                <div>
                    <img className='parkpassimg' src={Parkpassimg}/>
                </div>
                <div className="text-container">
                    <h2>ParkPass</h2>
                    <div className='button-holder'>
                    <a className="website" href='https://parkpassadventure.netlify.app/' target="_blank">VIEW</a>
                    <a className="website" href='https://github.com/SEIR-809-Hackers/seir-project-3' target="_blank">REPO</a>
                    </div>
                    <p>ParkPass is a full-stack application that allows a user to search through a database of national parks and save them. When saved, a park will be added to a user’s page and displayed as a card. Users can then check off if they’ve hiked at the selected park.</p><br />
                    <h4>Technologies Used:</h4>
                        <p>MERN stack(Mongoose,Express,React,Node)<br/>MongoDB</p>

                </div>
            </div>
            <div className='project2'>
                <div className="text-container">
                    <h2>Boat Better</h2>
                    <div className='button-holder'>
                    <a className="website" href='https://boat-better.netlify.app' target="_blank">VIEW</a>
                    <a className="website" href='https://github.com/kalebmcc/Boat-Better' target="_blank">REPO</a>
                    </div>
                    <p>This application utilizes the Stormglass.io API to display weather information on the provided Latitude and Longitude. It can display the weather for 7 days, or for each hour on one of the 7 days.</p><br />
                    <h4>Technologies Used:</h4>
                        <p>React
                        React-Router-Dom
                        Javascript
                        CSS</p>

                </div>
                <div>
                    <img className='boatimg' src={Boatimg}/>
                </div>
            </div>
            <div className='project1'>
                <div>
                    <img className='parkpassimg' src={Simongameimg}/>
                </div>
                <div className="text-container">
                    <h2>Simon Game</h2>
                    <div className='button-holder'>
                    <a className="website" href='https://parkpassadventure.netlify.app/' target="_blank">VIEW</a>
                    <a className="website" href='https://github.com/kalebmcc/Simon_Game' target="_blank">REPO</a>
                    </div>
                    <p>ParkPass is a full-stack application that allows a user to search through a database of national parks and save them. When saved, a park will be added to a user’s page and displayed as a card. Users can then check off if they’ve hiked at the selected park.</p><br />
                    <h4>Technologies Used:</h4>
                        <p>HTML, CSS, and Javascript</p>

                </div>
            </div>
        </div>
    )
}
