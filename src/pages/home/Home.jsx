import React from 'react'
import { Feed } from '../../components/feed/Feed'
import { Right } from '../../components/rightbar/Right'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Topbaar } from '../../components/Topbaar'
import './home.css'
export const Home = () => {
  return (
   <>
   <Topbaar/>
   <div  className='homeContainer'>
    <Sidebar/>
    <Feed/>
    <Right/>
   </div>
   </>
  )
}
