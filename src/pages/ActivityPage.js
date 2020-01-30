import React, { Component } from 'react'
import hello_dog from '../components/pics/hello_dog.jpg'
import square from './pages_pics/square.gif'
import HerokuappService from "../ApiService";
import { userIsAuthenticated } from "../HOCs"
import NewPost from '../components/NewPost'
import MyPosts from '../components/MyPosts'
import NewsFeed from '../components/NewsFeed'
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
            <div className="Parent">
                <div className="Header">
                    <Menu isAuthenticated={this.props.isAuthenticated} />
                </div>
                <div className="Main">
                    <div className="FirstColumn">
                        <div className="Posting">
                            <h3>Update My Status</h3>
                            <NewPost updateFeed={this.getMessages} />
                        </div>
                        <div className="FirstColumnPic">
                            <img src={hello_dog} alt="happy dog" align="right" />
                        </div>
                    </div>
                    <div className="SecondColumn">
                        <div className="ColumnHeader">
                            <h3>My Posts</h3>
                            <MyPosts messagelist={this.state.myposts} updateFeed={this.getMessages} />
                        </div>
                    </div>
                    <div className="ThirdColumn">
                        <h3>NewsFeed</h3>
                        <NewsFeed messagelist={this.state.messages} updateFeed={this.getMessages} />
                    </div>
                </div>
            </div>

        )
    }
}
export default userIsAuthenticated(ActivityPage)