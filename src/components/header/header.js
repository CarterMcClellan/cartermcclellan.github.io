import React from 'react'
import Headroom from 'react-headroom'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Headroom>
        <div class="row">
            <div class="block"><Link to="/">Resume</Link></div>
            <div class="block"><Link to="/math">Math</Link></div>
        </div>
    </Headroom>
    
  )
}

export default Header