import React, { Component } from 'react'

class NewPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: {
                username: '',
                text: '',
                likes: 0,
            }
        }
    }

    handleChange = (event) => {
        const { update } = { ...this.state }
        update[event.target.name] = event.target.value
        this.setState({
            update
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUpdate({ ...this.state.update })
        this.setState({
            message: {
                username: '',
                text: '',
                likes: 0,
            }
        })
    }

    render() {
        return (
            <form
                className="NewPost"
                onSubmit={this.handleSubmit}>

                <input 
                    name="update"
                    placeholder="new text message here"
                    type="text"
                    value={this.state.message.text}
                    onChange={this.handleChange}
                />
            
                <button>Submit</button>

            </form >
        )
    }

}

export default NewPost

