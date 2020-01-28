import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import paws_like_icon from '../components/pics/paws_like_icon.gif';
import HerokuappService from '../ApiService';

class MyTextMessage extends Component {
    constructor(props) {
        super(props);
        this.client = new HerokuappService();
    }

    deleteHandler = (event) => {
        this.client.removeMessage(parseInt(event.target.dataset.messageid)).then(result => {
            this.props.updateFeed();
        }).catch(error => {
            console.log(error.message)
        })

    }

    LikeButton = (event) => {
        this.client.postLike(parseInt(event.target.dataset.messageid)).then(result => {
            this.props.updateFeed();
        }).catch(error => {
            console.log(error.message)
        })
        // console.log(event.target.dataset.messageid)
    }



    render() {
        return (
            // <textarea className="MyTextMessage">
            //     {props.newpost.text}
            // </textarea>
            <Card>
                {/* <b>User:{props.newpost.username}</b><br/>
                <b>{props.newpost.text}</b><br/>
                <b>Likes: {props.newpost.likes.length}</b><hr/> */}
                <Card.Body>
                    <Card.Title>
                        {this.props.newpost.username}
                    </Card.Title>
                    <Card.Body>
                        {this.props.newpost.text}
                    </Card.Body>
                    <Card.Img variant="bottom" src={paws_like_icon}
                       data-messageid={this.props.newpost.id} onClick={this.LikeButton} className="LikeButton" />
                    | {this.props.newpost.likes.length}
                    | <button data-messageid={this.props.newpost.id} onClick={this.deleteHandler}>Delete</button>
                </Card.Body>
            </Card>
        )
    }

}

export default MyTextMessage