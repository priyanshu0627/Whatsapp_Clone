import React from "react";
import Avatar from '@material-ui/core/Avatar';
import "./SidebarChat.css";
function SidebarChat(props){
    var a = Math.floor(Math.random()*15)+10;
    if(a===17){
        a=18;
    }
    const path = "https://picsum.photos/id/10"+a+"/200/300";
    return(
        <div className="sidebarChat">
            <Avatar src={path}></Avatar>
            <div className="sidebarChat_info">
                <h2>{props.name}</h2>
                <p>{props.last_msg}</p>
            </div>
            <div className="sidebar_time">
                <p>{props.time}</p>
            </div>
        </div> 
    )
}

export default SidebarChat;