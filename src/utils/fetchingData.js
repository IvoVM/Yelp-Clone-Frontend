import axios from "axios";

baseURL = "http://localhost:3001/api/v1/restaurants";

const fetchDataFromApi = async (type, url) => {
  try {
    let response = await axios.type(baseURL + `/${url}`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default fetchDataFromApi;
