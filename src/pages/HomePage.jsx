const HomePage = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <section id="home" className="py-20 text-center">
                <h1 className="text-5xl font-bold mb-4">Bienvenue à DanceStudio</h1>
                <p className="text-xl mb-8">Découvrez la passion de la danse</p>
                <a href="#courses" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-full">
                    Nos Cours
                </a>
            </section>

            <section id="courses" className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">Nos Cours de Danse</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-700 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-yellow-500">Salsa</h3>
                            <p>Apprenez les rythmes endiablés de la salsa cubaine et colombienne.</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-red-500">Hip-Hop</h3>
                            <p>Explorez les mouvements urbains et l'expression corporelle du hip-hop.</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-yellow-500">Ballet</h3>
                            <p>Découvrez l'élégance et la grâce du ballet classique.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">À Propos de Nous</h2>
                    <p className="text-xl mb-8">
                        DanceStudio est votre destination pour apprendre à danser dans une ambiance chaleureuse et professionnelle.
                    </p>
                </div>
            </section>

            <section id="contact" className="py-20 bg-gray-800">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Contactez-nous</h2>
                    <p className="text-xl mb-4">Email: contact@dancestudio.com</p>
                    <p className="text-xl mb-8">Téléphone: 01 23 45 67 89</p>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                        Réserver un Cours
                    </button>
                </div>
            </section>
        </div>
    )
}

export default HomePage