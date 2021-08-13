import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
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
            <li className="grow"><a href="https://github.com/CarterMcClellan"> <FontAwesomeIcon icon={faGithub} /> Github </a> </li>
            <li className="grow"><a href="https://www.linkedin.com/in/carter-mcclellan/" > <FontAwesomeIcon color="#2867B2" icon={faLinkedin} /> LinkedIn</a></li>
            <li className="grow"><a href="https://www.overleaf.com/read/qkyhfrmxhhfh" > <FontAwesomeIcon icon={faFileAlt} /> Resume</a></li>
        </ol>
    </div>
    
  )
}

export default Sidebar