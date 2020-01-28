import React, { Component } from 'react'


import hello_dog from '../components/pics/hello_dog.jpg'
// import menuPets from '../components/pics/menuPets'

import HerokuappService from "../ApiService";

import NewPost from '../components/NewPost'
import MyPosts from '../components/MyPosts'
import NewsFeed from '../components/NewsFeed'
import NavigationBar from '../components/NavigationBar'

import "./pages_css/activityPage.css";

class ActivityPage extends Component {
    constructor(props) {
        super(props)
        this.client = new HerokuappService();
        this.state = {
            myposts: [],
            messages: []
        }
    }

    getMessages() {
        this.client.getMessages().then(result => {
            this.setState({ messages: result.data.messages })
        })
    }

    componentDidMount() {
        this.getMessages();
    }

    addPost = (update) => {
        this.setState((state, props) => ({
            myposts: [...state.myposts, update]
        }))
    }

    render() {
        return (

            <div className="Parent">
                <div className="Header">
                <NavigationBar />
                </div>
                
                <div className="Main">

                    <div className="FirstColumn">
                        <div className="Posting">
                            <h3>Update My Status</h3>
                            <NewPost addPost={this.addPost} />
                        </div>
                        {/* <h3>Update My Status</h3>
                    <NewPost addPost={this.addPost} /> */}
                    
                        <div className="FirstColumnPic">
                            <img src={hello_dog} alt="happy dog" align="right" />
                        </div>
                    </div>

                    <div className="SecondColumn">
                        <h3>My Posts</h3>
                        <MyPosts messagelist={this.state.messages} />
                    </div>

                    <div className="ThirdColumn">
                        <h3>NewsFeed</h3>
                        <NewsFeed messagelist={this.state.messages} />
                        {/* <NewsFeed messagelist={this.client.getMessages()} /> */}
                    </div>
                </div>

            </div>
        )
    }
}

export default ActivityPage