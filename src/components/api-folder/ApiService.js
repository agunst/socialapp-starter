//import the axios HTTP client to communicate with the API
import axios from 'axios';
class HerokuappService {
    constructor(url = 'http://socialapp-api.herokuapp.com', client = axios.create()){
        this.url = url;
        this.client = client;
    }
    getQuestion(){
        return this.client.get(this.url);
    }
}
export default HerokuappService;