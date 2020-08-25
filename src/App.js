import React from "react";
import "./App.css";
import { Card, Page, Button } from "@shopify/polaris";
import Tables from "./Tables";
import TextFields from "./input";
import { useMemo, useContext, useState } from "react";
import { AppContext } from "./context";
import input from "./data";
import Refund from "./currentDebit";


function App() {
  let arrRequired = [];
  input.line_items.forEach((element) =>
    arrRequired.push([element.title, element.price, element.quantity])
  );
  var refund = arrRequired.pop();
  var refundInit = refund[1];
  const [debit, setDebit] = useState(parseFloat(refundInit));
  const appContext = useMemo(
    () => ({
      debit,
      setDebit
    }),
    [debit]
  );
  return (
    <AppContext.Provider value={appContext}>
      <Page title="Order">
        <Card>
          <Tables />
        </Card>
        <Refund />
      </Page>
    </AppContext.Provider>
  );
}

export default App;
