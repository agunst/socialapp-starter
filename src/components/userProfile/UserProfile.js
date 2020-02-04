import React from 'react';

function UserProfile(props) {

    
    return (
        <div>
            
            <img src={"http://socialapp-api.herokuapp.com" + props.picture} alt="picture" width="200px" height="200px"/>
            
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