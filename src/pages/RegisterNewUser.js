import React from 'react';
import { Link } from "react-router-dom";
import ApiService from "../ApiService";
import kitty_icon from '../components/pics/kitty_icon.jpg'
import doggy_icon from '../components/pics/doggy_icon.jpg';
import cat_approved from '../components/pics/cat_approved.jpg';
import "./pages_css/Register.css";

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

    render() {
        //show the thank you message if the form has been submitted
        if (this.state.submitted) {
            return (
                <div className="Thankyou">
                    <div className="Leftside">
                        <h2>
                            Thank you, {this.state.formData.username}!
                        </h2>
                        <br />
                        Your account has been created - you are now ready to log in!
                        <br />
                        <br />
                        <button className="loginButton"><Link to="/">Return to Log In Page</Link></button>
                    </div>
                    <div className="Rightside">
                        <img src={cat_approved} alt="cat with thumb up" align="left" />
                    </div>
                </div>
            );
        };

        return (
            <div className="formBox">

                <div className="SideColumn">
                    <img src={kitty_icon} alt="cat" align="right" />
                </div>

                <div className="MiddleColumn">
                    <form className="Form"
                        onSubmit={this.handleSubmit}>
                        <br />
                        <div className="username">
                            <label className="Label">User Name: </label>
                            <input className="InputName"
                                onChange={this.handleChange}
                                type="text"
                                name="username"
                                value={this.state.formData.username} required
                            />
                        </div>
                        <br />
                        <div className="displayName">
                            <label className="Label">Display Name: </label>
                            <input className="Input"
                                onChange={this.handleChange}
                                type="text"
                                name="displayName"
                                value={this.state.formData.displayName} required
                            />
                        </div>
                        <br />
                        <div className="password-r">
                            <label className="Label">Password: </label>
                            <input className="InputPassword"
                                onChange={this.handleChange}
                                type="text"
                                name="password"
                                value={this.state.formData.password} required
                            />
                        </div>
                        <br />
                        <button className="Button">Submit Form</button> <br />
                    </form>
                </div>

                <div className="SideColumn">
                    <img src={doggy_icon} alt="dog" align="left" />
                </div>
            </div>
        );
    }
}

export default RegisterNewUser;