import React from 'react'
import Card from 'react-bootstrap/Card';

function MyTextMessage (props){

    return (
        // <textarea className="MyTextMessage">
        //     {props.newpost.text}
        // </textarea>
        <Card>
            {/* <b>User:{props.newpost.username}</b><br/>
            <b>{props.newpost.text}</b><br/>
            <b>Likes: {props.newpost.likes.length}</b><hr/> */}
            <Card.Body>
                <Card.Title>
                {props.newpost.username}
                </Card.Title>
                <Card.Body>
                {props.newpost.text} | {props.newpost.likes.length}
                </Card.Body>
            </Card.Body>
        </Card>
    )
}

export default MyTextMessage