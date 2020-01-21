import React, {Component} from 'react';
import HerokuappService from "../../ApiService";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.client = new HerokuappService();
        this.state = {
            userData: {},
            pictureLocation: "",
            username: "",
            displayName: "",
            about: "",
            googleId: "",
            createdAt: "",
            updatedAt: ""
            
        }
    }

    getNewUser() {
        return this.client.getUsers().then(result => {
            this.setState({
                data: result.userData[0]
            })
        })
    }

    componentDidMount() {
        this.getNewUser();
    }

    render() {
        return(
            <div>
                {this.state.userData.username}
            </div>
        );
    }
}

export default UserProfile;