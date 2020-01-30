import React from 'react';
// import MyTextMessage from './MyTextMessage'
import AllUserMessage from './AllUserMessage';

function NewsFeed(props) {
    const listMyPosts = props.messagelist.map((message, i) => (
        <AllUserMessage
            updateFeed={props.updateFeed}
            key={i}
            newpost={message} />
    ))

    return (
        <ul className="NewsFeed">
            {listMyPosts}
        </ul>
    )
}

export default NewsFeed;