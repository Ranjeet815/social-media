import React from 'react'
import { Feed } from '../../components/feed/Feed'
import { Right } from '../../components/rightbar/Right'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Topbaar } from '../../components/Topbaar'
import '../profile/profile.css'
const Profile = () => {
  return (
    <>
      <Topbaar/>
      <div className='profile'>
      <Sidebar/>
      <div className="profileRight">
      <div className="profileTopRight">
        <div className="profileCover">
        <img src='assets/post/3.jpeg' className='profileCoverImg' alt='coverimg'/>
        <img src='assets/person/ranjeet.jfif' className='profileUserImg' alt='UserImg'/>
      </div>
      </div>
      <div className="profileInfo">
        <h4 className='profileinfoName'>Ranjeet Bhoyar</h4>
        <span className='profileInfoDecr'>Hello my friends</span>
      </div>
      <div className="profileBottomRight">
      <Feed/>
      <Right profile/>
      </div>
      </div>
      </div>
    </>
  )
}

export default Profile