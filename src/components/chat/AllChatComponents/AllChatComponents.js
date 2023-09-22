import React from 'react'
import './All.css'
import ChatSidebar from '../chatSidebar/ChatSidebar'
import SidebarChat from '../sidebarChat/SidebarChat'
import Chat from '../chat/Chat'
const AllChatComponents = () => {
  return (
    <div className='chat_app'>
        <div className='app_body'>
            <ChatSidebar/>
            <SidebarChat/>
            <Chat/>
        </div>
    </div>
  )
}

export default AllChatComponents
