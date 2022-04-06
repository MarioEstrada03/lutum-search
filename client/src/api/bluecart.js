import axios from "axios";

async function search(searchTerm){
  const url = "https://api.bluecartapi.com/request";

  const params = {
    api_key: process.env.REACT_APP_API_KEY,
    type: "search",
    search_term: searchTerm, // highlighter+pens
    sort_by: "best_seller",
  };

  return await axios
    .get(url, { params })
    .then((response) => response.data.search_results)
    .catch((error) => {
        console.log(error)
        return []
    });

};

const exports = { search}

export default exports;
