import React from 'react';
import { Award, Users, Building, Clock } from 'lucide-react';

const Statboxes: React.FC = () => {
  const stats = [
    {
      icon: Building,
      number: '50+',
      label: 'Years of Service',
      description: 'Serving our community since 1973'
    },
    {
      icon: Users,
      number: '100K+',
      label: 'Patients Treated',
      description: 'Annual patient care volume'
    },
    {
      icon: Award,
      number: '15',
      label: 'Medical Departments',
      description: 'Comprehensive specialty care'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Emergency Care',
      description: 'Always here when you need us'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Trusted Healthcare Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CarePulse Medical Center has been a cornerstone of healthcare in our community, 
            providing exceptional medical care with compassion and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 text-center shadow-sm hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 border border-green-500/20 hover:border-green-500/40"
            >
              <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <stat.icon className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <div className="bg-gray-900 rounded-2xl p-8 sm:p-12 shadow-lg border border-green-500/20">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-lg sm:text-2xl text-white font-medium mb-8 leading-relaxed">
                "The care I received at CarePulse was exceptional. From the moment I walked in, 
                the staff made me feel comfortable and well-cared for. The doctors were thorough, 
                compassionate, and truly dedicated to my recovery. I couldn't have asked for better treatment."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">MJ</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">Maria Johnson</div>
                  <div className="text-gray-400">Patient, Cardiac Surgery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statboxes;