import CreateLg from '../../components/createLg/CreateLg'
import CreateSm from '../../components/createSm/CreateSm'
import './create.scss'

export default function Create() {
  return (
    <div className='create'>
        <CreateSm/>
        <CreateLg/>
    </div>
  )
}
