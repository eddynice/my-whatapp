import React from 'react'
import "./sidebar.css"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import {Avatar ,IconButton} from "@material-ui/core"
import SidebarChat from './SidebarChat'


export default function Sidebar() {
    return (
        <div className="sidebar">
          
            <div className="sidebar_header">
                <Avatar src=""/>

              <div className="sidebar_headerRight">
                  <IconButton>
                     <DonutLargeIcon/>
                  </IconButton>
                  <IconButton>
                      <ChatIcon/>
                  </IconButton>
                  <IconButton>
                      <MoreVertIcon/>
                  </IconButton>
                  
              </div>

            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchCOntainer">
               <SearchOutlined/>
               <input placeholder="Search or start new chat " type="text"/>

                </div>
            </div>

            <div className="sidebar_chat">
                   <SidebarChat/>
                   <SidebarChat/>
                   <SidebarChat/>
                   <SidebarChat/>
                   <SidebarChat/>
                   <SidebarChat/>

            </div>
        </div>
    )
}
