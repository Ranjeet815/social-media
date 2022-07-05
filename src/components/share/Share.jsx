import React from 'react'
import './share.css'
import {PermMedia,Label,Room, EmojiEmotions} from '@material-ui/icons'
const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrraper">
            <div className="shareTop">
                <img className='shareProfileImg' src='/assets/person/ranjeet.jfif' alt=''/>
                <input placeholder="what's in your mind Ranjeet " className='shareInput'/>
            </div>
            <hr className='sharehr'/>
            <div className="shareBottom">
                <div className="shareoptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className='shareOptionsText'>photos or video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className='shareOptionsText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon'/>
                        <span className='shareOptionsText'>Locations</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                        <span className='shareOptionsText'>Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share