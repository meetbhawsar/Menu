/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

// App.js
import React, { useState } from 'react';
/* import menuData from './menuData';
import QRCodeGenerator from './QrCodeGenerator';
import QRCodeScanner from './QrCodeScanner'; */
import Table from './Tables/table';

const App = () => {
/*   const [selectedItem, setSelectedItem] = useState(null);

  const handleItemScan = (item) => {
    setSelectedItem(item);
  }; */

  return (
    <div>
      <h1>Cafe Menu QR Code Scanner</h1>
      {/* <QRCodeScanner menuData={menuData} onItemScan={handleItemScan} />
      {selectedItem && (
        <div>
          <h2>Selected Item:</h2>
          <p>Name: {selectedItem.name}</p>
          <p>Price: ${selectedItem.price}</p>
        </div>
      )}
      <QRCodeGenerator menuData={menuData} /> */}
      <Table/>
    </div>
  );
};

export default App;


