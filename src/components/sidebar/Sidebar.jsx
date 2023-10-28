import { Cottage, Explore, Notifications, PersonRounded } from '@mui/icons-material'
import './sidebar.scss'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <Cottage className='sidebarIcon home '/>
                    Home
                </li>

                <li className="sidebarListItem">
                    <Explore className='sidebarIcon'/>
                    Explore
                </li>

                <li className="sidebarListItem">
                    <Notifications className='sidebarIcon'/>
                    Notification
                </li>

                <li className="sidebarListItem">
                    <PersonRounded className='sidebarIcon'/>
                    Profile
                </li>
            </ul>
        </div>
    </div>
  )
}
