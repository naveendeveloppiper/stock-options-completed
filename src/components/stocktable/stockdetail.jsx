import React, { useState, useEffect, Fragment } from "react";
import {useParams} from 'react-router';
import { ContextProvider } from "../../Provider";
import Loading from "../loading/Loading";

export default function StockDetail() {
  // ContextProvider.Provider - We are providing the data to the consumer
  // values are shared between the components
  var  { id } = useParams();
  sessionStorage.setItem("detailsId",id);
  //const [stockNames, getStockNames] = useState({});
  //const [detaisId] = useState(id);
  const [quoteDetails, getQuoteDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchData = async () => {
   // console.log(id);
    setIsLoading(true);
    const result = await fetch(`https://coinranking1.p.rapidapi.com/coin/${sessionStorage.getItem("detailsId")}`, {
        "method": "GET",
          "headers": {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
            "x-rapidapi-key": "0169a3b8b9msh1cad84659be24bbp1fb123jsn31248601394a"
        }
        });
    result.json().then((res) => {
      getQuoteDetails(res.data.coin)
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

              quoteDetails
            }}
          >
            <div className="column-50" data-testid="main-table">
              <table className="table">
                <thead>
                  <th>Name | Symbol</th>
                  <th>Price</th>
                  <th>24 Hrs Volume</th>
                  <th>$100</th>
                  <th>$250</th>
                  <th>$5000</th>
                </thead>
                <tbody>
          <td> {quoteDetails.name} | {quoteDetails.symbol}</td>
               <td> ${quoteDetails.price}</td>
               <td> {quoteDetails.volume}</td>
               <td>{Number(quoteDetails.price)/100} coins</td>
               <td>{Number(quoteDetails.price)/250} coins</td>
               <td>{Number(quoteDetails.price)/5000} coins</td>
                </tbody>
              </table>
            </div>

           
          </ContextProvider.Provider>
        </Fragment>
      )}
    </Fragment>
  );
}
