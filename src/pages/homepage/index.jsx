import React from "react";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import ServiceExplorer from "./components/ServiceExplorer";
import ProjectDashboard from "./components/ProjectDashboard";
import TestimonialCarousel from "./components/TestimonialCarousel";
import TrustCenter from "./components/TrustCenter";
import SustainabilityShowcase from "./components/SustainabilityShowcase";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServiceExplorer />
        <ProjectDashboard />
        <TestimonialCarousel />
        <TrustCenter />
        <SustainabilityShowcase />
      </main>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 21V3h6v18H3zm8-12v12h6V9h-6zm8-6v18h2V3h-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Delta Air</h3>
                  <p className="text-sm text-gray-400">
                    Building Tomorrow's Infrastructure Today
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Your trusted partner for comprehensive mechanical, electrical,
                and plumbing solutions. Delivering excellence in every project
                since 2010.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <span>📞</span>
                  <span>(555) 123-HELP</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <span>✉️</span>
                  <span>info@deltaair.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a
                    href="/services-overview"
                    className="hover:text-white transition-colors"
                  >
                    Mechanical Systems
                  </a>
                </li>
                <li>
                  <a
                    href="/services-overview"
                    className="hover:text-white transition-colors"
                  >
                    Electrical Systems
                  </a>
                </li>
                <li>
                  <a
                    href="/services-overview"
                    className="hover:text-white transition-colors"
                  >
                    Plumbing Systems
                  </a>
                </li>
                <li>
                  <a
                    href="/services-overview"
                    className="hover:text-white transition-colors"
                  >
                    Building Automation
                  </a>
                </li>
                <li>
                  <a
                    href="/services-overview"
                    className="hover:text-white transition-colors"
                  >
                    Emergency Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a
                    href="/about-leadership"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/project-portfolio"
                    className="hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-consultation"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-consultation"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-consultation"
                    className="hover:text-white transition-colors"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date()?.getFullYear()} Delta Air. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
