"use client";
import React, { useState } from "react";
import {
  Stethoscope,
  Heart,
  Brain,
  Settings as Lungs,
  Atom as Stomach,
  Bone,
  Eye,
  Thermometer,
  ClipboardList,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle,
  Clock,
  Star,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

interface MedicalTest {
  id: string;
  name: string;
  description: string;
  category: string;
  duration: string;
  price: number;
  preparation?: string;
}

interface SymptomCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  symptoms: string[];
  recommendedTests: string[];
}

const medicalTests: MedicalTest[] = [
  {
    id: "cbc",
    name: "Complete Blood Count (CBC)",
    description:
      "Comprehensive blood analysis to check for infections, anemia, and blood disorders",
    category: "Blood Tests",
    duration: "15 mins",
    price: 45,
    preparation: "No special preparation required",
  },
  {
    id: "lipid",
    name: "Lipid Profile",
    description: "Cholesterol and triglyceride levels assessment",
    category: "Blood Tests",
    duration: "10 mins",
    price: 35,
    preparation: "12-hour fasting required",
  },
  {
    id: "glucose",
    name: "Blood Glucose Test",
    description: "Blood sugar level measurement for diabetes screening",
    category: "Blood Tests",
    duration: "5 mins",
    price: 25,
    preparation: "8-hour fasting for accurate results",
  },
  {
    id: "thyroid",
    name: "Thyroid Function Tests (TFT)",
    description: "TSH, T3, T4 levels to assess thyroid function",
    category: "Hormone Tests",
    duration: "10 mins",
    price: 55,
    preparation: "No special preparation required",
  },
  {
    id: "liver",
    name: "Liver Function Tests (LFT)",
    description: "Assessment of liver enzymes and overall liver health",
    category: "Blood Tests",
    duration: "15 mins",
    price: 40,
    preparation: "No special preparation required",
  },
  {
    id: "kidney",
    name: "Kidney Function Tests (KFT)",
    description: "Creatinine, BUN, and other markers for kidney health",
    category: "Blood Tests",
    duration: "15 mins",
    price: 40,
    preparation: "No special preparation required",
  },
  {
    id: "ecg",
    name: "Electrocardiogram (ECG)",
    description: "Heart rhythm and electrical activity assessment",
    category: "Cardiac Tests",
    duration: "15 mins",
    price: 60,
    preparation: "Avoid caffeine 2 hours before test",
  },
  {
    id: "echo",
    name: "Echocardiogram",
    description: "Ultrasound imaging of the heart structure and function",
    category: "Cardiac Tests",
    duration: "45 mins",
    price: 150,
    preparation: "No special preparation required",
  },
  {
    id: "xray",
    name: "Chest X-Ray",
    description: "Imaging of lungs, heart, and chest cavity",
    category: "Imaging",
    duration: "10 mins",
    price: 50,
    preparation: "Remove jewelry and metal objects",
  },
  {
    id: "ultrasound",
    name: "Abdominal Ultrasound",
    description: "Non-invasive imaging of abdominal organs",
    category: "Imaging",
    duration: "30 mins",
    price: 120,
    preparation: "6-hour fasting required",
  },
  {
    id: "mri",
    name: "MRI Scan",
    description: "Detailed magnetic resonance imaging",
    category: "Imaging",
    duration: "60 mins",
    price: 400,
    preparation: "Remove all metal objects, inform about implants",
  },
  {
    id: "ct",
    name: "CT Scan",
    description: "Cross-sectional imaging using X-rays",
    category: "Imaging",
    duration: "30 mins",
    price: 250,
    preparation: "May require contrast agent",
  },
  {
    id: "urine",
    name: "Urine Analysis",
    description: "Complete urine examination for infections and disorders",
    category: "Laboratory Tests",
    duration: "5 mins",
    price: 20,
    preparation: "First morning urine sample preferred",
  },
  {
    id: "hba1c",
    name: "HbA1c Test",
    description: "3-month average blood sugar level assessment",
    category: "Diabetes Tests",
    duration: "10 mins",
    price: 45,
    preparation: "No fasting required",
  },
  {
    id: "pft",
    name: "Pulmonary Function Test",
    description: "Lung capacity and breathing function assessment",
    category: "Respiratory Tests",
    duration: "30 mins",
    price: 80,
    preparation: "Avoid bronchodilators 4-6 hours before test",
  },
];

