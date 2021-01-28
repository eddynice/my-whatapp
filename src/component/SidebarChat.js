//import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import './sidebarchat.css';
import {Avatar ,IconButton} from "@material-ui/core"

export default function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarchat_info">
                <h2>Room name </h2>
                <p>this is the last message</p>
            </div>
            
        </div>
    )
}
