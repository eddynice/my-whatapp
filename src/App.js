import React,{ useState,useEffect} from 'react'
import Sidebar from './component/Sidebar'
import Chat from './component/Chat';
import Pusher from 'pusher-js'
import "./App.css"
import axios from './axios'
//import axios from "axios";
export default function App() {
    const [message, setMessage] =useState([]);

    useEffect(()=>{
     axios.get("/messages/sync").then((response)=>{
        setMessage(response.data)
     })

    },[])


    useEffect(()=>{
        var pusher = new Pusher('bfe95c0191d0248945c4', {
            cluster: 'eu'
          });
      
          const channel = pusher.subscribe('messages');
          channel.bind('inserted', (newMessage)=> {
            alert(JSON.stringify(newMessage));
            setMessage([...message,newMessage])
          });
          return ()=>{
              channel.unbind_all();
              channel.unsubscribe();
          }
    },[message])

    console.log(message)
    return (
        <div  className="app">
            <div className="app_body">
            <Sidebar/>
          <Chat message={message}/>

            </div>
          
        </div>
    )
}
