import React, { useState, useEffect, Fragment } from "react";
import { ContextProvider } from "../../Provider";
import Loading from "../loading/Loading";
import TableBody from "./stocktable-body";

export function StockTable() {
  // ContextProvider.Provider - We are providing the data to the consumer
  // values are shared between the components

  const [stockNames, getStockNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const result = await fetch("https://coinranking1.p.rapidapi.com/coins", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "0169a3b8b9msh1cad84659be24bbp1fb123jsn31248601394a"
      }
    });
    result.json().then((res) => {
      getStockNames(res.data.coins)
    }
    );
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <Loading data-testid="loader" />
      ) : (
        <Fragment>
          <ContextProvider.Provider
            value={{
              stockNames: stockNames
            }}
          >
            <div className="column-50" data-testid="main-table">
              <table className="table">
                <thead>
                  <th>Coin Name</th>
                  <th>Symbol</th>
                  <th>Latest Price</th>
                  <th> Details</th>
                </thead>
                <tbody>
                  <TableBody
                    stockNames={stockNames}
                  />
                </tbody>
              </table>
            </div>
          </ContextProvider.Provider>
        </Fragment>
      )}
    </Fragment>
  );
}
