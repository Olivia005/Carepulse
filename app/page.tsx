import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Statboxes from "@/components/Statboxes";
import { Activity, Ambulance, ArrowRight, Baby, Bone, Brain, Clock, Eye, Facebook, Heart, Linkedin, Shield, Stethoscope, Twitter, Users2 } from "lucide-react";
import { Twinkle_Star } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Users } from "node-appwrite";


export default function Landing() {
  return (
    <><Header />
    <main className="min-h-screen bg-black text-white">

      <Link href="https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/06/21/11/20250621114212-13G5Y22B.json" className="fixed top-17 right-6 z-50 p-[2px] rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 animate-border">
        <div className="px-4 py-2 rounded-full h-full w-full bg-black flex items-center gap-2 hover:bg-black/80">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-white font-medium">AI Assistant </span>
        </div>
      </Link>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-green-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-green-500/20 text-green-400 text-sm font-medium px-3 py-1 rounded-full border border-green-500/30">
                <Shield className="w-4 h-4 mr-2" />
                24/7 Emergency Care Available
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                CarePulse
                <span className="text-green-400 block">Medical Center</span>
                Excellence in Healthcare
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Providing compassionate, comprehensive healthcare services to our community for over 50 years. 
                Your health and well-being are our top priority.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/home" className="group bg-green-500 text-black px-8 py-4 rounded-xl hover:bg-green-400 transition-all duration-200 font-semibold text-lg flex items-center justify-center shadow-lg hover:shadow-xl">
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <button className="bg-transparent text-white px-8 py-4 rounded-xl border-2 border-green-500 hover:bg-green-500/10 transition-all duration-200 font-semibold text-lg shadow-sm hover:shadow-md">
                Emergency: (555) 911-HELP
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <Users2 className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 font-medium">50+ Specialists</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 font-medium">24/7 Emergency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 font-medium">JCI Accredited</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hospital Image/Info */}
          <div className="relative">
            <div className="bg-gray-900 rounded-2xl shadow-2xl border border-green-500/20 overflow-hidden transform hover:scale-105 transition-transform duration-300">
              {/* Hospital Info Header */}
              <div className="bg-black/50 px-6 py-4 border-b border-green-500/20">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">Hospital Information</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Hospital Content */}
              <div className="p-6 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                    <div className="text-2xl font-bold text-green-400">Availability</div>
                    <div className="text-sm text-gray-400">of Appointments</div>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                    <div className="text-2xl font-bold text-green-400">15</div>
                    <div className="text-sm text-gray-400">Departments</div>
                  </div>
                </div>

                {/* Services */}
                <div className="bg-gray-800/50 rounded-lg p-4 h-32 flex items-center justify-center border border-green-500/10">
                  <div className="text-gray-400 text-center">
                    <div className="text-green-400 font-semibold mb-2">Our Specialties</div>
                    <div className="text-sm">Cardiology • Neurology • Oncology • Pediatrics</div>
                  </div>
                </div>

                {/* Recent Updates */}
                <div className="space-y-3">
                  <h4 className="font-medium text-white">Hospital Updates</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-400">New MRI facility now open</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-400">Extended visiting hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-400">COVID-19 safety protocols active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium animate-bounce">
              Open 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
      <Statboxes />

      
      <section id="features" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-1 bg-gradient-to-b from-green-900/30 to-black "></div>
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Smart Features for Better Care
          </h2>
          <p className="text-slate-50 mb-7">
            Appropiate Hospital, real-time appointment booking, secure payments
            — all in one seamless experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border-3 border-slate-500 bg-black shadow-sm shadow-green-500/50 rounded-lg transform hover:scale-105 transition-all duration-300  hover:shadow-md hover:shadow-green-500/50"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Our Medical Departments
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              CarePulse Medical Center offers comprehensive healthcare services across multiple specialties,
              ensuring you receive the best possible care for all your medical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((department, index) => (
              <div
                key={index}
                className="group bg-black p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-black">
                  <department.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {department.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {department.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-2xl p-8 sm:p-12 border border-green-500/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Need Medical Attention?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Our experienced medical team is here to provide you with the highest quality care.
                Schedule an appointment or visit our emergency department for immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/home" className="bg-green-500 text-black px-8 py-3 rounded-lg hover:bg-green-400 transition-colors duration-200 font-semibold">
                  Schedule Appointment
                </Link>
                <button className="bg-transparent text-white px-8 py-3 rounded-lg border border-green-500 hover:bg-green-500/10 transition-colors duration-200 font-semibold">
                  Emergency Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section with animations */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-12">
          How It Works
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6 border border-green-500 rounded-lg">
            <div className="text-4xl font-bold text-green-400 mb-4">1</div>
            <h3 className="text-xl font-semibold mb-3">Register/Login</h3>
            <p className="text-gray-300">
              Create your account or login to get started
            </p>
          </div>
          <div className="text-center p-6 border border-green-500 rounded-lg">
            <div className="text-4xl font-bold text-green-400 mb-4">2</div>
            <h3 className="text-xl font-semibold mb-3">Choose Doctor</h3>
            <p className="text-gray-300">
              Select from our expert medical professionals
            </p>
          </div>
          <div className="text-center p-6 border border-green-500 rounded-lg">
            <div className="text-4xl font-bold text-green-400 mb-4">3</div>
            <h3 className="text-xl font-semibold mb-3">Schedule Time</h3>
            <p className="text-gray-300">
              Pick your preferred appointment slot
            </p>
          </div>
          <div className="text-center p-6 border border-green-500 rounded-lg">
            <div className="text-4xl font-bold text-green-400 mb-4">4</div>
            <h3 className="text-xl font-semibold mb-3">Confirm & Pay</h3>
            <p className="text-gray-300">
              Complete payment and receive notifications
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-green-900/30 ">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-green-500 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
      {/* <footer className="bg-green-700 border-t border-green-800 py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4 text-xl">
              CarePulse Hospital
            </h4>
            <p className="text-gray-300">Excellence in Healthcare</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Contact</h4>
            <p className="text-gray-300">contact@carepulse.com</p>
            <p className="text-gray-300">1-800-CARE</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4 text-gray-300">
              <a href="#" className="hover:text-green-400">
                <Twitter />
              </a>
              <a href="#" className="hover:text-green-400">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-green-400">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </main></>
  );
}

const features = [
  {
    title: "24/7 Emergency Care",
    description: "Round-the-clock emergency services with immediate response",
  },
  {
    title: "Online Appointments",
    description: "Easy and quick appointment booking through our platform",
  },
  {
    title: "Expert Doctors",
    description: "Access to highly qualified healthcare professionals",
  },
];

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment through our online portal or by calling our helpline.",
  },
  {
    question: "What insurance do you accept?",
    answer:
      "We accept most major insurance providers. Please contact us for specific details.",
  },
  {
    question: "Are emergency services available?",
    answer: "Yes, our emergency department is open 24/7 for immediate care.",
  },
];

// import Image from 'next/image'
// import Link from 'next/link'

// export default function Landing() {
//     return (
//         <main className="min-h-screen">
//             {/* Hero Section */}
//             <section className="relative h-[90vh] flex items-center justify-center">
//                 <div className="absolute inset-0 z-0">
//                     <Image
//                         src="/hospital-hero.jpg"
//                         alt="Hospital Building"
//                         fill
//                         className="object-cover brightness-50"
//                         priority
//                     />
//                 </div>
//                 <div className="z-10 text-center text-white px-4"></div>
//                     <h1 className="text-5xl font-bold mb-4 text-green-400">Welcome to CarePulse</h1>
//                     <p className="text-xl mb-8">Providing Excellence in Healthcare</p>
//                     <Link
//                         href="/appointments"
//                         className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold"
//                     >
//                         Book Appointment
//                     </Link>
//                 </div>
//             </section>

//             {/* Services Section */}
//             <section className="py-16 px-4 bg-white">
//                 <div className="max-w-6xl mx-auto">
//                     <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {services.map((service, index) => (
//                             <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
//                                 <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
//                                 <p className="text-gray-600">{service.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//
//         </main>
//     )
// }

// const services = [
//     {
//         title: "Emergency Care",
//         description: "24/7 emergency medical services with state-of-the-art facilities."
//     },
//     {
//         title: "Primary Care",
//         description: "Comprehensive primary healthcare services for all age groups."
//     },
//     {
//         title: "Specialized Treatment",
//         description: "Expert care in various medical specialties and treatments."
//     }
// ]

 const departments = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with state-of-the-art cardiac catheterization lab and experienced cardiologists.',
      color: 'green'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Advanced neurological care including stroke treatment, epilepsy management, and brain surgery.',
      color: 'green'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents with dedicated pediatric emergency services.',
      color: 'green'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services including cataract surgery, retinal treatments, and vision correction.',
      color: 'green'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Expert treatment for bone, joint, and muscle conditions with minimally invasive surgical options.',
      color: 'green'
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Comprehensive primary care and management of chronic conditions by board-certified internists.',
      color: 'green'
    },
    {
      icon: Activity,
      title: 'Emergency Medicine',
      description: '24/7 emergency care with trauma center capabilities and rapid response teams.',
      color: 'green'
    },
    {
      icon: Ambulance,
      title: 'Critical Care',
      description: 'Intensive care unit with advanced life support and specialized critical care physicians.',
      color: 'green'
    }
  ];
