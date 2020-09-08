import axios from 'axios';

const KEY = 'AIzaSyCr5iQWNfqg88djX1laGFYVHmqr0iEH62c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
