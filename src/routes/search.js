const router = require("express").Router();
const axios = require("axios");

router.get("/", (request, response) => {
  response.send("What are you searching?");
});

router.get("/bestbuy", async (request, response) => {
  const { searchTerm } = request.query;
  const params = {
    apiKey: process.env.API_BESTBUY_KEY,
    format: "json",
    show: "sku,name,longDescription,salePrice,onlineAvailability,image,url",
  };
  console.log("Search Term: ", searchTerm);
  // "stainless steel ovens" -> split -> ['stainless', 'steel', 'ovens'] -> 'search=stainless&search=steel&search=ovens'
  const search = searchTerm
    .split(" ")
    .reduce((acc, term) => (acc += `search=${term}&`), "")
    .slice(0, -1); // Remove extra '&' from end of array link
  const searchURL = `https://api.bestbuy.com/v1/products((${search}))`;

  // Title, Description, Image, Price, Availability, Shipping - isAvailable
  await axios
    .get(searchURL, { params })
    .then((response) => response.data.products)
    .then((products) =>
      products.map((product) => ({
        id: product.sku,
        name: product.name,
        price: product.salePrice,
        isInStock: product.onlineAvailability,
        isShipping: product.onlineAvailability,
        description: product.longDescription,
        link: product.url,
        image: product.image,
      }))
    )
    .then((product) => {
      response.send(product);
    })
    .catch((error) => {
      console.log(error);
      response.status(500).send({ error: "Error getting Best Buy Request" });
    });
});

module.exports = router;
