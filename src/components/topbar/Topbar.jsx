import { Add, CommentOutlined, Search, SurroundSoundOutlined, TipsAndUpdatesOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './topbar.scss'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topWrapper">
            <Link to='/' className='link'>
                <div className="topLeft">
                    <TipsAndUpdatesOutlined className='topLeftIcon'/>
                    <span>Shoot Star</span>
                </div>
            </Link>
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
                    
                    <Link to='/audiorooms' className='link'>
                        <SurroundSoundOutlined className='rightIconsE'/>
                    </Link>
                    
                    <Link to='/chat' className='link'>
                      <CommentOutlined className='rightIconsC'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
