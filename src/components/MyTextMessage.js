import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import paws_like_icon from '../components/pics/paws_like_icon.gif';
import blue_paws_like_icon from '../components/pics/blue_paws_like_icon.gif';
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
    }


    Unlike = (event) => {
        this.client.removeLike(parseInt(event.target.dataset.likeid)).then(result => {
            this.props.updateFeed();
        }).catch(error => {
            console.log(error.message)
        })
    }

    render() {
        let likeButtonImage = paws_like_icon;
        let likeID;
        let likeChanger = this.LikeButton;
        let deletebutton;
        const loginData = JSON.parse(localStorage.getItem("login"));
        for (let i = 0; i < this.props.newpost.likes.length; i++) {
            if (this.props.newpost.likes[i].username === loginData.result.username) {
                likeButtonImage = blue_paws_like_icon;
                likeID = this.props.newpost.likes[i].id;
                likeChanger = this.Unlike;
            }
        }

        if (this.props.newpost.username === loginData.result.username){
            deletebutton = <button data-messageid={this.props.newpost.id} onClick={this.deleteHandler}>Delete</button>;
        }

        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        {this.props.newpost.username}
                    </Card.Title>
                    <Card.Body>
                        {this.props.newpost.text}
                    </Card.Body>
                    <Card.Img id="pawLike" variant="bottom" src={likeButtonImage}
                        data-messageid={this.props.newpost.id} data-likeid={likeID} onClick={likeChanger} className="LikeButton" />
                    | {this.props.newpost.likes.length}
                    | {deletebutton} 
                </Card.Body>
            </Card>
        )
    }
}

export default MyTextMessage