import React, { useState } from 'react';

export default function Card() {
  const [isMouseOver, SetIsMouseOver] = useState(false);
  return (
    <div
      className="w-[30.33%] relative overflow-hidden cursor-pointer"
      onMouseEnter={() => SetIsMouseOver(true)}
      onMouseLeave={() => SetIsMouseOver(false)}
    >
      <img
        src="https://routeegy.github.io/startFramework/assets/images/port2.png"
        alt=""
      />

      <div
        className={`${
          isMouseOver ? 'opacity-100 duration-300 bg-[#1abc9c66]' : 'opacity-0'
        } absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center`}
      >
        <i class="text-white fa-solid fa-plus fa-6x"></i>
      </div>
    </div>
  );
}
