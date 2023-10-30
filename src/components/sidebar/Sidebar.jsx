import { Explore, Notifications, PersonRounded, HomeRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './sidebar.scss'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                
                <Link to='/' className='link'>
                    <li className="sidebarListItem">
                        <HomeRounded className='sidebarIcon'/>
                        Home
                    </li>
                </Link>

                <li className="sidebarListItem">
                    <Explore className='sidebarIcon'/>
                    Explore
                </li>

                <li className="sidebarListItem">
                    <Notifications className='sidebarIcon'/>
                    Notification
                </li>

                <Link to='/profile' className='link'>
                    <li className="sidebarListItem">
                        <PersonRounded className='sidebarIcon'/>
                        Profile
                    </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}
