import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { LuMouse } from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa';

const HomePage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    // Données des danseurs avec des images et liens Instagram
    const dancers = [
        { id: 1, name: "Fabian", image: "/img/profil/Fabian.png", instagram: "https://www.instagram.com/break_boy_fabian" },
        { id: 2, name: "Joakim", image: "/img/profil/Joakim.png", instagram: "https://www.instagram.com/joasinaloa" },
        { id: 3, name: "Jawed", image: "/img/profil/Jawed.png", instagram: "https://www.instagram.com/jawedbrh" },
        { id: 4, name: "Mailo", image: "/img/profil/Mailo.png", instagram: "https://www.instagram.com/mailorap" },
        { id: 5, name: "Yann", image: "/img/profil/Yann.png", instagram: "https://www.instagram.com/yamzmusics99" },
        { id: 6, name: "Cesar", image: "/img/profil/Cesar.png", instagram: "https://www.instagram.com/cesarx28_" },
    ];


    return (
        <div className="relative flex flex-col min-h-screen bg-black text-white">
            <main className="flex-grow relative z-10">
                <section className="py-20">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mb-20">
                        {/* Contenu à gauche */}
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h1 className="text-5xl font-bold mb-4">PLUS QU'UN GROUPE</h1>
                            <p className="text-lg max-w-xl">
                                Groupe de danse expérimenté depuis 10 ans, dans tous les domaines les connexions se sont faites à partir de cet art et de la discipline. Ce n'est pas qu'un groupe, chacun a son histoire et s'exprime de sa façon. Découvrez notre groupe.
                            </p>
                        </div>
                        {/* Image à droite */}
                        <div className="mt-10 mb-9 md:w-1/2 border-4 border-yellow-500 rounded-lg ">
                            <img
                                src="/public/img/Groupe.jpeg"
                                alt="Groupe de danse"
                                className="shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Icône de souris pour indiquer le défilement */}
                    <div className="text-center mt-10 mb-20">
                        <LuMouse className="inline-block text-4xl animate-bounce" />
                    </div>

                    {/* Ronds représentant les danseurs */}
                    <div className="flex flex-wrap justify-center gap-8 mb-20">
                        {dancers.map((dancer) => (
                            <div
                                key={dancer.id}
                                className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-500 cursor-pointer hover:border-yellow-600 transition-all duration-300 transform hover:scale-105 group"
                                title={dancer.name}
                            >
                                <img
                                    src={dancer.image}
                                    alt={dancer.name}
                                    className="w-full h-full object-cover"
                                />
                                <a
                                    href={dancer.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <FaInstagram className="text-white text-4xl" />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="container mx-auto px-6 py-20 bg-gray-900">
                        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">À SAVOIR</h2>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            {/* Texte des prérequis */}
                            <div className="md:w-1/2 bg-gray-800 rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <ul className="space-y-6">
                                    <li className="flex flex-col">
                                        <span className="text-white font-semibold text-xl mb-2">Âge :</span>
                                        <span className="bg-gray-700 p-3 rounded-lg text-yellow-400 font-medium">6 ans - 120 ans</span>
                                    </li>
                                    <li className="flex flex-col">
                                        <span className="text-white font-semibold text-xl mb-2">Niveau :</span>
                                        <span className="bg-gray-700 p-3 rounded-lg text-yellow-400 font-medium">Novice - Débutant - Intermédiaire - Avancé</span>
                                    </li>
                                    <li className="flex flex-col">
                                        <span className="text-white font-semibold text-xl mb-2">Équipements :</span>
                                        <span className="bg-gray-700 p-3 rounded-lg text-yellow-400 font-medium">
                                            Pour éviter de vous blesser si vous débutez dans le parcours ou pratiquez un sport qui nécessite de sauter, nous recommandons d'apporter vos protections.
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-8 text-center">
                                    <p className="text-white text-lg mb-4">Merci de votre soutien !</p>
                                    <p className="text-yellow-400 text-lg font-semibold">Veuillez vous connecter pour prendre rendez-vous</p>
                                </div>
                            </div>
                            {/* Image */}
                            <div className="md:w-1/2 border-4 border-yellow-500 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                <img
                                    src="/public/img/Explication.png"
                                    alt="Danseurs en action"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;