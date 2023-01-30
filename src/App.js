import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);

  const onChange = (event) => setValue(event.target.value);
  const onSelect = (event) => setIndex(event.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select value={index} onChange={onSelect}>
          {coins.map((coin, idx) => (
            <option key={idx} value={idx}>
              {coin.name} ({coin.symbol}) ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <div>
        <label htmlFor="USD">USD </label>
        <input
          id="USD"
          type="number"
          placeholder="Put USD"
          value={value}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="COIN">{loading ? null : coins[index].name} </label>
        <input
          id="COIN"
          type="number"
          value={loading ? "" : value / coins[index].quotes.USD.price}
          readOnly
        />
      </div>
    </div>
  );
}
export default App;
