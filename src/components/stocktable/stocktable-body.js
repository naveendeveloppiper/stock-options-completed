import React from "react";
import {HashLink as Link} from 'react-router-hash-link';

export default function TableBody(props) {
 

  const getBody = () => {
    const getOnly20 = props.stockNames;
    return getOnly20.map((row, Oidx) => {
      if(["Bitcoin","Tether USD","Bitcoin Cash","Litecoin"].indexOf(row.name) !== -1)
      return (
        <tr
          data-testid={`table-row-${Oidx}`}
          key={Oidx}
        >
          <td key={row.id}>{row.name}</td>
          <td key={row.id}>{row.symbol}</td>
          <td key={row.id}>$ {Number(row.price).toFixed(2)}</td>
          <td key={row.id}>
          <button><Link to={`/details/${row.id}`}>Details Page </Link> </button>
          </td>
        </tr>
      );
    });
  };
  return getBody();
}
