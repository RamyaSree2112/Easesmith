// src/components/ThankYouPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ThankYouPage() {
  const { productName } = useParams();

  return (
    <div>
      <h1>Thank you for your interest in {productName}!</h1>
    </div>
  );
}

export default ThankYouPage;
