"use client";
import React, { useState } from 'react';
import DoctorRecommendationsHero from '@/components/DoctorRecommendationsHero';
import { AIRecommendation } from '@/components/DoctorAIRecommendations';
import { doctors } from '@/components/DoctorsDetails';
import { Sparkles, Star, ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function AIRecommendationsPage() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [minRating, setMinRating] = useState<number>(4.5);
  const [minExperience, setMinExperience] = useState<number>(10);
  
  // Custom modal or detailed view for selected doctor
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  // Departments list for filter selection
  const departments = ["All", "Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Ophthalmology", "Surgery", "Internal Medicine"];

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
  };

  // Construct preferences for the algorithm
  const userPreferences = {
    preferredDepartments: selectedDept === "All" ? departments.filter(d => d !== "All") : [selectedDept],
    searchHistory: [],
    ratingPreference: minRating
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white pb-20">
      {/* Back to Doctors list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/doctors" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Doctors list</span>
        </Link>
      </div>

      <DoctorRecommendationsHero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Interactive Recommendation Controls */}
        <div className="bg-black/60 border border-emerald-500/20 rounded-2xl p-6 mb-12 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
            <h2 className="text-xl font-semibold text-white">Fine-tune AI Matcher</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Preferred Specialty/Department */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-emerald-200">Department / Specialty</label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="bg-gray-800 border border-emerald-500/20 text-white rounded-lg p-3 outline-none focus:border-emerald-500 transition"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* Minimum Rating */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-emerald-200">Target Doctor Rating</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="4.0"
                  max="5.0"
                  step="0.1"
                  value={minRating}
                  onChange={(e) => setMinRating(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500"
                />
                <span className="text-emerald-400 font-bold w-12 text-center">{minRating} ★</span>
              </div>
            </div>

            {/* Minimum Experience */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-emerald-200">Min. Experience (Years)</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="1"
                  value={minExperience}
                  onChange={(e) => setMinExperience(parseInt(e.target.value))}
                  className="w-full accent-emerald-500"
                />
                <span className="text-emerald-400 font-bold w-12 text-center">{minExperience}+ Yrs</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommendations Section */}
        <AIRecommendation
          doctors={doctors.filter(doc => doc.experience >= minExperience && (selectedDept === "All" || doc.department === selectedDept))}
          userPreferences={userPreferences}
          onDoctorSelect={handleDoctorSelect}
        />

        {/* Selected Doctor Detail Modal/Card (if selected) */}
        {selectedDoctor && (
          <div className="mt-8 bg-gradient-to-r from-emerald-950/40 via-black to-emerald-950/40 border border-emerald-500/30 rounded-2xl p-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-32 h-32 rounded-2xl object-cover border-4 border-emerald-500/40"
              />
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white">{selectedDoctor.name}</h3>
                    <p className="text-emerald-400 font-semibold">{selectedDoctor.specialty} • {selectedDoctor.department}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4 fill-emerald-400" />
                      {selectedDoctor.rating} Rating
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-bold">
                      {selectedDoctor.experience} Yrs Exp
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">{selectedDoctor.bio}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-emerald-500/20">
                  <div>
                    <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wider mb-2">Education & Training</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                      {selectedDoctor.education.map((edu, idx) => (
                        <li key={idx}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wider mb-2">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoctor.specializations.map((spec, idx) => (
                        <span key={idx} className="bg-gray-800 text-emerald-300 px-3 py-1 rounded-md text-xs border border-emerald-500/10">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <Link
                    href={`/patients/register`} 
                    className="bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-400 hover:to-green-300 text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition duration-200"
                  >
                    <span>Book Appointment</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}