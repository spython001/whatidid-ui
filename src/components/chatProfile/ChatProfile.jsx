import './chatProfile.scss'
import { Link } from 'react-router-dom'

export default function ChatProfile() {
  return (
    <div className='chatProfile'>
        <div className='wrapper'>
            <div className="top">
                <Link to='/profile' className='link'><img src="/assets/noAvatar.png" alt="no avatar" /></Link>
                <div className='spanTop'>
                    <span className='welcome'>Welcome Back!</span>
                    <span className='name'>emmy manny</span>
                </div>
            </div>

            <div className='bottom'>
                <span className='spanBottom'>Get back on track. Start connecting with talents. Lets go</span>
                <img src='/assets/chatPic.png' alt='chat pic'/>
            </div>
        </div>
    </div>
  )
}
