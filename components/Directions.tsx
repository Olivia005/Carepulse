import { Bus, Car, Clock, MapPin, Navigation, Phone, Scale, Scaling, Train } from 'lucide-react'
import React from 'react'

const Directions = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Left Sidebar */}
      <div className="lg:w-1/3 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white p-6 lg:p-8 shadow-2xl">
        <div className="max-w-md mx-auto lg:max-w-none">
          {/* Hospital Header */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-500 p-3 rounded-full mr-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">CarePulse Medical Center</h1>
                <p className="text-emerald-200">Advanced Healthcare Center</p>
              </div>
            </div>
            
            <div className="bg-black/20 rounded-lg p-4 border border-emerald-500/20">
              <h2 className="text-lg font-semibold mb-2 text-emerald-300">Hospital Address</h2>
              <p className="text-gray-100 leading-relaxed">
                123 Healthcare Avenue<br />
                Medical District, Downtown<br />
                New York, NY 10001
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-emerald-300 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-emerald-400" />
                <span className="text-gray-100">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-3 text-emerald-400" />
                <span className="text-gray-100">24/7 Emergency Services</span>
              </div>
            </div>
          </div>

          {/* Nearest Transit Points */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-emerald-300">Nearest Transit Points</h3>
            
            <div className="space-y-4">
              {/* Bus Station */}
              <div className="bg-black/20 rounded-lg p-4 border border-emerald-500/20 hover:bg-black/30 transition-colors">
                <div className="flex items-center mb-2">
                  <Bus className="w-5 h-5 mr-3 text-emerald-400" />
                  <h4 className="font-semibold text-white">Central Bus Terminal</h4>
                </div>
                <p className="text-gray-200 text-sm mb-2">Distance: 0.3 miles (5-minute walk)</p>
                <p className="text-gray-300 text-sm">Located on Main Street, serves routes 15, 22, 45, and express lines</p>
              </div>

              {/* Train Station */}
              <div className="bg-black/20 rounded-lg p-4 border border-emerald-500/20 hover:bg-black/30 transition-colors">
                <div className="flex items-center mb-2">
                  <Train className="w-5 h-5 mr-3 text-emerald-400" />
                  <h4 className="font-semibold text-white">Downtown Metro Station</h4>
                </div>
                <p className="text-gray-200 text-sm mb-2">Distance: 0.5 miles (8-minute walk)</p>
                <p className="text-gray-300 text-sm">Blue and Green line connections, Exit B towards Medical District</p>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-emerald-300 flex items-center">
              <Navigation className="w-5 h-5 mr-2" />
              How to Reach Us
            </h3>
            
            <div className="space-y-6">
              {/* From Bus Terminal */}
              <div className="bg-gradient-to-r from-emerald-900/50 to-black/30 rounded-lg p-4 border border-emerald-500/30">
                <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
                  <Bus className="w-4 h-4 mr-2" />
                  From Central Bus Terminal
                </h4>
                <ol className="text-sm text-gray-200 space-y-2">
                  <li className="flex items-start">
                    <span className="bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                    Exit the terminal onto Main Street
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                    Walk east for 2 blocks to Healthcare Avenue
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                    Turn left (north) - hospital will be on your right
                  </li>
                </ol>
                <div className="mt-3 flex items-center text-emerald-200 text-sm">
                  <Scale className="w-4 h-4 mr-1" />
                  5 minutes walk
                </div>
              </div>

              {/* From Train Station */}
              <div className="bg-gradient-to-r from-emerald-900/50 to-black/30 rounded-lg p-4 border border-emerald-500/30">
                <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
                  <Train className="w-4 h-4 mr-2" />
                  From Downtown Metro Station
                </h4>
                <ol className="text-sm text-gray-200 space-y-2">
                  <li className="flex items-start">
                    <span className="bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                    Take Exit B (Medical District exit)
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                    Head north on Medical Plaza Boulevard
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                    Turn right on Healthcare Avenue
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                    Hospital entrance is 100 yards ahead
                  </li>
                </ol>
                <div className="mt-3 flex items-center text-emerald-200 text-sm">
                  <Scaling className="w-4 h-4 mr-1" />
                  8 minutes walk
                </div>
              </div>

              {/* By Car */}
              <div className="bg-gradient-to-r from-emerald-900/50 to-black/30 rounded-lg p-4 border border-emerald-500/30">
                <h4 className="font-semibold text-emerald-300 mb-3 flex items-center">
                  <Car className="w-4 h-4 mr-2" />
                  By Car
                </h4>
                <div className="text-sm text-gray-200 space-y-2">
                  <p>• Valet parking available at main entrance</p>
                  <p>• Self-parking garage on Hospital Way (first 2 hours free)</p>
                  <p>• Street parking on Healthcare Avenue (metered)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Note */}
          <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
            <h4 className="font-semibold text-red-300 mb-2">Emergency Services</h4>
            <p className="text-red-100 text-sm">
              For medical emergencies, call 911 or use the emergency entrance on the east side of the building.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Google Maps */}
      <div className="lg:w-2/3 h-[500px] lg:h-screen">
        <div className="w-full h-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731368459418!3d40.75889797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CarePulse Medical Center Location"
            className="rounded-none lg:rounded-l-lg"
          ></iframe>
          
          {/* Map Overlay Info */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
            <div className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
              <h3 className="font-semibold text-gray-800">CarePulse General Hospital</h3>
            </div>
            <p className="text-sm text-gray-600">
              123 Healthcare Avenue<br />
              New York, NY 10001
            </p>
            <div className="mt-3 flex items-center text-sm text-emerald-600">
              <Clock className="w-4 h-4 mr-1" />
              Open 24/7
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directions