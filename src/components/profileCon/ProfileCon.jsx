import { AutoAwesomeOutlined, DynamicFeed } from '@mui/icons-material'
import { useState, useEffect } from 'react'
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
        <p>what is on your mind ? post something now by clicking <b>here</b></p>
      </div>
    ),

    'Button 2': (
      <div className="butCon">
        <span>You do not have any reviews!</span>
        <p>You can get reviews by collaborating and connecting with other experts</p>
        <b className='b2'>Get Started</b>
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
        <button className="leftButton" onClick={() => handleButtonClick('Button 1')}>
          <DynamicFeed className='leftIcon'/>
        </button>

        <button className="rightButton" onClick={() => handleButtonClick('Button 2')}>
          <AutoAwesomeOutlined className='rightIcon'/>
        </button>
      </div>
      
      {isCentered && <div className='butCon'>{buttonContent[selectedButton]}</div>}
    </div>
  )
}
