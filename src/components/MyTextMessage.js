import React from 'react'

function MyTextMessage (props){

    return (
        // <textarea className="MyTextMessage">
        //     {props.newpost.text}
        // </textarea>
        <div>
            <b>User:{props.newpost.username}</b><br/>
            <b>{props.newpost.text}</b><br/>
            <b>Likes: {props.newpost.likes.length}</b><hr/>
        </div>
    )
}

export default MyTextMessage