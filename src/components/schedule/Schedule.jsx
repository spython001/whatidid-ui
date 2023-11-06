import { CalendarMonth, } from '@mui/icons-material'
import './schedule.scss'

export default function Schedule() {
  return (
    <div className='schedule'>
      <div className="wrapper">
        <div className="top">
          <span className='topStuff'><CalendarMonth/>  <div className='record'>Scheduled</div></span>
          <span>Real test</span>
          <span className='course'>science</span>
          <span className='date'>Recorded on: April 12, 2023 @ 5:28 PM</span>
        </div>

        <div className="bottom">
          <div className='bottomStuff'>
            <img src="/assets/noAvatar.png" alt="no avatar" />
            <span className='name'>Mike Menser</span>
            <span className="host">Host</span>
          </div>
          <h4>passionate about code :)</h4>
        </div>
      </div>
    </div>
  )
}
