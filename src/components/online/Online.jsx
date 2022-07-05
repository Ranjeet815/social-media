import React from 'react'
import './online.css'
const Online = ({user}) => {
  return (
        <li className='rightbarfriend'>
            <div className='rightbarprofileContainer'>
              <img className='rightbarprofileimg' src={user.profilePicture} alt='birthdayimage'/>
            <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>{user.username}</span>
          </li>
  )
}

export default Online