import React, {Component} from 'react';
import HerokuappService from "../../ApiService";
import Profile from "../../pages/Profile";
import doggyPic from "../pics/doggy_icon.jpg";
import kittyPic from "../pics/kitty_icon.jpg";

function UserProfile(props) {
    return (
        <div>
            <img src={"http://socialapp-api.herokuapp.com" + props.picture} width="200px" height="200px"/>
          {
            //<img src={doggyPic} width="200px" height="200px" />
            //<img src={kittyPic} width="200px" height="200px" />
          }
            <br/>
            Username: {props.username}
            <br />
            Display Name: {props.displayName}
            <br />
            About: {props.about}
        </div>
    )
}

export default UserProfile;
// User: {JSON.stringify(props.userData)}
// {props.userData}