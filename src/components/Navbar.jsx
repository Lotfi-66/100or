const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a className="font-bold text-xl text-gray-800" href="/">DanceStudio</a>
                <div className="hidden md:flex items-center space-x-8">
                    <a className="text-gray-800 hover:text-yellow-500" href="#home">Accueil</a>
                    <a className="text-gray-800 hover:text-yellow-500" href="#courses">Cours</a>
                    <a className="text-gray-800 hover:text-yellow-500" href="#about">À propos</a>
                    <a className="text-gray-800 hover:text-yellow-500" href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar