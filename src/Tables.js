import React, { Component } from "react";
import { TextField, DataTable, Button } from "@shopify/polaris";
import input from "./data.js";
import { useCallback, useState } from "react";
import { render } from "@testing-library/react";
import TextFields from "./input";

function numInput(n, p) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(<TextFields price={p} />);
    arr.push(<br />);
  }
  return arr;
}

let arrRequired = [];
input.line_items.forEach((element) =>
  arrRequired.push([
    element.title,
    element.price,
    element.quantity,
    numInput(element.quantity, element.price)
  ])
);
var refund = arrRequired.pop();
var refundInit = refund[1];
//arrRequired.push(["Refund from $" + refund[1], "", "", "$" + refundInit]);
// console.log(arrRequired)

class Tables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actual_prices: []
    };
  }

  handleActpriceChange = (event) => {
    this.setState((prevState) => ({
      actual_prices: [...prevState.actual_prices, event.target.value]
    }));
  };

  render() {
    return (
      <>
        <DataTable
          columnContentTypes={["text", "numeric", "numeric", "text"]}
          headings={["Name", "Price", "Quantity", "Actual Price"]}
          rows={arrRequired}
        />
      </>
    );
  }
}

export default Tables;
