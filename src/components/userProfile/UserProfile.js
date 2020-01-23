import React, {Component} from 'react';
import HerokuappService from "../../ApiService";
import Profile from "../../pages/Profile";

function UserProfile(props) {
    return (
        <div>
            User: {JSON.stringify(props.userData)}
            Username: {props.username}
        </div>
    )
}

export default UserProfile;
// {JSON.stringify(props.userData)}
// {props.userData}