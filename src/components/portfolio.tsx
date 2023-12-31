import React, { RefObject } from "react";

interface PortfolioProps {
  className?: string;
  portfolioRef: RefObject<HTMLDivElement>;
}

const Portfolio = React.forwardRef<HTMLDivElement, PortfolioProps>(
  ({ portfolioRef, ...props }) => {
    return (
      <div
        ref={portfolioRef}
        className="w-screen h-screen bg-blue-200 flex justify-center items-center"
      >
        <p className="text-2xl text-white">Portfolio</p>
      </div>
    );
  }
);

Portfolio.displayName = "Portfolio";

export default Portfolio;
