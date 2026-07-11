"use client";

import React, { useState } from "react";
import {
  Heart,
  Brain,
  Baby,
  Eye,
  Bone,
  Stethoscope,
  Activity,
  Scissors,
  Star,
  MapPin,
  Clock,
  Phone,
  Calendar,
  Award,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

export const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      department: "Cardiology",
      image: "/assets/images/sarah.jpeg",
      rating: 4.9,
      experience: 15,
      education: ["MD - Harvard Medical School", "Residency - Johns Hopkins"],
      certifications: [
        "Board Certified Cardiologist",
        "Advanced Cardiac Life Support",
      ],
      languages: ["English", "Spanish"],
      availability: "Mon-Fri 8AM-5PM",
      location: "Cardiac Center, Floor 3",
      phone: "(555) 123-4567",
      bio: "Dr. Johnson specializes in interventional cardiology with expertise in cardiac catheterization and stent placement.",
      specializations: [
        "Interventional Cardiology",
        "Heart Disease Prevention",
        "Cardiac Catheterization",
      ],
    },
    {
      id: 2,
      name: "Dr. Leila Cameron",
      specialty: "Neurologist",
      department: "Neurology",
      image: "/assets/images/leila.jpeg",
      rating: 4.8,
      experience: 12,
      education: ["MD - Stanford University", "Fellowship - Mayo Clinic"],
      certifications: ["Board Certified Neurologist", "Stroke Specialist"],
      languages: ["English", "Mandarin"],
      availability: "Mon-Thu 9AM-6PM",
      location: "Neurology Wing, Floor 2",
      phone: "(555) 234-5678",
      bio: "Dr. Chen is a leading expert in stroke treatment and neurological disorders with advanced training in neurocritical care.",
      specializations: [
        "Stroke Treatment",
        "Epilepsy Management",
        "Neurocritical Care",
      ],
    },
    {
      id: 3,
      name: "Dr. Emil Rodriguez",
      specialty: "Pediatrician",
      department: "Pediatrics",
      image: "/assets/images/emil.jpeg",
      rating: 4.9,
      experience: 10,
      education: ["MD - UCLA Medical School", "Pediatric Residency - CHOP"],
      certifications: [
        "Board Certified Pediatrician",
        "Pediatric Advanced Life Support",
      ],
      languages: ["English", "Spanish", "Portuguese"],
      availability: "Mon-Fri 7AM-7PM, Sat 9AM-1PM",
      location: "Pediatric Center, Floor 1",
      phone: "(555) 345-6789",
      bio: "Dr. Rodriguez provides comprehensive pediatric care from newborns to adolescents with a focus on preventive medicine.",
      specializations: [
        "Newborn Care",
        "Adolescent Medicine",
        "Pediatric Immunizations",
      ],
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      department: "Orthopedics",
      image: "/assets/images/james.jpeg",
      rating: 4.7,
      experience: 18,
      education: ["MD - Duke University", "Orthopedic Surgery Residency - HSS"],
      certifications: [
        "Board Certified Orthopedic Surgeon",
        "Sports Medicine Specialist",
      ],
      languages: ["English"],
      availability: "Tue-Fri 8AM-4PM",
      location: "Orthopedic Surgery, Floor 4",
      phone: "(555) 456-7890",
      bio: "Dr. Wilson specializes in joint replacement surgery and sports medicine with minimally invasive techniques.",
      specializations: [
        "Joint Replacement",
        "Sports Medicine",
        "Arthroscopic Surgery",
      ],
    },
    {
      id: 5,
      name: "Dr. ane Powel",
      specialty: "Ophthalmologist",
      department: "Ophthalmology",
      image: "/assets/images/ane.jpeg",
      rating: 4.8,
      experience: 14,
      education: [
        "MD - University of Pennsylvania",
        "Ophthalmology Residency - Wills Eye",
      ],
      certifications: [
        "Board Certified Ophthalmologist",
        "Retinal Surgery Specialist",
      ],
      languages: ["English", "French"],
      availability: "Mon-Wed-Fri 9AM-5PM",
      location: "Eye Center, Floor 2",
      phone: "(555) 567-8901",
      bio: "Dr. Thompson is an expert in retinal diseases and cataract surgery with advanced laser treatment capabilities.",
      specializations: [
        "Cataract Surgery",
        "Retinal Diseases",
        "Laser Eye Surgery",
      ],
    },
    {
      id: 6,
      name: "Dr. Robert Martinez",
      specialty: "Emergency Medicine",
      department: "Emergency",
      image: "/assets/images/robert.jpeg",
      rating: 4.9,
      experience: 11,
      education: [
        "MD - University of Chicago",
        "Emergency Medicine Residency - Northwestern",
      ],
      certifications: [
        "Board Certified Emergency Physician",
        "Advanced Trauma Life Support",
      ],
      languages: ["English", "Spanish"],
      availability: "24/7 Emergency Coverage",
      location: "Emergency Department, Ground Floor",
      phone: "(555) 678-9012",
      bio: "Dr. Martinez leads our emergency department with expertise in trauma care and critical emergency procedures.",
      specializations: ["Trauma Care", "Critical Care", "Emergency Procedures"],
    },
    {
      id: 7,
      name: "Dr. Amanda Foster",
      specialty: "Internal Medicine",
      department: "Internal Medicine",
      image: "/assets/images/amanda.jpeg",
      rating: 4.8,
      experience: 13,
      education: [
        "MD - Washington University",
        "Internal Medicine Residency - Barnes-Jewish",
      ],
      certifications: [
        "Board Certified Internist",
        "Diabetes Management Specialist",
      ],
      languages: ["English"],
      availability: "Mon-Fri 8AM-6PM",
      location: "Internal Medicine, Floor 3",
      phone: "(555) 789-0123",
      bio: "Dr. Foster provides comprehensive primary care with specialization in chronic disease management and preventive care.",
      specializations: [
        "Diabetes Management",
        "Hypertension",
        "Preventive Care",
      ],
    },
    {
      id: 8,
      name: "Dr. David Kim",
      specialty: "General Surgeon",
      department: "Surgery",
      image: "/assets/images/david.jpeg",
      rating: 4.7,
      experience: 16,
      education: [
        "MD - Johns Hopkins",
        "General Surgery Residency - Mass General",
      ],
      certifications: [
        "Board Certified General Surgeon",
        "Laparoscopic Surgery Specialist",
      ],
      languages: ["English", "Korean"],
      availability: "Mon-Thu 7AM-5PM",
      location: "Surgical Suite, Floor 5",
      phone: "(555) 890-1234",
      bio: "Dr. Kim performs advanced laparoscopic and robotic surgeries with a focus on minimally invasive techniques.",
      specializations: [
        "Laparoscopic Surgery",
        "Robotic Surgery",
        "General Surgery",
      ],
    },
  ];

