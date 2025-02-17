import React from "react";
import Header from "../components/Header";
import Box from "../components/Box";
import Footer from "../components/Footer";
import PortfolioCartBig from "../components/portfolio_cart_big";
import PageBox from "../components/PageBox";
import portfolioData from "../../public/portfolio.json"; // Import the JSON data

export default function Portfolio() {
  return (
    <div className="min-h-screen h-screen flex flex-col p-4">
      <Header />
      <main className="mt-2 flex-grow">
        <PageBox>
          <h2 className="text-gray-400 text-lg p-5">
            {portfolioData.projects.length} projects
          </h2>
          {/* Use flexbox to align the items horizontally */}
          <div
            className="flex flex-wrap justify-around gap-10 overflow-y-auto"
            style={{ maxHeight: "70vh" }}
          >
            {portfolioData.projects.map((project, index) => (
              <PortfolioCartBig
                key={index}
                url={project.imageUrl}
                title={project.title}
                tags={project.tags}
                background={project.imageUrl}
                content={
                  <div dangerouslySetInnerHTML={{ __html: project.text }} />
                }
              />
            ))}
          </div>
        </PageBox>
      </main>
      <Footer />
    </div>
  );
}
