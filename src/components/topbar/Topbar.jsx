import { Add, CommentOutlined, Search, SurroundSoundOutlined, TipsAndUpdatesOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './topbar.scss'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topWrapper">
            <div className="topLeft">
                <TipsAndUpdatesOutlined className='topLeftIcon'/>
                <span>what i did</span>
            </div>
            <div className="topCenter">
                <div className="searchbar">
                    <Search className='searchIcon'/>
                    <input type='text' placeholder='search'/>
                </div>
            </div>
            <div className="topRight">
                <Link to='/create' className='link'>
                    <button>
                        <Add className='topAddIcon'/>
                        <span>Create</span>
                    </button>
                </Link>
                <div className="topRightIcons">
                    <SurroundSoundOutlined className='rightIconsE'/>
                    <CommentOutlined className='rightIconsC'/>
                </div>
            </div>
        </div>
    </div>
  )
}
