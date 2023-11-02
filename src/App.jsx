import './App.scss'
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom"
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Create from './pages/create/Create'
import Chat from './pages/chat/Chat'
import EditPage from './pages/edit page/EditPage'
import Notifications from './pages/notifications/Notifications'

function App() {

  return (
    <>
    <Router>
        <Topbar/>
        <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          
          <Route path='/profile'>
            <Profile/>
          </Route>
          
          <Route path='/create'>
            <Create/>
          </Route>

          <Route path='/chat'>
            <Chat/>
          </Route>

          <Route path='/edit'>
            <EditPage/>
          </Route>

          <Route path='/notifications'>
            <Notifications/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  )
}

export default App
