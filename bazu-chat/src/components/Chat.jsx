import React from 'react'
import Addfriend from '../img/addfriend.png'
import Cam from '../img/cam.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-info">
        <span>Asake</span>
        <div className="chat-icons">
          <img src={Cam} alt="" />
          <img src={Addfriend} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat