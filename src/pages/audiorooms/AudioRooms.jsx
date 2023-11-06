import { CalendarMonth, HeadsetMic } from '@mui/icons-material';
import { useEffect, useState } from 'react'
import './audioRooms.scss'
import PreRecorded from '../pre-recorded/PreRecorded';
import Scheduled from '../scheduled/Scheduled';

export default function AudioRooms() {
  const [selectedButton, setIsSelectedButton] = useState(null);

  const handleButtonClick = (button) =>{
    setIsSelectedButton(button);
  }

useEffect(() => {
    setIsSelectedButton('Button 1')
}, [])



//child button state
const [button, setButton] = useState(null);

//FOR CHILD BUTTON CONTENT

//content1
const handleClick = (button) =>{
    setButton(button);
  }

useEffect(() => {
    setButton('Button a')
}, []);


const childButtonContent = {
    'Button a': (
        <span className='no'>No audiorooms available</span>
    ),
    'Button b': (
        <span>No audiorooms available</span>
    )
}

//content 2
const handleClick1 = (button) =>{
  setButton(button);
}

useEffect(() => {
  setButton('Button c')
}, []);


const childButtonContent1 = {
  
  'Button c': <PreRecorded/>,
  'Button d': (
      <span>No audiorooms available</span>
  )
}


//content 3
const handleClick2 = (button) =>{
  setButton(button);
}

useEffect(() => {
  setButton('Button e')
}, []);


const childButtonContent2 = {
  
  'Button e': <Scheduled/>,
  'Button f': (
      <span>No audiorooms available</span>
  )
}


  const buttonContent = {
    'Button 1': (
        <div className="butCon">
            <span>Audio Rooms</span>
            <span className='active'>Active Audio Rooms</span>
            <div className="buttons">
                <button
                  onClick={()=>handleClick('Button a')}
                  className = {button === 'Button a' ? 'click' : '' }
                >
                    ALL ROOMS
                </button>
                
                <button
                  onClick={() => handleClick('Button b')}
                  className = {button === 'Button b' ? 'click' : ''}
                >
                    MY ROOMS
                </button>
                <div className="buttonContent">{childButtonContent[button]}</div>
            </div>
        </div>
    ),

    
    'Button 2': (
        <div className="butCon">
          <span>Audio Rooms</span>
          <span className='headset'><HeadsetMic/> <div className='active'>Active Audio Rooms</div></span>
          <div className="buttons">
              <button
                onClick={()=>handleClick1('Button c')}
                className = {button === 'Button c' ? 'click' : '' }
              >
                  ALL ROOMS
              </button>
              
              <button
                onClick={() => handleClick1('Button d')}
                className = {button === 'Button d' ? 'click' : ''}
              >
                  MY ROOMS
              </button>
              <div className="buttonContent">{childButtonContent1[button]}</div>
          </div>
      </div>
    ),

    
    'Button 3': (
        <div className="butCon">
          <span>Audio Rooms</span>
          <span className='month'> <CalendarMonth/> <div className='active'>Active Audio Rooms</div></span>
          <div className="buttons">
              <button
                onClick={()=>handleClick2('Button e')}
                className = {button === 'Button e' ? 'click' : '' }
              >
                  ALL ROOMS
              </button>
              
              <button
                onClick={() => handleClick2('Button f')}
                className = {button === 'Button f' ? 'click' : ''}
              >
                  MY ROOMS
              </button>
              <div className="buttonContent">{childButtonContent2[button]}</div>
          </div>
        </div>
    ),
  }


  return (
    <div className='audio'>
        <div className="wrapper">
            <button
              onClick={()=> handleButtonClick('Button 1')}
              className= {selectedButton === 'Button 1' ? 'Clicked' : ''}
            >
              LIVE
            </button>
            
            <button
              onClick={()=> handleButtonClick('Button 2')}
              className = {selectedButton === 'Button 2' ? 'Clicked' : ''}
            >
              PRE-RECORDED
            </button>
            
            <button
              onClick={() => handleButtonClick('Button 3')}
              className = {selectedButton === 'Button 3' ? 'Clicked' : ''}
            >
              SCHEDULED
            </button>
        </div>

        <div className="content">
              <div className="butCon">{buttonContent[selectedButton]}</div>
        </div>
    </div>
  )
}
