import React, { useState } from 'react';
import { FiEye, FiEyeOff, FiX } from 'react-icons/fi'; // Assurez-vous d'importer FiX

const LoginForm = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Nouveaux états pour le formulaire d'inscription
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Tentative de connexion avec:', email, password);
        } else {
            console.log('Tentative d\'inscription avec:', lastname, firstname, birthdate, email, password);
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 text-blue-400 rounded-lg shadow-lg p-8 max-w-md w-full relative">
                {/* Croix pour fermer le formulaire */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                    <FiX className="w-6 h-6" />
                </button>

                <h2 className="text-3xl font-bold text-center mb-6">{isLogin ? 'Connexion' : 'Inscription'}</h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    {!isLogin && (
                        <>
                            {/* Nom */}
                            <div className="mb-4 w-full">
                                <label className="block text-sm font-medium mb-2 text-center" htmlFor="lastname">Nom</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 text-center"
                                    placeholder="Entrez votre nom"
                                    required
                                />
                            </div>

                            {/* Prénom */}
                            <div className="mb-4 w-full">
                                <label className="block text-sm font-medium mb-2 text-center" htmlFor="firstname">Prénom</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 text-center"
                                    placeholder="Entrez votre prénom"
                                    required
                                />
                            </div>

                            {/* Date de naissance */}
                            <div className="mb-4 w-full">
                                <label className="block text-sm font-medium mb-2 text-center" htmlFor="birthdate">Date de naissance</label>
                                <input
                                    type="date"
                                    id="birthdate"
                                    value={birthdate}
                                    onChange={(e) => setBirthdate(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 text-center"
                                    required
                                />
                            </div>
                        </>
                    )}

                    {/* Email */}
                    <div className="mb-4 w-full">
                        <label className="block text-sm font-medium mb-2 text-center" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 text-center"
                            placeholder="Entrez votre email"
                            required
                        />
                    </div>

                    {/* Mot de passe */}
                    <div className="mb-4 w-full relative">
                        <label className="block text-sm font-medium mb-2 text-center" htmlFor="password">Mot de passe</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 text-center"
                            placeholder="Entrez votre mot de passe"
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-10 text-gray-500"
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>

                    {!isLogin && (
                        <div className="mb-4 w-full relative">
                            <label className="block text-sm font-medium mb-2 text-center" htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-yellow-500 text-center"
                                placeholder="Confirmez votre mot de passe"
                                required
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                className="absolute right-3 top-10 text-gray-500"
                            >
                                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                    )}

                    {/* Bouton de soumission */}
                    <div className="text-center w-full">
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white font-bold py-3 rounded-md hover:bg-yellow-600 transition duration-300"
                        >
                            {isLogin ? 'Se connecter' : 'S\'inscrire'}
                        </button>
                    </div>
                </form>

                {/* Bouton pour basculer entre connexion et inscription */}
                <button
                    onClick={toggleForm}
                    className="mt-4 w-full text-sm text-blue-400 hover:text-blue-500"
                >
                    {isLogin ? "Créer un compte" : "Déjà un compte ? Se connecter"}
                </button>
            </div>
        </div>
    );
};

export default LoginForm;