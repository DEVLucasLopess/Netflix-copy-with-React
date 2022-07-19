import React from "react";
import "./Header.css";

export default ({black}) => {
    return (
    
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <img src="https://cdn.discordapp.com/attachments/477994148964728832/998754135673409606/unknown.png"></img>
            </div>
            <div className="header--user">
                <img src="https://cdn.discordapp.com/attachments/477994148964728832/998755777135247391/unknown.png"></img>
            </div>
        </header>
    )
}