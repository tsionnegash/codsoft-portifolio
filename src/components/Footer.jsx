import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedin, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="s-footer bg-[#181818] bg-opacity-90 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-between mb-12">
          <div className="w-full pr-10 md:w-1/2 lg:w-1/3 mb-8">
            <h3 className="text-lg font-semibold mb-4">About Tsion</h3>
            <p className="text-gray-400">
              Tsion Negash is a dedicated computer science student with a passion for both front-end and back-end development. With expertise in React, JavaScript, and modern web technologies, Tsion is committed to crafting innovative web applications. her goal is to leverage technology to address local and global challenges, continuously expanding their skills to achieve proficiency as a full-stack developer. Driven by a deep interest in solving real-world problems through technology, Tsion aspires to create impactful solutions and contribute meaningfully to the field of web development.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
            <h3 className="text-lg font-semibold mb-4">Site Links</h3>
            <ul className="list-none space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="contact-block mb-4">
              <h6 className="text-lg font-semibold mb-2">Email</h6>
              <a href="mailto:tsionnegash12@gmail.com" className="text-gray-400 hover:text-white">tsionnegash12@gmail.com</a>
            </div>
            <div className="contact-block">
              <h6 className="text-lg font-semibold mb-2">Phone</h6>
              <ul className="contact-list list-none space-y-1 text-gray-400">
                <li><a href="tel:+251946612935" className="hover:text-white">+251946612935</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center space-x-4 mt-12">
          <h6 className="text-lg font-semibold mb-4">Follow On Social</h6>
          <ul className="flex space-x-4">
            <li><a href="https://github.com/tsionnegash" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="text-gray-400 hover:text-white" /></a></li>
            <li><a href="https://www.linkedin.com/in/tsion-negash-7ba70231a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQwronOd1TAOcnsAEUaEhtA%3D%3Dp" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="text-gray-400 hover:text-white" /></a></li>
            <li><a href="https://t.me/@Metsiita" aria-label="Instagram"><FontAwesomeIcon icon={faTelegramPlane} className="text-gray-400 hover:text-white" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
