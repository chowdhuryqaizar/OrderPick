import React from 'react';
import './App.css';
import { Card, Page, Button } from "@shopify/polaris";
import Tables from './Tables';
import TextFields from './input';


function App() {
  return (
    <Page title="Order">
      <Card>
        <Tables/>
      </Card>
    </Page>
  );
}

export default App;
