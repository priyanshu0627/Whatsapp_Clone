import React from 'react';
import './Chat.css';
import {Avatar,IconButton} from '@material-ui/core';
import {SearchOutlined,AttachFile,MoreVert} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
            
                <div className="chat_headerInfo">
                    <h3>room name</h3>
                    <p>last seen at....</p>
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
                <p className="chat_message">
                    <span className="chat_name">D</span>
                    this is a msg
                    <span className="chat_timestamp">{new Date().toLocaleString() + ''}</span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">D</span>
                    this is a msg
                    <span className="chat_timestamp">{new Date().toLocaleString() + ''}</span>
                </p>
                <p className="chat_message chat_reciever">
                    <span className="chat_name">D</span>
                    this is a msg
                    <span className="chat_timestamp">{new Date().toLocaleString() + ''}</span>
                </p>
                <p className="chat_message">
                    <span className="chat_name">D</span>
                    this is a msg
                    <span className="chat_timestamp">{new Date().toLocaleString() + ''}</span>
                </p>
            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input type="text" name="" id="" placeholder="Type a message" />
                    <button type="submit">
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;