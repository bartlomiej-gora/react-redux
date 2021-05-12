import axios from 'axios';

const KEY ='AIzaSyAIeIaizyrru_AHuVTKBHm15AAQD3BN2bk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});