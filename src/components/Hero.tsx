import React from 'react';
import { Search, MessageSquare, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Find Your Dream Home</span>
                <span className="block text-indigo-600">in Japan</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Your gateway to Japanese real estate. Browse properties, connect with agents, and make informed decisions with our AI-powered platform.
              </p>
              
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#search" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Start Searching
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Contact Agent
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="flex items-center space-x-4">
                <Search className="h-8 w-8 text-indigo-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Smart Search</h3>
                  <p className="mt-1 text-gray-500">AI-powered property matching</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MessageSquare className="h-8 w-8 text-indigo-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Real-time Chat</h3>
                  <p className="mt-1 text-gray-500">Instant translation support</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Building2 className="h-8 w-8 text-indigo-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Virtual Tours</h3>
                  <p className="mt-1 text-gray-500">Immersive property viewing</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Modern Japanese architecture"
        />
      </div>
    </div>
  );
}