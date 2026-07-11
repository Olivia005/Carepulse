import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Statboxes from "@/components/Statboxes";
import { Activity, Ambulance, ArrowRight, Baby, Bone, Brain, Clock, Eye, Heart, Mail, MapPin, Phone, Shield, Stethoscope, Users2 } from "lucide-react";
import Link from "next/link";


export default function Landing() {
  return (
    <><Header />
    <main className="min-h-screen bg-slate-950 text-white">

      <Link href="https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/06/21/11/20250621114212-13G5Y22B.json" className="fixed top-17 right-6 z-50 p-[2px] rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 animate-border">
        <div className="px-4 py-2 rounded-full h-full w-full bg-black flex items-center gap-2 hover:bg-black/80">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-white font-medium">AI Assistant </span>
        </div>
      </Link>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#0f172a_55%,_#020617_100%)] py-20 sm:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-cyan-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-emerald-500/12 text-emerald-300 text-sm font-medium px-4 py-2 rounded-full border border-emerald-400/20 shadow-lg shadow-emerald-500/10">
                <Shield className="w-4 h-4 mr-2" />
                Trusted Multispecialty Care in Kolkata
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                CarePulse
                <span className="text-emerald-400 block text-4xl sm:text-5xl lg:text-6xl mt-2">Medical Center</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-white leading-relaxed pt-4">
                Compassionate Care, Clinical Excellence
              </p>
              <p className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed">
                Delivering evidence-based treatment, modern diagnostics, and patient-first care across multiple specialties.
                Our team is committed to safe, timely, and personalized healthcare.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-start sm:justify-start">
              <Link href="/home" className="group relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 px-6 py-3 rounded-xl font-semibold text-base flex items-center justify-center hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 overflow-hidden w-fit">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
              <Link href="/wayout" className="group relative text-white px-6 py-3 rounded-xl border-2 border-emerald-500/50 font-semibold text-base flex items-center justify-center transition-all duration-300 hover:border-emerald-400/80 overflow-hidden w-fit">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Find Directions</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 border-t border-emerald-500/20">
              <div className="group flex items-center space-x-2 rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 px-3 py-3 backdrop-blur-sm hover:border-emerald-500/50 hover:from-emerald-500/25 transition-all duration-300">
                <Users2 className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="text-sm text-slate-200 font-medium">50+ Specialists</span>
              </div>
              <div className="group flex items-center space-x-2 rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 px-3 py-3 backdrop-blur-sm hover:border-emerald-500/50 hover:from-emerald-500/25 transition-all duration-300">
                <Clock className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="text-sm text-slate-200 font-medium">24/7 Emergency</span>
              </div>
              <div className="group flex items-center space-x-2 rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 px-3 py-3 backdrop-blur-sm hover:border-emerald-500/50 hover:from-emerald-500/25 transition-all duration-300">
                <Shield className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="text-sm text-slate-200 font-medium">JCI Accredited</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hospital Image/Info */}
          <div className="relative">
            <div className="rounded-[1.75rem] border border-emerald-500/15 bg-slate-900/80 shadow-2xl shadow-black/30 backdrop-blur overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
              {/* Hospital Info Header */}
              <div className="bg-black/40 px-6 py-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">Clinical Overview</h3>
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/10 p-4">
                    <div className="text-2xl font-bold text-emerald-400">24/7</div>
                    <div className="text-sm text-slate-300">Emergency Care</div>
                  </div>
                  <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/10 p-4">
                    <div className="text-2xl font-bold text-emerald-400">15+</div>
                    <div className="text-sm text-slate-300">Departments</div>
                  </div>
                  <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/10 p-4">
                    <div className="text-2xl font-bold text-emerald-400">Fast</div>
                    <div className="text-sm text-slate-300">Response & Triage</div>
                  </div>
                </div>

                {/* Services */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-center min-h-40">
                  <div className="text-center">
                    <div className="text-emerald-400 font-semibold mb-2 text-sm uppercase tracking-[0.18em]">Core Specialties</div>
                    <div className="text-base text-slate-300">Cardiology • Neurology • Orthopedics • Pediatrics</div>
                  </div>
                </div>

                {/* Recent Updates */}
                <div className="space-y-3">
                  <h4 className="font-medium text-white">Clinical Highlights</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 rounded-xl bg-white/5 px-3 py-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Advanced MRI and imaging services available</span>
                    </div>
                    <div className="flex items-center space-x-3 rounded-xl bg-white/5 px-3 py-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Specialist consultations by appointment</span>
                    </div>
                    <div className="flex items-center space-x-3 rounded-xl bg-white/5 px-3 py-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-slate-300">Strict infection-control and patient safety protocols</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-slate-950 px-3 py-1 rounded-full text-sm font-semibold shadow-lg shadow-emerald-500/30 animate-bounce">
              Open 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
      <Statboxes />

      
      <section id="features" className="relative overflow-hidden px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-slate-950 to-slate-950"></div>
        <div className="relative text-center flex flex-col items-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/80 font-semibold mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-3xl">
            Why Patients Choose CarePulse
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mb-6"></div>
          <p className="max-w-2xl text-lg text-slate-300">
            Designed around fast access, specialist care, and a calm patient experience from booking to follow-up.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/7 to-white/3 p-8 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-emerald-500/10 hover:shadow-2xl"
            >
              {/* Badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 ring-1 ring-emerald-400/30 text-emerald-400 group-hover:from-emerald-500/30 group-hover:to-cyan-500/20 transition-all duration-300">
                {feature.icon && <feature.icon className="w-7 h-7" />}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">{feature.description}</p>
              
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/80 font-semibold">
              Specialties
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Clinical Departments & Services
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Comprehensive services delivered by experienced clinicians, supported by modern diagnostics and patient-centered care pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((department, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-emerald-500/15 bg-white/5 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/7"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/20 group-hover:bg-emerald-500 group-hover:text-slate-950">
                  <department.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {department.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {department.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="rounded-[1.75rem] border border-emerald-500/15 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-8 sm:p-12 shadow-2xl shadow-black/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Schedule Care?
              </h3>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Book an appointment, contact our emergency desk, or visit our directions page for the fastest route to the hospital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/home" className="bg-emerald-500 text-slate-950 px-8 py-3 rounded-2xl hover:bg-emerald-400 transition-colors duration-200 font-semibold shadow-lg shadow-emerald-500/20">
                  Schedule Appointment
                </Link>
                <Link href="/wayout" className="bg-transparent text-white px-8 py-3 rounded-2xl border border-emerald-500/50 hover:bg-emerald-500/10 transition-colors duration-200 font-semibold">
                  View Directions
                </Link>
                <button className="bg-red-500/10 text-red-700 px-8 py-3 rounded-2xl border-2 border-red-500/60 hover:border-red-400 hover:bg-red-500/30 transition-all duration-200 font-semibold ">
                  Emergency Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-20 px-4 bg-slate-950">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-400 mb-4">
          Patient Care Journey
        </h2>
        <p className="text-center max-w-2xl mx-auto text-slate-300 mb-12">
          A streamlined process designed to reduce waiting time and support every stage of treatment.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20">
            <div className="text-4xl font-bold text-emerald-400 mb-4">1</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Book Consultation</h3>
            <p className="text-slate-300">
              Choose a department and schedule your visit online or by phone.
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20">
            <div className="text-4xl font-bold text-emerald-400 mb-4">2</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Clinical Assessment</h3>
            <p className="text-slate-300">
              Meet a specialist for diagnosis, tests, and a focused treatment plan.
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20">
            <div className="text-4xl font-bold text-emerald-400 mb-4">3</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Treatment & Care</h3>
            <p className="text-slate-300">
              Receive treatment with coordinated support from our medical team.
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20">
            <div className="text-4xl font-bold text-emerald-400 mb-4">4</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Follow-Up Support</h3>
            <p className="text-slate-300">
              Continue recovery with follow-up visits, reports, and patient guidance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-emerald-950/30">
        <h2 className="text-3xl font-bold text-center text-emerald-400 mb-4">
          Common Patient Questions
        </h2>
        <p className="text-center max-w-2xl mx-auto text-slate-300 mb-12">
          Helpful answers for appointments, emergency care, and everyday hospital visits.
        </p>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold mb-2 text-white">{faq.question}</h3>
              <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/80 font-semibold mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Visiting Information & Support
            </h2>
            <p className="max-w-2xl mx-auto text-slate-300">
              Reach us for appointments, emergency guidance, and location details in central Kolkata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-emerald-500/15 bg-white/5 p-6 shadow-lg shadow-black/20">
              <Phone className="w-6 h-6 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Appointment Desk</h3>
              <p className="text-slate-300">(555) 123-4567</p>
            </div>

            <div className="rounded-2xl border border-emerald-500/15 bg-white/5 p-6 shadow-lg shadow-black/20">
              <Shield className="w-6 h-6 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Emergency Line</h3>
              <p className="text-slate-300">24/7 emergency care available</p>
            </div>

            <div className="rounded-2xl border border-emerald-500/15 bg-white/5 p-6 shadow-lg shadow-black/20">
              <MapPin className="w-6 h-6 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Hospital Address</h3>
              <p className="text-slate-300">1, Shakespeare Sarani, Kolkata, West Bengal 700071</p>
            </div>

            <div className="rounded-2xl border border-emerald-500/15 bg-white/5 p-6 shadow-lg shadow-black/20">
              <Mail className="w-6 h-6 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-slate-300">info@carepulsemedical.com</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/wayout" className="bg-emerald-500 text-slate-950 px-8 py-3 rounded-2xl hover:bg-emerald-400 transition-colors duration-200 font-semibold text-center">
              View Directions
            </Link>
            <Link href="/home" className="bg-transparent text-white px-8 py-3 rounded-2xl border border-white/15 hover:bg-white/5 transition-colors duration-200 font-semibold text-center">
              Book Appointment
            </Link>
          </div>
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
    description: "Round-the-clock emergency services with rapid triage and immediate response protocols.",
    icon: Shield,
  },
  {
    title: "Online Appointments",
    description: "Easy and secure appointment booking through our digital platform with real-time availability.",
    icon: Clock,
  },
  {
    title: "Expert Specialists",
    description: "Access to highly qualified and board-certified healthcare professionals across all departments.",
    icon: Users2,
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
