import React, { useState } from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import LoginForm from './LoginForm';

const Navbar = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <>
            <nav className="bg-white shadow-md relative z-50">
                <div className="container mx-auto px-6 py-3 flex items-center justify-between">
                    {/* Section gauche - Réseaux sociaux */}
                    <div className="flex items-center space-x-8">
                        {/* Logo Instagram avec React Icons */}
                        <a 
                            href="https://www.instagram.com/100_et_or?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                            className="flex items-center space-x-2 text-gray-800 hover:text-yellow-500 group"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="w-6 h-6 group-hover:text-yellow-500" />
                            <span>Instagram</span>
                        </a>

                        {/* Logo YouTube avec React Icons */}
                        <a 
                            href="https://youtube.com/@breakboyfabian6050?si=7rbIRUIJSSvBW1F-" 
                            className="flex items-center space-x-2 text-gray-800 hover:text-yellow-500 group"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube className="w-6 h-6 group-hover:text-yellow-500" />
                            <span>YouTube</span>
                        </a>
                    </div>

                    {/* Logo au milieu */}
                    <div className="flex-grow flex justify-center">
                        <img src="/img/LogoNav.png" alt="LogoNav" className="w-15" />
                    </div>

                    {/* Section droite - Drapeaux et Se connecter */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-2">
                            <img src="/img/flag/FRANCE.png" alt="FR" className="w-12 border-4 border-black" />
                            <img src="/img/X.png" alt="X" className="w-12" />
                            <img src="/img/flag/COLOMBIE.png" alt="CO" className="w-12 border-4 border-black" />
                        </div>
                        <button 
                            className="text-gray-800 hover:text-yellow-500" 
                            onClick={toggleLoginForm}
                        >
                            Se Connecter
                        </button>
                    </div>
                </div>
            </nav>
            {showLoginForm && <LoginForm onClose={toggleLoginForm} />}
        </>
    );
}

export default Navbar;