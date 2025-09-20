import React from "react";
import Header from "../../components/ui/Header";
import ContactHero from "./components/ContactHero";
import ContactMethods from "./components/ContactMethods";
import ProjectInquiryForm from "./components/ProjectInquiryForm";
import OfficeLocations from "./components/OfficeLocations";
import TeamContacts from "./components/TeamContacts";
import TrustCenter from "./components/TrustCenter";
import Icon from "../../components/AppIcon";

const ContactConsultation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <ContactHero />
      {/* Contact Methods */}
      <ContactMethods />
      {/* Project Inquiry Form */}
      <ProjectInquiryForm />
      {/* Office Locations */}
      <OfficeLocations />
      {/* Team Contacts */}
      <TeamContacts />
      {/* Trust Center */}
      <TrustCenter />
      {/* Emergency Contact Banner */}
      <section className="py-8 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name="AlertTriangle" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MEP Emergency?</h3>
                <p className="text-white/90">
                  24/7 emergency response team standing by
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+15559111MEP1"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-brand flex items-center space-x-2"
              >
                <Icon name="Phone" size={18} />
                <span>Call: (555) 911-MEP1</span>
              </a>
              <a
                href="sms:+15559111TEXT"
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-brand flex items-center space-x-2"
              >
                <Icon name="MessageSquare" size={18} />
                <span>Text: (555) 911-TEXT</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
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
                  <p className="text-white/80 text-sm">
                    Building Tomorrow's Infrastructure Today
                  </p>
                </div>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                Colorado's trusted MEP partner for commercial, industrial, and
                residential projects. Delivering innovative solutions with
                unmatched expertise and reliability.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-brand"
                >
                  <Icon name="Facebook" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-brand"
                >
                  <Icon name="Twitter" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-brand"
                >
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a
                    href="/homepage"
                    className="hover:text-white transition-brand"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services-overview"
                    className="hover:text-white transition-brand"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/project-portfolio"
                    className="hover:text-white transition-brand"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/about-leadership"
                    className="hover:text-white transition-brand"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-consultation"
                    className="hover:text-white transition-brand"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@deltaair.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Denver, CO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>24/7 Emergency</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>
              &copy; {new Date()?.getFullYear()} Delta Air. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactConsultation;
