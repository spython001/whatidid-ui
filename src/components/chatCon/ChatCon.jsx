import { Search } from '@mui/icons-material'
import './chatCon.scss'
import { Link } from 'react-router-dom'

export default function ChatCon() {
  return (
    <div className='chatCon'>
        <div className='wrapper'>
            <div className="top">
                <Link to='/chat' className='link'><span>Chats</span></Link>
                <div className="chatSearch">
                    <Search className='chatSearchIcon'/>
                    <input type="text" placeholder='search chat' className="chatInput" />
                </div>
            </div>

            <div className="bottom">
                <span>You do not have any Chat</span>
                <span className='connect'>
                    Connect with other experts and enjoy chats with them.
                    You can start from your category, it is easier that way.
                </span>

                <b>Start Connecting!</b>
            </div>
        </div>
    </div>
  )
}
