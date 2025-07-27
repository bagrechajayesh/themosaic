import React from 'react';

function WhatsAppButton() {
  return (
    <a href="https://wa.me/919999999999" className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 12.23a6.57 6.57 0..." />
      </svg>
    </a>
  );
}

export default WhatsAppButton;