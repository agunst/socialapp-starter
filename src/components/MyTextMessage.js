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
            console.log(error.message);
        })
        console.log()
    }

    UnlikeButton = (event) => {
        // need to update for the LIKE ID not the message id
        this.client.removeLike(parseInt(event.target.dataset.messageid)).then(result => {
            this.props.updateFeed();
        }).catch(error => {
            console.log(error.message);
        })
    }

    render() {
        return (
            <Card>
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
                    {/* need to figure the right value for the LIKE ID instead of the message id */}
                    {/* | <button data-messageid={this.props.newpost.message.id[]}>Unlike</button> */}
                    | <button data-messageid={this.props.newpost.id} onClick={this.deleteHandler}>Delete Post</button>
                </Card.Body>
            </Card>
        )
    }

}

export default MyTextMessage