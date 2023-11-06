import { HeadsetMic } from '@mui/icons-material'
import './recorded.scss'

export default function Recorded() {
  return (
    <div className='recorded'>
      <div className="wrapper">
        <div className="top">
          <span className='topStuff'><HeadsetMic/>  <div className='record'>Recorded</div></span>
          <span>Real test</span>
          <span className='course'>science</span>
          <span className='date'>Recorded on: April 12, 2023 @ 5:28 PM</span>
        </div>

        <div className="bottom">
          <div className='bottomStuff'>
            <img src="/assets/noAvatar.png" alt="no avatar" />
            <span>Mike Menser</span>
            <span className="host">Host</span>
          </div>
        </div>
      </div>
    </div>
  )
}
