// import React from 'react';
// import { Brain, Star, TrendingUp, Award, Clock } from 'lucide-react';
// import { Doctor } from '';

// interface AIRecommendationProps {
//   doctors: Doctor[];
//   userPreferences?: {
//     preferredDepartments: string[];
//     searchHistory: string[];
//     ratingPreference: number;
//   };
//   onDoctorSelect: (doctor: Doctor) => void;
// }

// export const AIRecommendation: React.FC<AIRecommendationProps> = ({
//   doctors,
//   userPreferences,
//   onDoctorSelect
// }) => {
//   // AI Recommendation Algorithm
//   const getRecommendedDoctors = (): Doctor[] => {
//     return doctors
//       .map(doctor => {
//         let score = 0;
        
//         // Base rating score (40% weight)
//         score += (doctor.rating / 5) * 40;
        
//         // Review count factor (20% weight)
//         score += Math.min(doctor.reviewCount / 100, 1) * 20;
        
//         // Experience factor (15% weight)
//         score += Math.min(doctor.experience / 20, 1) * 15;
        
//         // Availability factor (10% weight)
//         const isAvailableToday = doctor.nextAvailable !== 'Available Now' ? 
//           new Date(doctor.nextAvailable) <= new Date(Date.now() + 24 * 60 * 60 * 1000) : true;
//         score += isAvailableToday ? 10 : 5;
        
//         // Department preference (15% weight)
//         if (userPreferences?.preferredDepartments.includes(doctor.department)) {
//           score += 15;
//         }
        
//         // Rating preference bonus
//         if (doctor.rating >= (userPreferences?.ratingPreference || 4.5)) {
//           score += 5;
//         }
        
//         return { ...doctor, aiScore: score };
//       })
//       .sort((a, b) => (b.aiScore || 0) - (a.aiScore || 0))
//       .slice(0, 3);
//   };

//   const recommendedDoctors = getRecommendedDoctors();
  
//   const getRecommendationReason = (doctor: Doctor): string => {
//     if (doctor.rating >= 4.8) return "Exceptional patient ratings";
//     if (doctor.experience >= 15) return "Extensive medical experience";
//     if (doctor.reviewCount >= 200) return "Highly reviewed by patients";
//     return "Great overall performance";
//   };

//   return (
//     <div className="bg-gradient-to-br from-emerald-900/20 to-green-800/20 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-8 mb-12">
//       <div className="flex items-center space-x-3 mb-6">
//         <div className="bg-emerald-500/20 p-3 rounded-xl">
//           <Brain className="h-6 w-6 text-emerald-400" />
//         </div>
//         <div>
//           <h3 className="text-2xl font-bold text-white">AI Recommendations</h3>
//           <p className="text-emerald-200">Personalized doctor suggestions based on ratings and preferences</p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {recommendedDoctors.map((doctor, index) => (
//           <div
//             key={doctor.id}
//             className="bg-black/40 backdrop-blur-sm rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
//             onClick={() => onDoctorSelect(doctor)}
//           >
//             <div className="relative p-6">
//               {/* Recommendation Badge */}
//               <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-green-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
//                 <TrendingUp className="h-3 w-3" />
//                 <span>#{index + 1} Pick</span>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="relative">
//                   <img
//                     src={doctor.image}
//                     alt={doctor.name}
//                     className="w-16 h-16 rounded-xl object-cover border-2 border-emerald-500/30"
//                   />
//                   <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-black px-2 py-0.5 rounded-full text-xs font-bold flex items-center space-x-1">
//                     <Star className="h-3 w-3 fill-current" />
//                     <span>{doctor.rating}</span>
//                   </div>
//                 </div>

//                 <div className="flex-1 min-w-0">
//                   <h4 className="text-lg font-bold text-white truncate">{doctor.name}</h4>
//                   <p className="text-emerald-400 text-sm font-medium">{doctor.specialty}</p>
//                   <p className="text-gray-400 text-xs">{doctor.department}</p>
//                 </div>
//               </div>

//               <div className="mt-4 space-y-2">
//                 <div className="flex items-center space-x-2 text-sm text-gray-300">
//                   <Award className="h-4 w-4 text-emerald-400" />
//                   <span>{getRecommendationReason(doctor)}</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-sm text-gray-300">
//                   <Clock className="h-4 w-4 text-emerald-400" />
//                   <span>{doctor.experience} years experience</span>
//                 </div>
//               </div>

//               <div className="mt-4 pt-4 border-t border-emerald-500/20">
//                 <div className="flex items-center justify-between">
//                   <div className="text-xs text-gray-400">
//                     {doctor.reviewCount} reviews
//                   </div>
//                   <div className="text-emerald-400 text-sm font-medium">
//                     ${doctor.consultationFee}
//                   </div>
//                 </div>
//               </div>

//               {/* AI Score Visualization */}
//               <div className="mt-3">
//                 <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
//                   <span>AI Match Score</span>
//                   <span>{Math.round((doctor as any).aiScore || 0)}/100</span>
//                 </div>
//                 <div className="w-full bg-gray-700 rounded-full h-1.5">
//                   <div
//                     className="bg-gradient-to-r from-emerald-500 to-green-400 h-1.5 rounded-full transition-all duration-500"
//                     style={{ width: ${Math.min(((doctor as any).aiScore || 0), 100)}% }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 text-center">
//         <p className="text-sm text-emerald-200/80">
//           Recommendations based on ratings, experience, availability, and your preferences
//         </p>
//       </div>
//     </div>
//   );
// };