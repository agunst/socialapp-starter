import React from 'react';
import default_profile_pic from "../pics/doggy_icon.jpg"

function UserProfile(props) {
    let picture = "http://socialapp-api.herokuapp.com" + props.picture
    if (!props.picture) {
        picture = default_profile_pic
    }

    return (


        <div>

            <img src={picture} alt="your profice phot" width="210px" height="215px" />

            <br />
            {/* Username: {props.username} */}
            {/* <br /> */}
            {/* Display Name: {props.displayName} */}
            {/* <br /> */}

            <br />
            <br />

            <b>About</b>: {props.about}

        </div>

    )
}

export default UserProfile;