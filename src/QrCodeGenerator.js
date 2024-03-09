// QRCodeGenerator.js
import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ menuData }) => {
  return (
    <div>
      {menuData.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <QRCode value={`ItemID:${item.id},Name:${item.name},Price:${item.price}`} />
        </div>
      ))}
    </div>
  );
};

export default QRCodeGenerator;
