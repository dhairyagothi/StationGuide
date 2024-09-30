

import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav role="navigation">
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={isOpen}
                        onChange={toggleMenu}
                        id="menuToggle"
                        className={`absolute ${isOpen ? 'top-0 left-[70vw]' : 'top-0 left-0'}`}
                    />
                    <label htmlFor="menuToggle" className="block cursor-pointer">
                        <div className={`w-8 h-1 bg-black my-1 transition-transform ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-8 h-1 bg-black my-1 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-8 h-1 bg-black my-1 transition-transform ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
                    </label>
                    <div className="absolute top-0 left-0 w-8 h-8 cursor-pointer" onClick={toggleMenu}></div>
                    <ul className={`absolute top-0 left-0 w-[70vw] h-[100vh] bg-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        {['Home', 'About', 'Info', 'Contact'].map((item, index) => (
                            <a href="#" key={index} className="block p-4 border-b border-gray-200">
                                <li>{item}</li>
                            </a>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );

};

export default HamburgerMenu;
