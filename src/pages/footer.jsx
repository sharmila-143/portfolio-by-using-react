import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
     <footer className="bg-green-600 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white">
          © {new Date().getFullYear()} Sharmila's Portfolio. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://github.com/sharmila-143" target="_blank" rel="noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/inkoolu-sharmila-71b0b0279" target="_blank" rel="noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a className="hover:underline"><Link to="/contact">
            Contact</Link>
          </a>
        </div>
      </div>
    </footer>
  );
}
