import React,{useState} from 'react';
import './chat.css'
import axios from '../axios'
import AttachFile from "@material-ui/icons/AttachFile"
//import ChatIcon from "@material-ui/icons/Chat"
import MoreVert from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import {Avatar ,IconButton} from "@material-ui/core"
//import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';
import MicIcon from "@material-ui/icons/Mic"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
export default function Sidebar({message}) {

    const [input, setInput] =useState('');

    const sendmessage=(e)=>{
        e.preventDefault();

        axios.post("/messages/", {
            message:input,
            name:"my_app",
            timestamps:"just now",
            recieve:false
        });
        setInput("");
    }
    return (
        <div className="chat">
         <div className="chat_header">
             <Avatar/>
             <div className="chat_headerInfo">
                 <h3>Room Name</h3>
                 <p>Last seen at....</p>
             </div>
             <div className="chat_headerRight">
                 <IconButton>
                     <SearchOutlined/>
                 </IconButton>
                 <IconButton>
                     <AttachFile/>
                 </IconButton>
                 <IconButton>
                     <MoreVert/>
                 </IconButton>
             </div>
         </div>
         <div className="chat_body">
             {message.map((messages)=>(
                  <p className={`chat_message ${messages.recieved && "chat_recieve"}`}>
                  <span className="chat_name">{messages.name}
                       </span>{messages.message}
                       <span className="chat_timestamp">{messages.timestamps}</span></p>
      

             ))}
            
                 <p className="chat_message chat_recieve">
            <span className="chat_name">sony
                 </span>this is a message
                 <span className="chat_timestamp">{new Date().toUTCString()}</span></p>

                 <p className="chat_message">
            <span className="chat_name">sony
                 </span>this is a message
                 <span className="chat_timestamp">{new Date().toUTCString()}</span></p>

         </div>
         <div className="footer_chat">
             <IconButton>
             <InsertEmoticonIcon/>
             </IconButton>
             <form>
                 <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Type a message'/>
                 <button onClick={sendmessage} type="submit">send a message</button>
             </form>
             <IconButton>
             <MicIcon/>
             </IconButton>
         </div>
        </div>
    )
}
