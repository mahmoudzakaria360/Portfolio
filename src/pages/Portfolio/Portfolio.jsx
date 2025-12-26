import React from 'react';
import Card from '../../components/Card/Card';

export default function Portfolio() {
  return (
    <div className="flex items-center justify-center flex-wrap gap-4 p-4">
      {Array(6)
        .fill()
        .map((_, index) => (
          <Card key={index} />
        ))}
    </div>
  );
}
