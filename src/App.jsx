import './App.scss'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'

function App() {

  return (
    <>
    <Topbar/>
    <div className="container">
      <Sidebar/>
      <Profile/>
    </div>
    </>
  )
}

export default App
