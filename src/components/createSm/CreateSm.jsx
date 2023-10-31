import { CloudUploadOutlined } from '@mui/icons-material'
import './createSm.scss'

export default function CreateSm() {
  return (
    <div className='createSm'>
        <h3>post a video to your account</h3>
        <label htmlFor='file'>
            <div className="wrapper">
                <div className="container">
                    <div className="top">
                        <CloudUploadOutlined className='topIcon'/>
                        <span className="upload">select video to upload</span>
                    </div>

                    <div className="bottom">
                        <span>MP4 or WebM</span>
                        <span className='px'>720x1280 resolution at most</span>
                        <span>up to 1 minute</span>
                        <span>less than 100 MB</span>
                    </div>
                    <input type="file" id='file'style={{display: 'none'}} />
                    
                    <span className='select'>select file</span>
                </div>
            </div>
            
        </label>
    </div>
  )
}
