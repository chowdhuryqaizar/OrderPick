import React, {Component} from 'react';
import {useCallback, useState} from 'react';
import {TextField} from "@shopify/polaris";


class TextFields extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             actprice: ''
        }

        this.handleActpriceChange = this.handleActpriceChange.bind(this);
    }

    handleActpriceChange = (event) => {
        this.setState({
            actprice: event.target.value
        })
    }
    

    render() {
    return(
    <input label=" " placeholder="Insert Actual Price" type="number" 
    value={this.state.actprice} 
    onChange={this.handleActpriceChange}/>);
    
  }
}

export default TextFields;
