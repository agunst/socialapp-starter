import React, {Component} from 'react'

import NewPost from '../components/NewPost'
import MyPosts from '../components/MyPosts'
import NewsFeed from '../components/NewsFeed'

class ActivityPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            myposts: []
        }
    }

    messages = [
        {
          "id": 15,
          "text": "This is another freaking message!",
          "username": "KyleT",
          "createdAt": "2020-01-14T21:51:02.222Z",
          "likes": []
        },
        {
          "id": 14,
          "text": "This is a different test message!",
          "username": "KyleT",
          "createdAt": "2020-01-14T21:35:34.571Z",
          "likes": []
        },
        {
          "id": 13,
          "text": "Design is good",
          "username": "Amzn",
          "createdAt": "2020-01-14T21:35:04.969Z",
          "likes": []
        },
        {
          "id": 12,
          "text": "The way to get started is to quit talking and begin doing. -Walt Disney",
          "username": "indycallahan",
          "createdAt": "2020-01-14T21:03:02.569Z",
          "likes": []
        },
        {
          "id": 11,
          "text": "Hello,world",
          "username": "bijcher",
          "createdAt": "2020-01-14T20:56:50.614Z",
          "likes": [
            {
              "id": 7,
              "username": "bijcher",
              "messageId": 11,
              "createdAt": "2020-01-14T21:02:21.230Z"
            }
          ]
        },
        {
          "id": 10,
          "text": "Design is good",
          "username": "Amzn",
          "createdAt": "2020-01-14T20:56:12.147Z",
          "likes": [
            {
              "id": 2,
              "username": "Amzn",
              "messageId": 10,
              "createdAt": "2020-01-14T21:00:51.848Z"
            }
          ]
        },
        {
          "id": 9,
          "text": "wow I am actually doing this",
          "username": "crame2",
          "createdAt": "2020-01-14T20:56:02.596Z",
          "likes": []
        },
        {
          "id": 8,
          "text": "This is a test message!",
          "username": "KyleT",
          "createdAt": "2020-01-14T20:56:01.754Z",
          "likes": []
        },
        {
          "id": 7,
          "text": "hello everyone",
          "username": "tiree",
          "createdAt": "2020-01-14T20:55:55.954Z",
          "likes": []
        },
        {
          "id": 6,
          "text": "eric is tired and doesn't want to build a social app",
          "username": "erics273",
          "createdAt": "2020-01-14T19:18:30.117Z",
          "likes": [
            {
              "id": 1,
              "username": "erics273",
              "messageId": 6,
              "createdAt": "2020-01-14T19:20:42.292Z"
            }
          ]
        },
        {
          "id": 5,
          "text": "eric was here",
          "username": "erics273",
          "createdAt": "2020-01-14T19:13:28.131Z",
          "likes": []
        },
        {
          "id": 4,
          "text": "This is my message",
          "username": "erics273",
          "createdAt": "2020-01-14T19:11:24.076Z",
          "likes": []
        },
        {
          "id": 3,
          "text": "whatever I want",
          "username": "crameB1",
          "createdAt": "2020-01-14T14:34:19.506Z",
          "likes": []
        },
        {
          "id": 2,
          "text": "Do not touch my HolyBlessed mouse! No NoNo nanananananananNO",
          "username": "crameB1",
          "createdAt": "2020-01-14T13:59:48.902Z",
          "likes": []
        },
        {
          "id": 1,
          "text": "First!",
          "username": "crameB1",
          "createdAt": "2020-01-14T13:40:53.082Z",
          "likes": [
            {
              "id": 5,
              "username": "tiree",
              "messageId": 1,
              "createdAt": "2020-01-14T21:01:43.605Z"
            }
          ]
        }
      ];

    addPost = (update) =>{
        this.setState((state, props) => ({
            myposts: [...state.myposts, update]
        }))
    }

    render(){
        return (
            <div className="Main">
                <div className="FirstColumn">
                <h3>Update My Status</h3>
                <NewPost addPost={this.addPost}/>
                </div>
                <div className ="SecondColumn">
                <h3>My Posts</h3>
                <MyPosts messagelist={this.messages} />
                </div>
                <div className = "ThirdColumn">
                <h3>NewsFeed</h3>
                <NewsFeed messagelist={this.messages} />
                </div>


            </div>
        )
    }
}

export default ActivityPage