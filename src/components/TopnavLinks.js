import React from 'react'

const TopnavLinks = ({ link }) => {
  return (
    <div>
      <a href={link} target="_blank">{link}</a>
    </div>
  )
}

export default TopnavLinks