const DoctorsDetails: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const departments: string[] = [
    "All",
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Ophthalmology",
    "Emergency",
    "Internal Medicine",
    "Surgery",
  ];

  const getDepartmentIcon = (department: string): React.ElementType => {
    const icons: { [key: string]: React.ElementType } = {
      Cardiology: Heart,
      Neurology: Brain,
      Pediatrics: Baby,
      Orthopedics: Bone,
      Ophthalmology: Eye,
      Emergency: Activity,
      "Internal Medicine": Stethoscope,
      Surgery: Scissors,
    };
    return icons[department] || Stethoscope;
  };

  const filteredDoctors: Doctor[] = doctors.filter((doctor) => {
    const matchesDepartment =
      selectedDepartment === "All" || doctor.department === selectedDepartment;
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex flex-col items-center space-y-2">
            <Link
              href="/aiRecommendations"
              className="fixed top-17 right-12 z-50 p-[2px] rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 animate-border"
            >
              <div className="px-4 py-2 rounded-full h-full w-full bg-black flex items-center gap-2 hover:bg-black/80">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white font-normal text-sm">Best Fit with AI</span>
              </div>
            </Link>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Our Medical Experts
            </h2>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet our team of highly qualified physicians and specialists
            dedicated to providing exceptional healthcare services with
            compassion and expertise.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12 space-y-6">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black border border-green-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
            />
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedDepartment === dept
                    ? "bg-green-500 text-black"
                    : "bg-black text-gray-300 border border-green-500/30 hover:border-green-500/60 hover:text-green-400"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDoctors.map((doctor) => {
            const Icon = getDepartmentIcon(doctor.department);
            return (
              <div
                key={doctor.id}
                className="bg-black rounded-xl border border-green-500/20 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-black px-2 py-1 rounded-full text-sm font-medium">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span>{doctor.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-green-400 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span>{doctor.department}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-green-400 font-medium">
                      {doctor.specialty}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <GraduationCap className="h-4 w-4 text-green-400" />
                      <span>{doctor.experience} years experience</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Award className="h-4 w-4 text-green-400" />
                      <span>{doctor.education[0]}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-white">
                      Specializations:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {doctor.specializations.slice(0, 2).map((spec, index) => (
                        <span
                          key={index}
                          className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30"
                        >
                          {spec}
                        </span>
                      ))}
                      {doctor.specializations.length > 2 && (
                        <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded-full">
                          +{doctor.specializations.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-green-500/20">
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <MapPin className="h-4 w-4 text-green-400" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4 text-green-400" />
                      <span>{doctor.availability}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Link
                      href="/home"
                      className="flex-1 bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-colors duration-200 font-medium text-sm flex items-center justify-center space-x-2"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Book Appointment</span>
                    </Link>
                    <button className="bg-transparent text-green-400 px-4 py-2 rounded-lg border border-green-500/30 hover:bg-green-500/10 transition-colors duration-200 font-medium text-sm">
                      <Phone className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">
              No doctors found matching your criteria
            </div>
            <button
              onClick={() => {
                setSelectedDepartment("All");
                setSearchTerm("");
              }}
              className="bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400 transition-colors duration-200 font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorsDetails;
