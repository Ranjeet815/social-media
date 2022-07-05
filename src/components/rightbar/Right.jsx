import React from 'react'
import {Users} from '../../dmmydata'
import Online from '../online/Online'
import './right.css'
export const Right = ({profile}) => {
  const HomeRightbar =() =>{
    return(
     <>
      <div className="birthdayContainer">
          <img src='assets/gift.png' alt='birthday' className='brthdauimg'/>
          <span className='birthdayText'>
            <b>Sai mehesh</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img src='assets/ad2.webp' alt='addimage' className='adimg'/>
        <h4 className='friendsTitle'>Online friends</h4>
        <ul className='rightfriendsList'>
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
     </>
    );
 };

 const Profileright = () =>{
  return (
    <>
    <h4 className='rightbarTittle'>User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className='rightbarInfoKey'>City:</span>
        <span className='rightbarInfoValue'>Bangalore</span>
      </div>
      <div className="rightbarInfoItem">
        <span className='rightbarInfoKey'>From:</span>
        <span className='rightbarInfoValue'>karnataka</span>
      </div>
      <div className="rightbarInfoItem">
        <span className='rightbarInfoKey'>Relationship:</span>
        <span className='rightbarInfoValue'>Committed With Ankit</span>
      </div>
    </div>
    <h4 className='rightbarTittle'>User Friends</h4>
     <div className="rightbarFallowings">
      <div className="rightbarFallwing">
        <img src='assets/person/1.jpeg' alt="ddd" className='rightbarfallowingImg'/>
        <span className='rightbarFollowingName'>Ankita Taylor</span>
      </div>
     </div>
    </>
  )
 }
  return (
    <div className='rightbar'>
      <div className="rightWrraper">
      {profile ?  <Profileright/> : <HomeRightbar/>}  
      </div>
    </div>
  )
}