const symptomCategories: SymptomCategory[] = [
  {
    id: "cardiac",
    name: "Heart & Cardiovascular",
    icon: <Heart className="w-8 h-8" />,
    symptoms: [
      "Chest pain",
      "Shortness of breath",
      "Palpitations",
      "High blood pressure",
      "Fatigue",
    ],
    recommendedTests: ["ecg", "echo", "lipid", "cbc"],
  },
  {
    id: "respiratory",
    name: "Respiratory System",
    icon: <Lungs className="w-8 h-8" />,
    symptoms: [
      "Cough",
      "Difficulty breathing",
      "Chest congestion",
      "Wheezing",
      "Sputum",
    ],
    recommendedTests: ["xray", "pft", "cbc"],
  },
  {
    id: "digestive",
    name: "Digestive System",
    icon: <Stomach className="w-8 h-8" />,
    symptoms: [
      "Abdominal pain",
      "Nausea",
      "Vomiting",
      "Diarrhea",
      "Loss of appetite",
    ],
    recommendedTests: ["ultrasound", "liver", "cbc", "urine"],
  },
  {
    id: "metabolic",
    name: "Metabolic & Endocrine",
    icon: <Thermometer className="w-8 h-8" />,
    symptoms: [
      "Weight changes",
      "Excessive thirst",
      "Frequent urination",
      "Fatigue",
      "Hair loss",
    ],
    recommendedTests: ["glucose", "thyroid", "hba1c", "cbc"],
  },
  {
    id: "neurological",
    name: "Neurological",
    icon: <Brain className="w-8 h-8" />,
    symptoms: [
      "Headaches",
      "Dizziness",
      "Memory issues",
      "Seizures",
      "Numbness",
    ],
    recommendedTests: ["mri", "ct", "cbc", "glucose"],
  },
  {
    id: "musculoskeletal",
    name: "Bones & Joints",
    icon: <Bone className="w-8 h-8" />,
    symptoms: [
      "Joint pain",
      "Muscle weakness",
      "Stiffness",
      "Swelling",
      "Limited mobility",
    ],
    recommendedTests: ["xray", "mri", "cbc", "urine"],
  },
  {
    id: "general",
    name: "General Health",
    icon: <Stethoscope className="w-8 h-8" />,
    symptoms: [
      "Fever",
      "General weakness",
      "Weight loss",
      "Night sweats",
      "Skin changes",
    ],
    recommendedTests: ["cbc", "urine", "thyroid", "liver", "kidney"],
  },
  {
    id: "preventive",
    name: "Preventive Care",
    icon: <CheckCircle className="w-8 h-8" />,
    symptoms: [
      "Routine checkup",
      "Health screening",
      "Family history concerns",
      "Age-related screening",
    ],
    recommendedTests: ["cbc", "lipid", "glucose", "thyroid", "ecg"],
  },
];

function LabTest() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<
    "symptoms" | "tests" | "booking"
  >("symptoms");
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
  });
  const getRecommendedTests = (categoryId: string): MedicalTest[] => {
    const category = symptomCategories.find((c) => c.id === categoryId);
    if (!category) return [];

    return medicalTests.filter((test) =>
      category.recommendedTests.includes(test.id)
    );
  };

  const toggleTest = (testId: string) => {
    setSelectedTests((prev) =>
      prev.includes(testId)
        ? prev.filter((id) => id !== testId)
        : [...prev, testId]
    );
  };

  const getSelectedTestDetails = () => {
    return medicalTests.filter((test) => selectedTests.includes(test.id));
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-black border-b border-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <Stethoscope className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  CarePulse Medical Center
                </h1>
                <p className="text-sm text-emerald-400">
                  Advanced Medical Services
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-emerald-400">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {[
              {
                step: "symptoms",
                label: "Select Symptoms",
                icon: <ClipboardList className="w-5 h-5" />,
              },
              {
                step: "tests",
                label: "Choose Tests",
                icon: <Thermometer className="w-5 h-5" />,
              },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    currentStep === item.step
                      ? "bg-emerald-500 text-black"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </div>
                {index < 1 && (
                  <ChevronRight className="w-5 h-5 text-gray-600 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Symptom Categories */}
        {currentStep === "symptoms" && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                What brings you here today?
              </h2>
              <p className="text-gray-400 text-lg">
                Select the category that best describes your symptoms or
                concerns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {symptomCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setCurrentStep("tests");
                  }}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-emerald-500 hover:bg-gray-750 group"
                >
                  <div className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {category.name}
                  </h3>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {category.symptoms.slice(0, 3).map((symptom, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></div>
                        {symptom}
                      </li>
                    ))}
                    {category.symptoms.length > 3 && (
                      <li className="text-emerald-400 text-xs">
                        +{category.symptoms.length - 3} more...
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Test Selection */}
        {currentStep === "tests" && selectedCategory && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Recommended Tests
                </h2>
                <p className="text-gray-400">
                  Based on your symptoms, here some recommended diagnostic tests
                </p>
              </div>
              <button
                onClick={() => setCurrentStep("symptoms")}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Back to Symptoms
              </button>
            </div>

            {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> */}
            {/* Test Selection */}
            <div className="lg:col-span-2">
              <div className="grid gap-4">
                {getRecommendedTests(selectedCategory).map((test) => (
                  <div
                    key={test.id}
                    className={`bg-gray-800 border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                      selectedTests.includes(test.id)
                        ? "border-emerald-500 bg-emerald-500/10"
                        : "border-gray-700 hover:border-emerald-500/50"
                    }`}
                    onClick={() => toggleTest(test.id)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">
                        {test.name}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <span className="text-emerald-400 font-bold">
                          ${test.price}
                        </span>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedTests.includes(test.id)
                              ? "border-emerald-500 bg-emerald-500"
                              : "border-gray-500"
                          }`}
                        >
                          {selectedTests.includes(test.id) && (
                            <CheckCircle className="w-4 h-4 text-black" />
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-3">{test.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {test.duration}
                        </span>
                        <span className="text-emerald-400">
                          {test.category}
                        </span>
                      </div>
                    </div>
                    {test.preparation && (
                      <div className="mt-3 p-3 bg-gray-900 rounded-lg">
                        <p className="text-xs text-gray-400">
                          <strong>Preparation:</strong> {test.preparation}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Sidebar */}

            {/* </div> */}
          </div>
        )}

        <div className="mt-8 bg-red-600 border border-red-500 rounded-xl p-6 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="bg-red-500 p-3 rounded-full">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 items-center ">
              <h3 className="text-lg font-semibold text-white mb-2">
                Need Expert Medical Consultation?
              </h3>
              <p className="text-red-100 text-sm mb-4">
                Unsure about which tests to choose? Our certified medical
                professionals are here to help you make the right decision based
                on your specific symptoms and medical history.
              </p>
              <Link
                href="/home"
                className="inline-flex items-center space-x-2 bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-red-50 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <Stethoscope className="w-5 h-5" />
                <span>Click for Professional Help</span>
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-red-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-red-100 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Licensed Medical Doctors</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>24/7 Consultation Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Personalized Test Recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabTest;
