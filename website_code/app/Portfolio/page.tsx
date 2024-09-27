import React from 'react';
import Header from '../components/Header';
import Box from '../components/Box';
import Footer from '../components/Footer';
import PortfolioCartBig from '../components/portfolio_cart_big';
import PageBox from '../components/PageBox';

export default function Portfolio() {
  return (
    <div className="min-h-screen h-screen flex flex-col p-4">
      <Header />
      <main className="mt-2 flex-grow">
        <PageBox>
          <h2 className="text-gray-400 text-lg p-5">6 projects</h2>
          {/* Use flexbox to align the items horizontally */}
          <div className="flex flex-wrap justify-around gap-10 overflow-y-auto" style={{ maxHeight: '70vh' }}>
            <PortfolioCartBig url="#Project1" content={<div><h1>Project 1 Details</h1><p>Some details about project 1...</p></div>} />
            <PortfolioCartBig url="#Project2" content={<div><h1>Project 2 Details</h1><p>Some details about project 2...</p></div>} />
            <PortfolioCartBig url="#Project3" content={<div><h1>Project 3 Details</h1><p>Some details about project 3...</p></div>} />
            <PortfolioCartBig url="#Project4" content={<div><h1>Project 4 Details</h1><p>Some details about project 4...</p></div>} />
            <PortfolioCartBig url="#Project5" content={<div><h1>Project 5 Details</h1><p>Some details about project 5...</p></div>} />
            <PortfolioCartBig url="#Project6" content={<div><h1>Project 6 Details</h1><p>Some details about project 6...</p></div>} />
          </div>
        </PageBox>
      </main>
      <Footer />
    </div>
  );
}
