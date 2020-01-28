import React from 'react'
import MyTextMessage from './MyTextMessage'


function MyPosts(props) {
    const listMyPosts = props.messagelist.map((myposts, i) => (
        <MyTextMessage updateFeed={props.updateFeed}  key={i} newpost={myposts}/>
    ))

    return (

        <ul className="MyPosts">
            {listMyPosts}
        </ul>
    )
}

export default MyPosts