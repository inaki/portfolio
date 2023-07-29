import React, { RefObject, ForwardedRef } from "react";

interface ContactProps {
  className?: string;
  contactRef: RefObject<HTMLDivElement>; // Changed HTMLElement to HTMLDivElement
}

const Contact = React.forwardRef<HTMLDivElement, ContactProps>(
  ({ contactRef, ...props }) => {
    return (
      <div
        ref={contactRef}
        className="w-screen h-screen bg-blue-200 flex justify-center items-center"
      >
        <p className="text-2xl text-white">Contact</p>
      </div>
    );
  }
);

export default Contact;
