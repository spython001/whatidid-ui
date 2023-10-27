import { Add, CommentOutlined, ExploreOutlined, Search, TipsAndUpdatesOutlined } from '@mui/icons-material'
import './topbar.scss'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topWrapper">
            <div className="topLeft">
                <TipsAndUpdatesOutlined/>
                <span>What I did</span>
            </div>
            <div className="topCenter">
                <div className="searchbar">
                    <Search className='searchIcon'/>
                    <input type='text' placeholder='search'/>
                </div>
            </div>
            <div className="topRight">
                <button>
                    <Add className='topAddIcon'/>
                    Create
                </button>
                <div className="topTight">
                    <ExploreOutlined/>
                    <CommentOutlined/>
                </div>
            </div>
        </div>
    </div>
  )
}
