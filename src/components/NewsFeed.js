import React from 'react'
import MyTextMessage from './MyTextMessage'


function NewsFeed(props) {
    const listMyPosts = props.messagelist.map((message, i) => (
        <MyTextMessage key={i} newpost={message}/>
    ))

    return (

        <ul className="NewsFeed">
            {listMyPosts}
        </ul>
    )
}

export default NewsFeed