import React, { RefObject, ForwardedRef } from "react";

interface HomeProps {
  className?: string;
  homeRef: RefObject<HTMLDivElement>;
}

const Home = React.forwardRef<HTMLDivElement, HomeProps>(
  ({ homeRef, ...props }) => {
    return (
      <div
        ref={homeRef}
        className="w-screen h-screen bg-blue-200 flex justify-center items-center"
      >
        <p className="text-2xl text-white">Home</p>
      </div>
    );
  }
);

Home.displayName = "Home";

export default Home;
