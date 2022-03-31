import axios from "axios";

async function search(searchTerm) {
  const params = {
    apiKey: process.env.REACT_APP_API_BESTBUY_KEY,
    format: 'json',
    show: "sku,name,longDescription,salePrice,onlineAvailability,image,url",
  };
  // "stainless steel ovens" -> split -> ['stainless', 'steel', 'ovens'] -> 'search=stainless&search=steel&search=ovens'
  const search = searchTerm
    .split(" ")
    .reduce((acc, term) => (acc += `search=${term}&`), '')
    .slice(0, -1); // Remove extra '&' from end of array link
    const searchURL = `https://api.bestbuy.com/v1/products((${search}))`
      {/* Title, Description, Image, Price, Availability, Shipping (isAvailable) */}
    return await axios.get(searchURL, {params})
    .then((response) => response.data.products)
    .then((products) => products.map(product =>( {
      id: product.sku,
      name: product.name,
      price: product.salePrice,
      isInStock: product.onlineAvailability,
      isShipping: product.onlineAvailability,
      description: product.longDescription,
      link: product.url,
      image: product.image
    })))
    .catch((error) => {
      console.log(error);
      return [];
    });
}

const exports = { search }

export default exports;