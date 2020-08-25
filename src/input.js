import React, { useContext } from "react";
import { useCallback, useState, useEffect } from "react";
import { TextField } from "@shopify/polaris";
import { AppContext } from "./context";
function TextFields(props) {
  let appContext = useContext(AppContext);
  let [val, setVal] = useState(null);
  let [pval, setpVal] = useState(null);

  const handleActpriceChange = (event) => {
    setVal(event.target.value);
  };
  const Compute = () => {
    if (val && pval !== val) {
      let debt = 0;
      if (pval) {
        //if some val already exists remove its debt
        let nval = parseFloat(pval);
        const diff = Math.abs(props.price - nval);
        if (pval > props.price) {
          debt = diff;
        } else if (pval < props.price) {
          debt = -1 * diff;
        }
      }
      let nval = parseFloat(val);
      const diff = Math.abs(props.price - nval);
      if (val > props.price) {
        appContext.setDebit(appContext.debit - diff + debt);
      } else if (val < props.price) {
        appContext.setDebit(appContext.debit + diff + debt);
      } else {
        appContext.setDebit(appContext.debit + debt);
      }
      setpVal(val);
    } else {
      //if I clear out a value
      if (pval && pval !== val) {
        let nval = parseFloat(pval);
        const diff = Math.abs(props.price - nval);
        if (pval > props.price) {
          appContext.setDebit(appContext.debit + diff);
        } else if (pval < props.price) {
          appContext.setDebit(appContext.debit - diff);
        }
        setpVal(null);
      }
    }
  };
  return (
    <input
      label=" "
      placeholder=""
      type="number"
      value={val}
      onChange={handleActpriceChange}
      onBlur={Compute}
    />
  );
}

export default TextFields;
