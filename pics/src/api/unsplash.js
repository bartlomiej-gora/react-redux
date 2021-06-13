import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID o2tsY58N1st_QkD-08jVkCQ6RIpOHwACIe7I2iZw0Xg",
      }
});