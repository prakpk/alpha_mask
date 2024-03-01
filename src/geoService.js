import axios from 'axios';

// Assuming REACT_APP_IPSTACK_API_KEY is defined in your .env file
// No need to manually load dotenv; the build tool handles it for you.
const IPSTACK_API_KEY = process.env.REACT_APP_IPSTACK_API_KEY;
const IPSTACK_URL = `https://api.ipstack.com/check?access_key=${IPSTACK_API_KEY}`;

const getGeoInfo = async () => {
  try {
    const response = await axios.get(IPSTACK_URL, { timeout: 5000 }); // 5 seconds timeout
    if (response.status === 200 && response.data) {
      // Optionally validate the response structure here
      return response.data;
    }
    throw new Error(`Unexpected response status: ${response.status}`);
  } catch (error) {
    // Handle specific errors (network error, timeout error, etc.)
    if (error.code === 'ECONNABORTED') {
      console.error('Timeout error while fetching geo info', error);
    } else if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(`Error response from IPStack: ${error.response.status}`, error.response.data);
    } else {
      console.error('Error while fetching geo info', error.message);
    }
    return null;
  }
};

export default getGeoInfo;
