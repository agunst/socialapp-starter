import React from 'react'
import MyTextMessage from './MyTextMessage'


function MyPosts(props) {
    const listMyPosts = props.messagelist.map((myposts, i) => (
        <MyTextMessage key={i} newpost={myposts}/>
    ))

    return (

        <ul className="MyPosts">
            {listMyPosts}
        </ul>
    )
}

export default MyPosts