import axios from 'axios';

const KEY = 'AIzaSyCk7_vRgERIvSP9gMZrTWg2TcbJ5AdB4fY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});