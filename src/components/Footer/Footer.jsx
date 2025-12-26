import React from 'react';

export default function Footer() {
  const LocationMarkup = (
    <div className="footer-location">
      <h4 className="font-bold text-[30px] pb-3 text-center"> Location</h4>
      <p className="text-white  text-center">
        2215 John Daniel Drive Clark, <br /> MO 65243
      </p>
    </div>
  );
  const ContactMarkup = (
    <div className="footer-contact text-center">
      <h4 className=" font-bold text-[30px] pb-3">Around the web</h4>
      <div className="icons flex items-center justify-center gap-2">
        <i className="fa-brands fa-facebook mx-1 icon"></i>
        <i className="fa-brands fa-twitter mx-1 icon"></i>
        <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
        <i className="fa-solid fa-globe mx-1 icon"></i>
      </div>
    </div>
  );
  const AboutFreeLance = (
    <div className="footer-social-media text-center">
      <h4 className="font-bold text-[30px] pb-3">About freelance</h4>
      <p>
        ABOUT FREELANCER Freelance is a free to use <br />, licensed Bootstrap
        theme created by Route
      </p>
    </div>
  );
  return (
    <>
      <footer className="footer bg-[#2C3E50] text-white">
        <div className=" md:flex-row flex flex-col bg-[#2C3E50] justify-around mb-4 p-20 ">
          {LocationMarkup}
          {ContactMarkup}
          {AboutFreeLance}
        </div>
        <div className="text-center font-bold bg-[#1a252f] p-4 text-white">
          <p>© 2024 My Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
