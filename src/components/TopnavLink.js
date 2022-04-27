import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import '../css/app.css';


const TopnavLink = ({ link, iconName }) => {
  return (
    <a href={link} target="_blank" rel='noreferrer' className="topnav-link">
      <FontAwesomeIcon icon={iconName}/>
    </a>
  )
}

export default TopnavLink
