import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'0d1b59288cce4014a6d9c2493ac84c8a'
    }
})
