import React from 'react';
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
     <hr  className='border-2 border-white' />
    <footer className=" text-white text-center py-6 mt-1">
      <h2 className="text-2xl font-bold">🐼 Panda Restaurants</h2>
      <p className="text-md mt-1">best platform for table booking</p>

   
      <div className="flex justify-center space-x-6 mt-4">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/about" className="hover:text-green-400 transition">About</Link>
        <a href="https://pandafiles.vercel.app/files" className="hover:text-yellow-400 transition">Files</a>
        <a href="https://pandafiles.vercel.app/contact" className="hover:text-red-400 transition">Contact</a>
      </div>

   
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
          <Facebook size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
          <Instagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/subramanyam-choda-29238a305/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/subramanyamchoda" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
          <Github size={24} />
        </a>
      </div>

     
      <p className="text-md mt-4">© 2025 Panda Restaurants. All rights reserved.</p>
      <p className="text-md">Developed by <span className="font-semibold text-blue-400">Subramanyam - AIML</span></p>
    </footer>
    </>
  );
};

export default Footer;
