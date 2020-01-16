//import the axios HTTP client to communicate with the API
import axios from 'axios';
class HerokuappService {
    constructor(url = 'http://socialapp-api.herokuapp.com', client = axios.create()){
        this.url = url;
        this.client = client;
    }
    getUsers(){
        return this.client.get(this.url + "/users");
    }

    postMessage(messageObject){
        return this.client.post(this.url + "/messages", messageObject);
    }

    postUser(userObject){
        return this.client.post(this.url + "/users", userObject);
    }

    postLike(id){
        return this.client.post(this.url + "/likes", {messageId: id});
    }

    removeLike(id){
        return this.client.delete(this.url + "/likes/" + id);
    }
}
export default HerokuappService;