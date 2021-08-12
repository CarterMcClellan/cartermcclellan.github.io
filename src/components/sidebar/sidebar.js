import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import profile from '../../images/profile.jpg'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="imgContainer">
            <img src={profile}/>
        </div>
        <div className="myName"> Carter McClellan </div>
        <ol>
            <li className="grow"><FontAwesomeIcon icon={faGithub} /> Github </li>
            <li className="grow"><FontAwesomeIcon color="#2867B2" icon={faLinkedin} /> LinkedIn</li>
        </ol>
    </div>
    
  )
}

export default Sidebar