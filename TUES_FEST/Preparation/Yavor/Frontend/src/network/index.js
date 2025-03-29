
import axios from 'axios'


const fetchAPI = async (setArray) => {
    const response = await axios.get("http://localhost:8000/api");
    setArray(response.data.fruit);
    console.log(response.data.fruit);
  };


export { fetchAPI };