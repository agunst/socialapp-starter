import React from 'react';
import { Link } from "react-router-dom";
import ApiService from "../ApiService";

class RegisterNewUser extends React.Component {
    constructor(props) {
        super(props);
        this.client = new ApiService();
        this.state = {
            submitted: false,
            formData: {
                username: "",
                displayName: "",
                password: ""
            }
        }
    }
    handleChange = (event) => {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }
    handleSubmit = (event) => {
        event.preventDefault();


        this.client.postUser(this.state.formData).then(result => {
            this.setState({
                submitted: true
            })
        }).catch(error => {
            console.log(error.message)
        })
    }
    // Following code copied from react-demo-app. 
    // Saving in case we need it later.
    // resetForm = (event) => {
    //     this.setState({
    //         submitted: false,
    //         formData: {
    //             username: "",
    //             displayName: "",
    //             password: ""
    //         }
    //     })
    // }

    render() {
        //show the thank you message if the form has been submitted
        if (this.state.submitted) {
            return (
                <div>
                    Thank you, {this.state.formData.username}!
                    <br />
                    Your account has been created - you are now ready to log in!
                    <button><Link to="/">Return to Log In Page</Link></button>
                </div>
            )
        }
        return (
            <div className="formBox">
                <form onSubmit={this.handleSubmit}>
                    <div id="username">
                        <label>User Name: </label>
                        <input onChange={this.handleChange} type="text" name="username" value={this.state.formData.username} required />
                    </div>
                    <div id="displayName">
                        <label>Display Name: </label>
                        <input onChange={this.handleChange} type="text" name="displayName" value={this.state.formData.displayName} required />
                    </div>
                    <div id="password">
                        <label>Password: </label>
                        <input onChange={this.handleChange} type="text" name="password" value={this.state.formData.password} required />
                    </div>
                    <button>Submit Form</button> <br />
                </form>
            </div>
        );
    }
}

export default RegisterNewUser;