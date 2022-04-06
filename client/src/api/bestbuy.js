import axios from "axios";

async function search(searchTerm) {
  return await axios.get('/search/bestbuy', {params: {searchTerm}})
  .then(response => response.data)
  .catch(error => {
    console.log(error)
    return []
  })
}

const exports = { search }

export default exports;