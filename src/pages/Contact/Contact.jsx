import React from 'react';
import Separator from '../../components/Separator/Separator';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
export default function Contact() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10 mb-10  ">
        <h1 className="text-4xl text-[#2c3e50] font-bold">Contact us</h1>
        <Separator isDark={true} />
        <form className="flex flex-col justify-center w-1/2 mt-4 mb-4  gap-4">
          <Input placeholder="Your name" />
          <Input placeholder="Your email" />
          <Input placeholder="Subject" />
          <Input placeholder="Your message" />
          <Button />
        </form>
      </div>
    </>
  );
}
