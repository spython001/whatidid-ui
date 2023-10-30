import CreateLg from '../../components/createLg/CreateLg'
import CreateSm from '../../components/createSm/CreateSm'
import './create.scss'

export default function Create() {
  return (
    <div className='create'>
      <h3>upload  video</h3>
        <div className="wrapper">
          <CreateSm/>
          <CreateLg/>
        </div>
    </div>
  )
}
