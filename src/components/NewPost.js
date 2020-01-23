import React from 'react';
import ApiService from "../ApiService";

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.client = new ApiService();
        this.state = {
            submitted: false,
            message: {
                text: ""
            }
        }
    }

    handleChange = (event) => {
        let message = this.state.message;
        message[event.target.name] = event.target.value;
        this.setState({ message });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.client.postMessage(this.state.message).then(result => {
            // alert("Message sent!")
            this.setState({
                submitted: true
            })
        }).catch(error => {
            console.log(error.message)
        })
    }

    render() {
        return (
            <div className="NewPost">
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        type="text"
                        name="text"
                        rows="4" cols="30"
                        placeholder="new message here"
                        onChange={this.handleChange}
                        value={this.state.message.text}
                        required
                    ></textarea>
                    <br />
                    <button>Submit Update</button> <br />
                </form>
            </div>
        );
    }
}

export default NewPost