import React, { useState } from 'react';
import './Chat.css';
import {Avatar,IconButton} from '@material-ui/core';
import {SearchOutlined,AttachFile,MoreVert} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import axios from "./Axios";
function Chat({messages}) {
    const today = new Date();
    const time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const [input,setInput] = useState("");

    function handleChange(event) {
        const data = event.target.value;
        setInput(data);
    }

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new", {
            message: input,
            timestamp: time,
            received: true 
        });

        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat_header">
                <div className="avatar">
                    <Avatar src="images/clg_gp.jpg"/>
                </div>
            
                <div className="chat_headerInfo">
                    <h3>College Group</h3>
                    <p>Anirudh, INU, Ayuss, Utkarss</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                {messages.map((message)=>(
                    <p className={`chat_message ${message.received && "chat_reciever"} `}>
                    <h6 className="chat_name">{message.name}</h6>
                    {message.message}
                    <span className="chat_timestamp">{message.timestamp}</span>
                </p>
                ))}

                
            </div>

            <div className="chat_footer">
                <IconButton>
                    <InsertEmoticonIcon className="insert_icon"/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon className="attach_icon" />
                </IconButton>
                
                <form>
                    <input value={input} onChange={handleChange} type="text" name="" id="" placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit">
                        Send a message
                    </button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
                
            </div>
        </div>
    )
}

export default Chat;