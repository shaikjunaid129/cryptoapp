import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/home.css';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=' +
          currentPage +
          '&sparkline=false'
      )
      .then((response) => {
        setData(response.data);
        setTotalPages(Math.ceil(response.headers['x-total-count'] / 20));
      })
      .catch((error) => console.log(error));
  }, [currentPage]);

  return (
    <div className="crypto-cards-container">
      {data.map((crypto) => (
        <div className="crypto-card" key={crypto.id}>
          <img className="crypto-logo" src={crypto.image} alt={crypto.name} />
          <div className="crypto-content">
            <h3 className="crypto-name">{crypto.name}</h3>
            <p className="crypto-symbol">{crypto.symbol.toUpperCase()}</p>
            <p className="crypto-price">
              ${crypto.current_price.toLocaleString()}
            </p>
          </div>
        </div>
      ))}

      <div className="pagination-container">
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
