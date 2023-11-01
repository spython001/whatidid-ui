import ProfileCon from '../../components/profileCon/ProfileCon'
import './profile.scss'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div className="profileCon">
    <div className='profile'>
        <div className="profileWrapper">
            <div className="profileCover">
                <img src="/assets/noAvatar.png" alt="no avatar" className="profileUserImg" />
            </div>

            <div className="profileInfo">
                <h4>emmy manny</h4>
                <span className='spanChoice'>Creative</span>
                <span className='spanCareer'>acting</span>

                <div className="follow">
                    <span className="follow1">
                        <span className='fol1'>0</span> followers
                    </span>
                    <span className="follow2">
                        <span className='fol2'>0</span> following
                    </span>
                </div>   
            </div>

            <Link to='/edit' className='link'><button className="edit">Edit Profile</button></Link>
        </div>
    </div>

    <ProfileCon/>
    </div>
  )
}
