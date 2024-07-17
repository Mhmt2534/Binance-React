import { useEffect, useState } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Label,
  Menu,
  Table,
} from "semantic-ui-react";

import "./App.css";

import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { Coin } from "./Models/Coin";

function App() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    axios.get("https://api.binance.com/api/v3/ticker/24hr").then((response) => {
      const firstFiveData = response.data.slice(0, 25);
      setCoins(firstFiveData);
      console.log(coins);
    });
  }, []);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>symbol</TableHeaderCell>
            <TableHeaderCell>openPrice</TableHeaderCell>
            <TableHeaderCell>lowPrice</TableHeaderCell>
            <TableHeaderCell>highPrice</TableHeaderCell>
            <TableHeaderCell>volume</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {coins.map((coin) => (
            <TableRow key={coin.symbol}>
              <TableCell>{coin.symbol}</TableCell>
              <TableCell>{coin.openPrice}</TableCell>
              <TableCell>{coin.lowPrice}</TableCell>
              <TableCell>{coin.highPrice}</TableCell>
              <TableCell>{coin.closePrice}</TableCell>
              <TableCell>{coin.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default App;
