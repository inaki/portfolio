import React, { RefObject, ForwardedRef } from "react";

interface AboutProps {
  className?: string;
  aboutRef: RefObject<HTMLDivElement>; // Changed HTMLElement to HTMLDivElement
}

const About = React.forwardRef<HTMLDivElement, AboutProps>(
  ({ aboutRef, ...props }) => {
    return (
      <div
        ref={aboutRef}
        className="w-screen h-screen bg-blue-200 flex justify-center items-center"
      >
        <p className="text-2xl text-white">About</p>
      </div>
    );
  }
);

About.displayName = "About";

export default About;
