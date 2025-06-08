import React, { useState } from 'react';
import './App.css';
import { Header, Hero, PopularAuthors, NewReleases, TrendingWeek, BrowseByGenre, IndianLanguages, FreeShipping, EditorsPicks, Footer } from './components';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && (
        <>
          <Hero />
          <PopularAuthors />
          <NewReleases />
          <TrendingWeek />
          <BrowseByGenre />
          <IndianLanguages />
          <FreeShipping />
          <EditorsPicks />
        </>
      )}
      
      {activeSection === 'discover' && (
        <div className="min-h-screen pt-20">
          <NewReleases />
          <TrendingWeek />
          <BrowseByGenre />
        </div>
      )}
      
      {activeSection === 'writers' && (
        <div className="min-h-screen pt-20">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">For Writers</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">Silver Package</h2>
                <p className="text-gray-600 mb-4">Perfect for first-time authors</p>
                <div className="text-3xl font-bold mb-6">₹19,990</div>
                <ul className="space-y-2 mb-6">
                  <li>✓ Dedicated Publishing Manager</li>
                  <li>✓ Book Market Research</li>
                  <li>✓ Premium Cover Design</li>
                  <li>✓ Interior Layout Design</li>
                  <li>✓ Distribution Setup</li>
                  <li>✓ One Free Author Copy</li>
                </ul>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                  Choose Silver
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-orange-500">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">Gold Package</h2>
                <p className="text-gray-600 mb-4">Most popular choice</p>
                <div className="text-3xl font-bold mb-6">₹39,990</div>
                <ul className="space-y-2 mb-6">
                  <li>✓ All Silver Package Services</li>
                  <li>✓ Copy Editing (50,000 words)</li>
                  <li>✓ Two Free Author Copies</li>
                  <li>✓ Two Weeks Meta Ads</li>
                  <li>✓ Priority Support</li>
                  <li>✓ Enhanced Distribution</li>
                </ul>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                  Choose Gold
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default App;