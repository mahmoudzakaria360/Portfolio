import React from 'react';

export default function Button({ title = 'Send' }) {
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-25">
        {title}
      </button>
    </>
  );
}
