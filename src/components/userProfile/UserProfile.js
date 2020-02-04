import React from 'react';

function UserProfile(props) {

    
    return (
        <div>
            
            <img src={"http://socialapp-api.herokuapp.com" + props.picture} alt="picture" width="210px" height="215px"/>
            
            <br/>
            {/* Username: {props.username} */}
            {/* <br /> */}
            {/* Display Name: {props.displayName} */}
            {/* <br /> */}
            
            <br/>
            <br/>

            <b>About</b>: {props.about}
            
        </div>
        
    )
}

export default UserProfile;