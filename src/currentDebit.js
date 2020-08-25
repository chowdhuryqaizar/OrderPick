import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "./context";


function Debit() {
  let appContext = useContext(AppContext);
  let [val, setVal] = useState(0);
  
  useEffect(() => {
    setVal(appContext.debit);
  }, [appContext.debit, appContext.seDebit]);
  return (
    <strong>
      <h4>Refund Due: ${val} </h4>{" "}
    </strong>
  );
}

export default Debit;
