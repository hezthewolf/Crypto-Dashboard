import ExchangeRate from "./Exchange";
import { useState } from "react";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);

  const convert = () => {

    var options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        to_currency: chosenSecondaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        from_currency: chosenPrimaryCurrency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": "8c846c3737msh11d794bb5d93094p1bf12ejsnd6983ac89227",
      },
    };

    axios.request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency: </td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  name="currency-option-1"
                  value={chosenPrimaryCurrency}
                  className="currency-options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <td>Secondary Currency: </td>
              <td>
                <input type="number" name="currency-amount-2" value={""} />
              </td>
              <td>
                <select
                  name="currency-option-2"
                  value={chosenSecondaryCurrency}
                  className="currency-options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button id="convert-btn" onClick={convert}>
          Convert
        </button>
      </div>
      <ExchangeRate />
    </div>
  );
};

export default CurrencyConverter;
