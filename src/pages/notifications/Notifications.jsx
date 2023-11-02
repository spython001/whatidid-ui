import './notifications.scss'

export default function Notifications() {
  return (
    <div className='notifications'>
        <div className="wrapper">
            <span>Ooops!!!</span>
            <span className='notifMsg'>No notifications at the moment, check back later. You will be notified when you have one</span>
            <img src="/assets/notif.png" alt="" />
        </div>
    </div>
  )
}
