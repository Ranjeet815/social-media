import React,{useState} from 'react'
import './post.css'
import {MoreVert} from '@material-ui/icons'
import { Users } from "../../dmmydata";
export default function Post({ post }) {
    {/*const user = Users.filter(u=>u.id===1)
console.log(user[0].username)*/}
const [like, setlike] = useState(post.like);
const [isliked,setIslike] = useState(false);
const likeHandler  = () =>{
     setlike(isliked ? like-1 : like+1)
     setIslike(!isliked)
}
  return (
    <div className='post'>
        <div className="postWrraper">
            <div className="postTop">
                <div className="postLeft">
                <img src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} className='postProfileImg' alt='postprofile'/>
                <span className="postUsername">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
                <span className='postDate' >{post.date}</span>
                </div>
                <div className="postright">
                    <MoreVert/>
                </div>

            </div>
            <div className="postCenter">
                <span className='postText'>{post.desc}</span>
                <img src={post.photo} alt='postImage' className='postImage' />
            </div>
            <div className="postBottom">
                <div className="postBottomleft">
                    <img src='assets/like.png'alt='likeimg' className='likeicn' onClick={likeHandler} />
                    <img src='assets/heart.png' alt='heartpng' className='likeicn' onClick={likeHandler}/>
                    <span className='postLikeCounter'>{like}people liked it</span>
                 </div>
                <div className="postBottomRight">
                    <span className='postcomment'>{post.comment}comments</span>
                </div>
    
            </div>
        </div>
    </div>
  )
}

