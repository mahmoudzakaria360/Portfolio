import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
