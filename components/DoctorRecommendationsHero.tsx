"use client";
import React from 'react';
import { Users, Award, Star, TrendingUp } from 'lucide-react';

export const DoctorRecommendationsHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-emerald-900/20 to-black py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2310b981%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              AI-Powered Doctor
              <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent block">
                Recommendations
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the best healthcare professionals using our intelligent recommendation system. 
              Find doctors based on ratings, specializations, experience, and patient reviews.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-emerald-500 to-green-400 text-black px-8 py-4 rounded-lg hover:from-emerald-400 hover:to-green-300 transition-all duration-300 font-medium text-lg flex items-center space-x-2 shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105"
            >
              <TrendingUp className="h-5 w-5" />
              <span>Get AI Recommendations</span>
            </button>
            <button className="bg-transparent text-emerald-400 px-8 py-4 rounded-lg border border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-500/60 transition-all duration-300 font-medium text-lg">
              Browse All Doctors
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div className="text-center">
              <div className="bg-emerald-500/20 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500/20 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">4.8</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500/20 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Recommendation Accuracy</div>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500/20 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">AI</div>
              <div className="text-gray-400">Smart Matching</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorRecommendationsHero;