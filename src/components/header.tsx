"use client";
import { on } from "events";
import React, { useRef } from "react";

interface HeaderProps {
  onHome: () => void;
  onPortfolio: () => void;
  onAbout: () => void;
  onContact: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onHome,
  onPortfolio,
  onAbout,
  onContact,
}) => {
  return (
    <header className="fixed top-0 p-6 ">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={onHome}
              className="text-gray-700 hover:text-gray-900"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={onPortfolio}
              className="text-gray-700 hover:text-gray-900"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={onAbout}
              className="text-gray-700 hover:text-gray-900"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={onContact}
              className="text-gray-700 hover:text-gray-900"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
