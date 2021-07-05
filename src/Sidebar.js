import React from 'react'
import './Sidebar.css';
import {Avatar,IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar_body">
            <div className="sidebar_header">
                <div className="avatar">
                    <Avatar src="https://picsum.photos/id/1005/200/300"/>
                </div>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                <SearchIcon />
                <input type="text" name="" id="" placeholder="Search or start new chat" />
                </div>
            </div> 

            <div className="sidebar_chats">
                <SidebarChat name="INU" last_msg="Hooman.....walk" time="now"/>
                <SidebarChat name="Choti" last_msg="Seete kahan ho" time="5:34 am" />
                <SidebarChat name="Utkarss" last_msg="Hello World" time="yesterday"/>
                <SidebarChat name="Helmet" last_msg="Aise kaise bro" time="yesterday"/>
                <SidebarChat name="Ayuss" last_msg="#all_lives_matter" time="yesterday"/>
                <SidebarChat name="Balika Vadhu" last_msg="Ungli ??" time="2d"/>
                <SidebarChat name="Abhishek" last_msg="44" time="3d"/>
                <SidebarChat name="Rahul" last_msg="Fake hai ji" time="4d"/>
                <SidebarChat name="Anirudh" last_msg="J**T" time="9/5/21"/>
                <SidebarChat name="Vishal" last_msg="Bihari" time="9/6/21"/>
            </div>

        </div>
    )
}

export default Sidebar;
