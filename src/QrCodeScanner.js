// QRCodeScanner.js
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRCodeScanner = ({ menuData, onItemScan }) => {
  const [scannedItem, setScannedItem] = useState(null);

  const handleScan = (data) => {
    if (data) {
      // Extract item details from the scanned QR code data
      const details = data.split(',').reduce((acc, pair) => {
        const [key, value] = pair.split(':');
        acc[key] = value;
        return acc;
      }, {});

      // Find the item in the menuData using the extracted item ID
      const matchedItem = menuData.find((item) => item.id === parseInt(details.ItemID, 10));

      if (matchedItem) {
        setScannedItem(matchedItem);
        onItemScan(matchedItem);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader delay={300} onError={handleError} onScan={handleScan} />
      {scannedItem && (
        <div>
          <h3>Scanned Item:</h3>
          <p>Name: {scannedItem.name}</p>
          <p>Price: ${scannedItem.price}</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeScanner;
