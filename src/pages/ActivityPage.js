import React, { Component } from 'react'
import HerokuappService from "../ApiService";
import NewPost from '../components/NewPost'
import MyPosts from '../components/MyPosts'
import NewsFeed from '../components/NewsFeed'
import hello_dog from '../components/pics/hello_dog.jpg'

class ActivityPage extends Component {
    constructor(props) {
        super(props)
        this.client = new HerokuappService();
        this.state = {
            myposts: [],
            messages: []
        }
    }

    getMessages = () => {
        this.client.getMessages().then(result => {
            let myMessages = result.data.messages.filter(function (message) {
                const loginData = JSON.parse(localStorage.getItem("login"));
                return message.username === loginData.result.username;
            })
            this.setState({
                messages: result.data.messages,
                myposts: myMessages
            })
        })
    }

    componentDidMount() {
        this.getMessages();
    }

    render() {
        return (
            <div className="Main">
                <div className="FirstColumn">
                    <h3>Update My Status</h3>
                    <NewPost updateFeed={this.getMessages} />
                    <div className="FirstColumnPic"></div>
                    <img src={hello_dog} alt="happy dog" />
                </div>

                <div className="SecondColumn">
                    <h3>My Posts</h3>
                    <MyPosts messagelist={this.state.myposts} />
                </div>

                <div className="ThirdColumn">
                    <h3>NewsFeed</h3>
                    <NewsFeed messagelist={this.state.messages} />
                </div>
            </div>
        )
    }
}

export default ActivityPage