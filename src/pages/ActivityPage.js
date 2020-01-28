import React, { Component } from 'react'


import hello_dog from '../components/pics/hello_dog.jpg'
// import menuPets from '../components/pics/menuPets'

import HerokuappService from "../ApiService";
import { userIsAuthenticated } from "../HOCs"

import NewPost from '../components/NewPost'
import MyPosts from '../components/MyPosts'
import NewsFeed from '../components/NewsFeed'
// import NavigationBar from '../components/NavigationBar'
import Menu from '../components/Menu'

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

<<<<<<< HEAD
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
=======
    getMessages() {
        this.client.getMessages().then(result => {
            this.setState({ messages: result.data.messages })
>>>>>>> Michael_CreateMessage
        })
    }

    componentDidMount() {
        this.getMessages();
    }

<<<<<<< HEAD
    render() {
        return (
            <div className="Main">
                <div className="FirstColumn">
                    <h3>Update My Status</h3>
                    <NewPost updateFeed={this.getMessages} />
                    <div className="FirstColumnPic"></div>
                    <img src={hello_dog} alt="happy dog" />
=======
    addPost = (update) => {
        this.setState((state, props) => ({
            myposts: [...state.myposts, update]
        }))
    }

    render() {
        return (

            <div className="Parent">
                <div className="Header">
                <Menu isAuthenticated={this.props.isAuthenticated} />
>>>>>>> Michael_CreateMessage
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

<<<<<<< HEAD
                <div className="SecondColumn">
                    <h3>My Posts</h3>
                    <MyPosts messagelist={this.state.myposts} />
=======
                    <div className="SecondColumn">
                        <h3>My Posts</h3>
                        <MyPosts messagelist={this.state.messages} />
                    </div>

                    <div className="ThirdColumn">
                        <h3>NewsFeed</h3>
                        <NewsFeed messagelist={this.state.messages} />
                        {/* <NewsFeed messagelist={this.client.getMessages()} /> */}
                    </div>
>>>>>>> Michael_CreateMessage
                </div>

                <div className="ThirdColumn">
                    <h3>NewsFeed</h3>
                    <NewsFeed messagelist={this.state.messages} />
                </div>
            </div>
        )
    }
}

export default userIsAuthenticated(ActivityPage)