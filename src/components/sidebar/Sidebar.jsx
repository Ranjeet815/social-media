import React from 'react'
import './sidebar.css'
import { Users } from '../../dmmydata'
import { RssFeed, Chat,VideoLibrary,Group,Bookmark,Help,Work,Event,AccountBalance} from "@material-ui/icons"
import Closef from '../closefriend/Closef'
export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sideWrraper'>
       <ul className='sidebarList'>
        <li className='sidebarListItem'>
         <RssFeed className='sidebarIcon' />
         <span className='sidebarListItemText'>Feed</span>
        </li>
        <li className='sidebarListItem'>
         <Chat className='sidebarIcon' />
         <span className='sidebarListItemText'>Chats</span>
        </li>
        <li className='sidebarListItem'>
         <VideoLibrary className='sidebarIcon' />
         <span className='sidebarListItemText'>Videos</span>
        </li>
        <li className='sidebarListItem'>
         <Group className='sidebarIcon' />
         <span className='sidebarListItemText'>Groups</span>
        </li>
        <li className='sidebarListItem'>
         <Bookmark className='sidebarIcon' />
         <span className='sidebarListItemText'>Bookmarks</span>
        </li>
        <li className='sidebarListItem'>
         <Help className='sidebarIcon' />
         <span className='sidebarListItemText'>Questions</span>
        </li>
        <li className='sidebarListItem'>
         <Work className='sidebarIcon' />
         <span className='sidebarListItemText'>Jobs</span>
        </li>
        <li className='sidebarListItem'>
         <Event className='sidebarIcon' />
         <span className='sidebarListItemText'>Events</span>
        </li>
        <li className='sidebarListItem'>
         <AccountBalance className='sidebarIcon' />
         <span className='sidebarListItemText'>Courses</span>
        </li>
       </ul>
       <button className='sidebarbutton'>Show More</button>
       <hr className='sidebarhr'/>
       <ul className='sidebarfrindList'>
          {Users.map(u=>(
            <Closef key={u.id} user={u} />
          ))}
       </ul>
      </div>
    </div>
  )
}
