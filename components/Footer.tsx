import React from "react";
import Link from "next/link";
import {
  Activity,
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-black" />
              </div>
              <span className="text-xl font-bold text-white">
                CarePulse Medical Center
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing compassionate, comprehensive healthcare services to our
              community for over 50 years. Your health is our mission.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Medical Records
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Billing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Surgery
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Maternity
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Imaging
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Laboratory
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-red-400 font-semibold">
                  Emergency: (555) 911-HELP
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400" />
                <span>info@carepulsemedical.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-green-400 mt-1" />
                <span>
                  123 Healthcare Avenue
                  <br />
                  Medical District, Downtown New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-green-400" />
                <span>24/7 Emergency Services</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              © 2025 CarePulse Medical Center. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                HIPAA Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
