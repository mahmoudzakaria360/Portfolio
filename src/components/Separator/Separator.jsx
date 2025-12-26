import React from 'react';

export default function Separator({ isDark = false } = {}) {
  const colorClass = isDark ? 'bg-[#2C3E50]' : 'bg-white';
  const lineClassList = `line block h-[4px] w-[80px] ${colorClass}`;
  const starColor = isDark ? 'text-[#2C3E50]' : 'text-white';

  return (
    <div className="separator flex items-center gap-3 ">
      <span className={lineClassList}></span>
      <span className="star-icon">
        <i className={`fa-solid fa-star ${starColor}`}></i>
      </span>
      <span className={lineClassList}></span>
    </div>
  );
}
