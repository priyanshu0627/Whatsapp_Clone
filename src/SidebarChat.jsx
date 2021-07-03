import React from "react";
import Avatar from '@material-ui/core/Avatar';
import "./SidebarChat.css";
function SidebarChat(){
    return(
        <div className="sidebarChat">
            <Avatar></Avatar>
            <div className="sidebarChat_info">
                <h2>room name</h2>
                <p>last msg</p>
            </div>
        </div> 
    )
}

export default SidebarChat;