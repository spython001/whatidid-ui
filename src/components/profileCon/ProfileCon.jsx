import { AutoAwesomeOutlined, DynamicFeed } from '@mui/icons-material'
import './profileCon.scss'

export default function ProfileCon() {
  return (
    <div className='profileContainer'>
      <div className="wrapper">
        <div className="right">
          <DynamicFeed className='rightIcon' onClick/>
        </div>

        <div className="left">
          <AutoAwesomeOutlined className='leftIcon'/>
        </div>
      </div>
    </div>
  )
}
