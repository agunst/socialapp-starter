import React from 'react';

function UserProfile(props) {
    return (
        <div>
            <img src={"http://socialapp-api.herokuapp.com" + props.picture} width="200px" height="200px" alt="Pet Profile Pic"/>
            <br />
            About: {props.about}
        </div>
    )
}

export default UserProfile;