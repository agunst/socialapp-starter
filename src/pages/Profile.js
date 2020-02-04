import React from "react";
import Menu from "../components/Menu";
import { userIsAuthenticated } from "../HOCs";
import UserProfile from "../components/userProfile/UserProfile"
import "./pages_css/profile.css";
import HerokuappService from "../ApiService";
import kitty2_icon from './pages_pics/kitty2_icon.jpg';
import doggy2_icon from './pages_pics/doggy2_icon.jpg';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new HerokuappService();
    this.state = {
      users: [],
      userData: {},
      isLoaded: false,
      formData: {}
    }
  }

  getUser() {
    const loginData = JSON.parse(localStorage.getItem("login"));
    return this.client.getUser(loginData.result.username).then(result => {
      // // Console.log statement used to access individualUser info.
      // console.log(result.data, "individualUser")
      this.setState({
        userData: result.data
      })
    })
  }

  // Code for accessing a list of all users - but not called anywhere.
  // getUsers() {
  //   return this.client.getUsers().then(result => {
  //     console.log(result.data, "all the users")
  //     this.setState({
  //       users: result.data
  //     })
  //   })
  // }

  onFileChange = e => {
    let formData = this.state.formData
    formData[e.target.name] = e.target.value
    let pictureSet = this.state.formData.picture
    if (e.target.files !== undefined) {
      pictureSet = e.target.files[0]
    }
    this.setState({
      picture: pictureSet,
      formData
    })
  }
  // photo
  fileUpload(file) {
    const formData = new FormData()
    formData.append("picture", file)
    return formData
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = this.fileUpload(this.state.picture)
    this.client.uploadPicture(formData).then(() => {
      this.getUser();
      this.setState({
        formData: {
          picture: ""
        }
      })
    })
  }

  //profile form
  handleChange = (event) => {
    let formData = this.state.formData;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.userData.user.displayName)
    this.client.updateUser(this.state.formData).then((res) => { 
      console.log(res)
      this.setState({
        submitted: true,
        userData: {user: res.data.user},
        formData: {displayName: "", about:"", password:""}
      })
    })
  
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <div className="PageAll">
        <div className="MenuBar">
          <Menu isAuthenticated={this.props.isAuthenticated} />
        </div>
        <div className="Content">

          <div className="LeftSideColumn">
            <img src={kitty2_icon} alt="happy cat" align="right" />
          </div>

          <div className="ProfileColumn">
            <div className="ProfileInfo">
              <h2>{this.state.userData.user && this.state.userData.user.username}</h2>
              <UserProfile
                picture={this.state.userData.user && this.state.userData.user.pictureLocation}
                about={this.state.userData.user && this.state.userData.user.about}
              />
              <br />
              <form>
                <p style={{ textAlign: "center" }}>Please select a picture that is 200kb or less</p>
                <input value={this.state.formData.picture} name="picture" type="file" onChange={this.onFileChange}></input>
                <button onClick={this.handleSubmit}>Upload Image</button>
              </form>
              <br />
              <h3>Update your Profile </h3>

              <form className="update-profile">
                <label>
                  Display Name:
            <input onChange={this.handleChange} value={this.state.formData.displayName} className="display-name" type="text" name="displayName" />
                </label>
                <br />
                <label>
                  About:
            <input onChange={this.handleChange} value={this.state.formData.about} className="about" type="text" name="about" />
                </label>
                <br />
                <label>
                  Password:
            <input onChange={this.handleChange} value={this.state.formData.password} className="password" type="text" name="password" />
                </label>
                <br />
                <input onClick={this.submitHandler} className="loginButton2" type="submit" value="Submit" />
              </form>
            </div>
          </div>

          <div className="RightSideColumn">
            <img src={doggy2_icon} alt="happy dog" align="left" />
          </div >
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);