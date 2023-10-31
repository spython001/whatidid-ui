import './createLg.scss'

export default function CreateLg() {
  return (
    <div className='createLg'>
      <div className="wrapper">
        
        <div className="top">
          <span>caption</span>
          <input type="text" />
        </div>

        <div className="middle">
          <span>cover</span>
          <div className="coverSheet"></div>
        </div>

        <div className="bottom">
          <span>our ai will run a copyright check</span>
          <h4>
            we will check your video for potential copyright infringement on usewd sounds. 
            If infringements are found, you can edit the video before posting
          </h4>
        </div>

        <div className="buttons">
          <button className="discard">Discard</button>
          <button className="post">Post</button>
        </div>

      </div>
    </div>
  )
}
