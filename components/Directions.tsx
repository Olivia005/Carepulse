import { Bus, Car, Clock, MapPin, Navigation, Phone, Scale, Scaling, Train } from 'lucide-react'
import React from 'react'

const Directions = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),_transparent_28%),linear-gradient(to_bottom,_#020617,_#0f172a_55%,_#020617)] text-white lg:grid lg:grid-cols-[0.95fr_1.35fr]">
      {/* Left Sidebar */}
      <div className="border-b border-emerald-500/10 bg-slate-950/70 px-5 py-8 backdrop-blur xl:px-10 lg:border-b-0 lg:border-r lg:border-emerald-500/10">
        <div className="mx-auto max-w-2xl lg:max-w-xl">
          {/* Hospital Header */}
          <div className="mb-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-emerald-500/15 p-3 ring-1 ring-emerald-400/30">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
                  Location & Visitor Guide
                </p>
                <h1 className="text-2xl font-bold text-white lg:text-3xl">CarePulse Medical Center</h1>
                <p className="text-emerald-200">Advanced Healthcare Center</p>
              </div>
            </div>
            
            <div className="rounded-2xl border border-emerald-500/15 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(16,185,129,0.04),0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Hospital Address</h2>
              <p className="text-gray-100 leading-relaxed">
                1, Shakespeare Sarani<br />
                Kolkata, West Bengal<br />
                700071
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8 rounded-2xl border border-emerald-500/15 bg-slate-900/60 p-5 shadow-lg shadow-black/20 backdrop-blur-sm">
            <h3 className="mb-4 flex items-center text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              <Phone className="w-5 h-5 mr-2" />
              Contact Information
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center rounded-xl bg-white/5 px-4 py-3">
                <Phone className="w-4 h-4 mr-3 text-emerald-400" />
                <span className="text-gray-100">(555) 123-4567</span>
              </div>
              <div className="flex items-center rounded-xl bg-white/5 px-4 py-3">
                <Clock className="w-4 h-4 mr-3 text-emerald-400" />
                <span className="text-gray-100">24/7 Emergency Services</span>
              </div>
            </div>
          </div>

          {/* Nearest Transit Points */}
          <div className="mb-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Nearest Transit Points</h3>
            
            <div className="space-y-4">
              {/* Bus Station */}
              <div className="rounded-2xl border border-emerald-500/15 bg-white/5 p-5 shadow-lg shadow-black/15 transition-all hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-white/7">
                <div className="mb-2 flex items-center">
                  <Bus className="w-5 h-5 mr-3 text-emerald-400" />
                  <h4 className="font-semibold text-white">Esplanade Bus Terminal</h4>
                </div>
                <p className="text-gray-200 text-sm mb-2">Distance: 1.4 km (about 8-minute drive / 18-minute walk)</p>
                <p className="text-gray-300 text-sm">Take a cab or walk toward Park Street, then continue to Shakespeare Sarani.</p>
              </div>

              {/* Train Station */}
              <div className="rounded-2xl border border-emerald-500/15 bg-white/5 p-5 shadow-lg shadow-black/15 transition-all hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-white/7">
                <div className="mb-2 flex items-center">
                  <Train className="w-5 h-5 mr-3 text-emerald-400" />
                  <h4 className="font-semibold text-white">Maidan Metro Station</h4>
                </div>
                <p className="text-gray-200 text-sm mb-2">Distance: 1.2 km (about 5-minute drive / 15-minute walk)</p>
                <p className="text-gray-300 text-sm">Use the Park Street exit and head east toward Shakespeare Sarani.</p>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="mb-8">
            <h3 className="mb-4 flex items-center text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              <Navigation className="w-5 h-5 mr-2" />
              How to Reach Us
            </h3>
            
            <div className="space-y-6">
              {/* From Bus Terminal */}
              <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/70 to-slate-900/80 p-5 shadow-lg shadow-black/20">
                <h4 className="mb-3 flex items-center font-semibold text-emerald-300">
                  <Bus className="w-4 h-4 mr-2" />
                  From Esplanade Bus Terminal
                </h4>
                <ol className="space-y-3 text-sm text-gray-200">
                  <li className="flex items-start">
                    <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">1</span>
                    Exit the terminal toward Park Street / Jawaharlal Nehru Road
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">2</span>
                    Continue toward Park Street and turn onto Shakespeare Sarani
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">3</span>
                    The medical center will be on your left side after a short walk
                  </li>
                </ol>
                <div className="mt-4 flex items-center text-sm text-emerald-200">
                  <Scale className="w-4 h-4 mr-1" />
                  18 minutes walk
                </div>
              </div>

              {/* From Train Station */}
              <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/70 to-slate-900/80 p-5 shadow-lg shadow-black/20">
                <h4 className="mb-3 flex items-center font-semibold text-emerald-300">
                  <Train className="w-4 h-4 mr-2" />
                  From Maidan Metro Station
                </h4>
                <ol className="space-y-3 text-sm text-gray-200">
                  <li className="flex items-start">
                    <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">1</span>
                    Take the Park Street exit from the station
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">2</span>
                    Walk east along Park Street toward Shakespeare Sarani
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">3</span>
                    Continue straight to reach 1, Shakespeare Sarani
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">4</span>
                    The hospital entrance will be on the main road
                  </li>
                </ol>
                <div className="mt-4 flex items-center text-sm text-emerald-200">
                  <Scaling className="w-4 h-4 mr-1" />
                  15 minutes walk
                </div>
              </div>

              {/* By Car */}
              <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/70 to-slate-900/80 p-5 shadow-lg shadow-black/20">
                <h4 className="mb-3 flex items-center font-semibold text-emerald-300">
                  <Car className="w-4 h-4 mr-2" />
                  By Car
                </h4>
                <div className="space-y-2 text-sm text-gray-200">
                  <p>• Valet parking available at the main entrance</p>
                  <p>• Use AJC Bose Road or Park Street for the smoothest approach</p>
                  <p>• Street parking is available near Shakespeare Sarani (subject to local rules)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Note */}
          <div className="rounded-2xl border border-red-500/25 bg-gradient-to-r from-red-950/60 to-slate-900/80 p-5 shadow-lg shadow-black/20">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-red-300">Emergency Services</h4>
            <p className="text-sm leading-relaxed text-red-100">
              For medical emergencies, call 911 or use the emergency entrance on the east side of the building.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Google Maps */}
      <div className="min-h-[70vh] lg:sticky lg:top-0 lg:min-h-screen">
        <div className="relative h-full min-h-[70vh] overflow-hidden bg-slate-900 lg:min-h-screen">
          <iframe
            src="https://www.google.com/maps?q=1%2C%20Shakespeare%20Sarani%2C%20Kolkata%2C%20West%20Bengal%20700071&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CarePulse Medical Center Location"
          ></iframe>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

          {/* Location Ribbon */}
          <div className="absolute left-4 top-4 z-10 rounded-full border border-emerald-400/30 bg-slate-950/80 px-4 py-2 text-sm font-medium text-emerald-200 shadow-lg backdrop-blur-md">
            Kolkata, West Bengal • 24/7 Care
          </div>
          
          {/* Map Footer Info */}
          <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-emerald-200/40 bg-white/95 p-5 shadow-2xl backdrop-blur-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center">
                <div className="mr-3 rounded-2xl bg-emerald-500/10 p-3 text-emerald-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-800">CarePulse General Hospital</h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    1, Shakespeare Sarani, Kolkata, West Bengal 700071
                  </p>
                </div>
              </div>
              <div className="flex items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 sm:justify-end">
                <Clock className="w-4 h-4 mr-2" />
                Open 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directions