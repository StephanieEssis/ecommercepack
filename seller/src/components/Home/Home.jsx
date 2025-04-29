import React from 'react';

const Home = () => {
    return (
        <div className="relative w-full min-h-screen">
            <img
                src="./assets/echar.avif"
                alt="background"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
            />
            <div className="relative z-10 flex items-center justify-center min-h-screen bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold text-white text-center">
                    Bienvenue sur notre application E-shop
                </h1>
            </div>
        </div>
    );
};
export default Home;
