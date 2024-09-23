import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white"> 
            {/* Flex container for the whole page, min-h-screen ensures it takes up at least full viewport height */}
            
            <main className="flex-grow">
                {/* Main content that grows to take up the available space */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-5xl font-bold text-center mb-4">PLUS QU'UN GROUPE</h1>
                        <p className="text-center text-lg max-w-xl mx-auto">
                            Groupe de danse expérimenté depuis 10 ans, dans tous les domaines les connexions se sont faites à partir de cet art et de la discipline. Ce n'est pas qu'un groupe, chacun a son histoire et s'exprime de sa façon. Découvrez notre groupe.
                        </p>
                    </div>
                </section>

                <section className="flex justify-center py-10">
                    <div className="relative">
                        <img
                            src="/public/icon/Logo.jpg"
                            alt="100&OR Dance Group"
                            className="rounded-lg border-4 border-yellow-500"
                        />
                    </div>
                </section>
            </main>


        </div>
    );
}

export default HomePage;
