import { FaInstagram, FaYoutube } from 'react-icons/fa'; // Importer les icônes

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-3 flex items-center justify-between">
                {/* Section gauche - Réseaux sociaux */}
                <div className="flex items-center space-x-8">
                    {/* Logo Instagram avec React Icons */}
                    <a href="#" className="flex items-center space-x-2 text-gray-800 hover:text-yellow-500">
                        <FaInstagram className="w-6 h-6" /> {/* Icône Instagram */}
                        <span>Instagram</span>
                    </a>

                    {/* Logo YouTube avec React Icons */}
                    <a href="#" className="flex items-center space-x-2 text-gray-800 hover:text-yellow-500">
                        <FaYoutube className="w-6 h-6" /> {/* Icône YouTube */}
                        <span>YouTube</span>
                    </a>
                </div>

                {/* Logo au milieu */}
                <div className="flex-grow flex justify-center">
                    <img src="/img/LogoNav.png" alt="CO" className="w-15" />
                </div>

                {/* Section droite - Drapeaux et Se connecter */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex space-x-2">
                        <img src="/img/FRANCE.png" alt="FR" className="w-12" />
                        <img src="/img/COLOMBIE.png" alt="CO" className="w-12" />
                    </div>
                    <a className="text-gray-800 hover:text-yellow-500" href="#login">Se Connecter</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
