import React from 'react'
import { Search , Person,Chat,Notifications } from '@material-ui/icons'
import './topbaar.css'

export const Topbaar = () => {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <span className='logo'>Facebook</span>
        </div>
        <div className='topbarCenter'>
            <div className='searchbar'>
                <Search className='searchIcon'/>
                <input placeholder='Search for  frinds, post video ' className="searchInput" />
            </div>
        </div>
        <div className='topbarRight'>
            <div className='topbarLinks'>
                <span className='topbarLink'>HomePage</span>
                <span className='topbarLink'>TimeLine</span>
            </div>
            <div className='topbarIcons'>
                <div className='topbarItem'>
                   <Person/>
                   <span className='topbarIconBadge'>1</span>
                </div>
                <div className='topbarItem'>
                   <Chat/>
                   <span className='topbarIconBadge'>1</span>
                </div>
                <div className='topbarItem'>
                   <Notifications/>
                   <span className='topbarIconBadge'>1</span>
                </div>
            </div>
            <img src='assets/person/ranjeet.jfif' alt='' className='topbarImg'/>
        </div>
    </div>
  )
}
