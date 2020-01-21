import React from 'react'
import MyTextMessage from './MyTextMessage'


function MyPosts(props) {
    const listMyPosts = props.messagelist.map((message, i) => (
        <MyTextMessage key={i} newpost={message}/>
    ))

    return (

        <ul className="MyPosts">
            {listMyPosts}
        </ul>
    )
}

export default MyPosts