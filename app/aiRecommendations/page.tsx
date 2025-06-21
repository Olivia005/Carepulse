// import DoctorRecommendations, { DoctorRecommendationsHero } from '@/components/DoctorRecommendationsHero'
// import React from 'react'

// const page = () => {
//   return (
//     <main>
//         <div className="min-h-screen bg-gray-900">
//       <DoctorRecommendationsHero/>
      
//       <section id="doctors" className="py-20 bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* AI Recommendations */}
//           <AIRecomme
//             doctors={doctors}
//             userPreferences={userPreferences}
//             onDoctorSelect={handleViewProfile}
//           />

//           {/* Header */}
//           <div className="text-center space-y-4 mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-white">
//               Our Medical Experts
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Discover our team of highly qualified physicians and specialists. Use our AI-powered 
//               recommendation system to find the perfect doctor based on ratings, experience, and specializations.
//             </p>
//           </div>

//           {/* Search and Filters */}
//           <div className="mb-12 space-y-6">
//             {/* Search Bar */}
//             <div className="max-w-2xl mx-auto relative">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search doctors by name, specialty, or department..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full bg-black border border-emerald-500/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-lg"
//                 />
//               </div>
//             </div>

//             {/* Filter Toggle */}
//             <div className="flex justify-center">
//               <button
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="flex items-center space-x-2 bg-black border border-emerald-500/30 px-6 py-3 rounded-lg text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
//               >
//                 <Filter className="h-4 w-4" />
//                 <span>Filters</span>
//                 {(selectedDepartment !== 'All' || ratingFilter > 0) && (
//                   <span className="bg-emerald-500 text-black px-2 py-0.5 rounded-full text-xs font-bold">
//                     {(selectedDepartment !== 'All' ? 1 : 0) + (ratingFilter > 0 ? 1 : 0)}
//                   </span>
//                 )}
//               </button>
//             </div>

//             {/* Filters Panel */}
//             {showFilters && (
//               <div className="bg-black/80 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 space-y-6">
//                 {/* Department Filter */}
//                 <div>
//                   <h3 className="text-lg font-medium text-white mb-4">Department</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {departments.map((dept) => (
//                       <button
//                         key={dept}
//                         onClick={() => setSelectedDepartment(dept)}
//                         className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
//                           selectedDepartment === dept
//                             ? "bg-emerald-500 text-black"
//                             : "bg-gray-800 text-gray-300 border border-emerald-500/30 hover:border-emerald-500/60 hover:text-emerald-400"
//                         }`}
//                       >
//                         {dept}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Rating Filter */}
//                 <div>
//                   <h3 className="text-lg font-medium text-white mb-4">Minimum Rating</h3>
//                   <div className="flex items-center space-x-4">
//                     {[0, 4.0, 4.5, 4.8].map((rating) => (
//                       <button
//                         key={rating}
//                         onClick={() => setRatingFilter(rating)}
//                         className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
//                           ratingFilter === rating
//                             ? "bg-emerald-500 text-black"
//                             : "bg-gray-800 text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400"
//                         }`}
//                       >
//                         <Star className="h-4 w-4 fill-current" />
//                         <span>{rating === 0 ? 'All' : ${rating}+}</span>
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Clear Filters */}
//                 <div className="flex justify-end">
//                   <button
//                     onClick={clearFilters}
//                     className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors duration-200"
//                   >
//                     <X className="h-4 w-4" />
//                     <span>Clear All Filters</span>
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Results Count */}
//           <div className="mb-8 text-center">
//             <p className="text-gray-400">
//               Showing {filteredDoctors.length} of {doctors.length} doctors
//               {searchTerm && ` for "${searchTerm}"`}
//             </p>
//           </div>

//           {/* Doctor Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {filteredDoctors.map((doctor) => (
//               <DoctorCard
//                 key={doctor.id}
//                 doctor={doctor}
//                 onViewProfile={handleViewProfile}
//                 onContactDoctor={handleContactDoctor}
//               />
//             ))}
//           </div>

//           {/* No Results */}
//           {filteredDoctors.length === 0 && (
//             <div className="text-center py-16">
//               <div className="text-gray-400 text-xl mb-6">
//                 No doctors found matching your criteria
//               </div>
//               <button
//                 onClick={clearFilters}
//                 className="bg-emerald-500 text-black px-8 py-3 rounded-lg hover:bg-emerald-400 transition-colors duration-200 font-medium"
//               >
//                 Clear All Filters
//               </button>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//     </main>
//   )
// }

// export default page