import React, {Component} from 'react';
import HerokuappService from "../../ApiService";
import Profile from "../../pages/Profile";

function UserProfile(props) {
    return (
        <div>
            
            <img src={props.picture}/>
            <br/>
            Username: {props.username}
            <br />
            Display Name: {props.displayName}
        </div>
    )
}

export default UserProfile;
// User: {JSON.stringify(props.userData)}
// {props.userData}