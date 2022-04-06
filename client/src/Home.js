import {useEffect, useState} from 'react'
import axios from 'axios'
// import bluecart from './api/bluecart'
import bestbuy from './api/bestbuy'
import './Styles/results.css'



function Home() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  useEffect(async () => {
    /* const bluecartResults = await bluecart.search('highlighter+pens')
      setResults(bluecartResults) */
    // const bestBuyResults = await bestbuy.search('playstation')
    // setResults(bestBuyResults)
  }, []);

  const handleChange = (event) => setInput(event.target.value);
  const submitSearch = async () => {
    const bestBuyResults = await bestbuy.search(input);
    setResults(bestBuyResults);
    setInput("");
  };

  return (
    <div className="results_container">
      <h1 id="title">Lutum </h1>
      <input onChange={handleChange} value={input} />
      <button onClick={submitSearch}>Search</button>
      {results.map((product) => (
        <a href={product.url} target="_blank">
          <div className="results_item" key={product.id}>
            {/* Title, Description, Image, Price, Availability, Shipping (isAvailable) */}
            <h2>{product.name}</h2>
            <img src={product.image} />
            <h4>{product.description}</h4>
            <h3>${product.price}</h3>
            {/* <div dangerouslySetInnerHTML={{__html: product.description}}/> */}
            <p>
              <strong>In Stock: {product.isInStock ? "Yes" : "No"}</strong>
            </p>
            <p>Shipping Available: {product.isShipping ? "Yes" : "No"}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Home;
