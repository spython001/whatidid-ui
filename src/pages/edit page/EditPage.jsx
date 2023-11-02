import { AddAPhoto } from '@mui/icons-material'
import './editPage.scss'

export default function EditPage() {
  return (
    <div className='edit'>
        <div className="wrapper">
            <label className='wrapIcon' htmlFor="file"><AddAPhoto/></label>
            <input type="file" id='file' style={{display: 'none'}}/>
            
            <div className='avatar'>
                <img src='/assets/noAvatar.png' alt='no avatar'/>
                <label htmlFor="file"><AddAPhoto/></label>
                <input type="file" id='file' style={{display: 'none'}}/>
            </div>
        </div>
        
        <div className='top'>
            <form action="" className="userForm">
                <div className="userDetail">
                    <label>full name</label>
                    <input className='inputName' type="text" placeholder='emmy manny'/>
                </div>

                <div className="userDetail">
                    <label>bio</label>
                    <input type="text" />
                </div>

                <div className="userDetail">
                    <label>nationality</label>
                    <input type="text" />
                </div>

                <div className="userDetail">
                    <label>current location</label>
                    <input type="text" />
                </div>

                <div className="userDetail">
                    <label>community</label>
                    <select>
                        <option >Academic Tutoring</option>
                        <option>Academic/Career advice</option>
                        <option>Computer Skills</option>
                        <option >Creative</option>
                        <option>Discussion Forum</option>
                        <option >Languages</option>
                        <option >Music</option>
                    </select>
                </div>

                <div className="userDetail">
                    <label>expertise</label>
                    <select>
                        <option>acting</option>
                        <option>accounting/finance</option>
                        <option>buisiness</option>
                        <option>education</option>
                        <option>health education</option>
                        <option>investments</option>
                        <option>legal law</option>
                        <option>more ...</option>
                    </select>
                </div>
            </form>

            <button>save changes</button>
        </div>
           
    </div>
  )
}
