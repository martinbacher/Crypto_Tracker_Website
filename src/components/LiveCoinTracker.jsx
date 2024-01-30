import React, { useState, useEffect } from "react";
import axios from "axios";

const LiveCoinsTracker = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd", // You can change the currency as needed
              order: "market_cap_desc",
              per_page: 10, // Number of coins to fetch
              page: 1,
              sparkline: false,
            },
          }
        );

        setCoinsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchCoinsData();
  }, []);

  return (
    <div className="mt-3">
      <h2 className="text-white  text-4xl mt-2">Live Coins Tracker</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="flex justify-center items-center mt-">
          {coinsData.map((coin) => (
            <li
              key={coin.id}
              className="flex justify-center p-5 mb-10 hover:border-red-500 hover:text-white bg-blue-500 hover:bg-red-500"
            >
              <strong>{coin.name}</strong>: ${coin.current_price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LiveCoinsTracker;
