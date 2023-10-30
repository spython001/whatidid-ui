import { AutoAwesomeOutlined, DynamicFeed } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './profileCon.scss'

export default function ProfileCon() {
  const [isCentered, setIsCentered] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick =(button)=>{
    setIsCentered(true);
    setSelectedButton(button);
  };

  //Button Contents
  const buttonContent = {
    'Button 1': (
      <div className="butCon">
        <span>You have not posted anything yet</span>
        <p>what is on your mind ? post something now by clicking <Link to='/create' className='link'><b>here</b></Link></p>
      </div>
    ),

    'Button 2': (
      <div className="butCon">
        <span>You do not have any reviews!</span>
        <p>You can get reviews by collaborating and connecting with other experts</p>
        <h3 className='b2'>Get Started</h3>
      </div>
    ),
  };

  useEffect(() =>{
    setIsCentered(true);
    setSelectedButton('Button 1')
  }, []);

  return (
    <div className={`profileContainer ${isCentered ? 'centered' : ''}`}>
      <div className="wrapper">
        <button 
          onClick={() => handleButtonClick('Button 1')}
          className={selectedButton === 'Button 1' ? 'clicked' : 'leftButton' }
        >
          <DynamicFeed className='leftIcon'/>
        </button>

        <button 
          onClick={() => handleButtonClick('Button 2')}
          className={selectedButton === 'Button 2' ? 'clicked' : 'rightButton' }
        > 
          <AutoAwesomeOutlined className='rightIcon'/>
        </button>
      </div>
      
      {isCentered && <div className='butCon'>{buttonContent[selectedButton]}</div>}
    </div>
  )
}
