import ChatCon from '../../components/chatCon/ChatCon'
import ChatProfile from '../../components/chatProfile/ChatProfile'
import './chat.scss'

export default function Chat() {
  return (
    <div className='chat'>
        <ChatCon/>
        <ChatProfile/>
    </div>
  )
}
