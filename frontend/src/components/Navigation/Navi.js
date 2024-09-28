import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import "./Navi.css";

export default function Navi() {
    return (
        <div>className="Navi"
            <div> className="NaviLeft"
               <span className="NaviLeft">Home</span>
            </div>

            <div> className="NaviCenter"
                <div className="serchBarBox">
                <SearchIcon className="searchIcon"/>
                <input placeholder="Search" className="searchBar"/>
                </div>
            </div>

            <div> className="NaviRight"
                <div className="NaviLinks">
                    <span className="NaviLink">HomePage</span>
                    <span className="NaviLink">Profile</span>
            </div>
          
            <div> className="NaviIcons"
                    <div className="NaviIconItem">
                        <PersonIcon/>
                        <span className="NaviIconBadge">3</span>
                    </div>
                    <div className="NaviIconItem">
                        <ChatIcon/>
                        <span className="NaviIconBadge">8</span>
                    </div>
                    <div className="NaviIconItem">
                        <SettingsIcon/>
                        <span className="NaviIconBadge">3</span>
                    </div>
            </div>
            <div className="pic">
               < img src="/images/1.jpg" alt="" className="pic" />  
            </div>
        </div>
    </div>
    );
    }