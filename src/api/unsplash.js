import axios from 'axios';
export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers:{
        Authorization:"Client-ID Tjti0E7g3k9nTrc4bEmvI9l5esN9qsDJzLv9CJ5hMFM"
    }
})