import React from 'react'
import './close.css'
const Closef = ({user}) => {
  return (
    <li className="frindList">
    <img src={user.profilePicture} alt='frindImage' className='frindImage'/>
    <span className='sidebarfrindName'>{user.username}</span>
  </li>
  )
}

export default Closef