import React, {Component} from 'react';
import HerokuappService from "../../ApiService";
import Profile from "../../pages/Profile";


function UserProfile(props) {
    return (
        <div>
            <img src={"http://socialapp-api.herokuapp.com" + props.picture} width="200px" height="200px"/>
            
            <br/>
            {/* Username: {props.username} */}
            {/* <br /> */}
            {/* Display Name: {props.displayName} */}
            {/* <br /> */}
            About: {props.about}
        </div>
    )
}

export default UserProfile;
// User: {JSON.stringify(props.userData)}
// {props.userData}