import React from 'react';

export default function Input({ placeholder = 'Your message', type = 'text' }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="border-b w-full mt-2 border-gray-300 rounded-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
