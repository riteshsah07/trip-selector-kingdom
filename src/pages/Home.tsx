
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-12">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-white">Travel Website</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-white hover:text-blue-200 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/profile/1" className="text-white hover:text-blue-200 transition-colors">Profile</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main>
          <div className="text-center py-20">
            <h2 className="text-5xl font-bold text-white mb-8">Discover Amazing Destinations</h2>
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto">Your next adventure awaits. Explore our curated travel experiences and create memories that last a lifetime.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors">
              Get Started
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
