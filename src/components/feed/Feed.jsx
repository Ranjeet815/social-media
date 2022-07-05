import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import {Posts} from  '../../dmmydata'
export const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrepper">
        <Share/>
        
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    
    
    </div>
  )
}
