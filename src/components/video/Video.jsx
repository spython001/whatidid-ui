import './video.scss'
import { useState } from 'react';
import { ChatBubble, Favorite, Reply, } from '@mui/icons-material';

const Video = () => {
  const video = {
    name: 'Manny Pac',
    img: '/assets/noAvatar.png',
    url: '/assets/did.mp4',
    title: 'Creative',
    tag: '#creativeSkills',
  };

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
    console.log({likes})
  };

  return (
    <div className="video">
        <div className='videoStuff'>
            <video controls autoPlay src={video.url} />
            <div className="name">
                <img src={video.img} alt="" />
                <span>{video.name}</span>
            </div>

            <div className="title">
                <span>{video.title}</span>
                <span className="tag">{video.tag}</span>
            </div>
        </div>

      <div className="actionButtons">
        <button onClick={handleLike} className= {isLiked ? 'click' : ''}><Favorite/></button>
        <button><ChatBubble/></button>
        <button><Reply/></button>
      </div>
    </div>
  );
};

export default Video;
