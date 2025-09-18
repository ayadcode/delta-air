import React, { useState, useEffect } from "react";
import Header from "../../components/ui/Header";
import ServiceHero from "./components/ServiceHero";
import ServiceDetails from "./components/ServiceDetails";
import InteractiveTools from "./components/InteractiveTools";
import ProjectShowcase from "./components/ProjectShowcase";
import MaintenancePrograms from "./components/MaintenancePrograms";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";

const IndividualServicePages = () => {
  const [selectedService, setSelectedService] = useState("mechanical");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceChange = (serviceId) => {
    setSelectedService(serviceId);
    // Smooth scroll to top when service changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <ServiceHero
          selectedService={selectedService}
          onServiceChange={handleServiceChange}
        />

        {/* Service Details */}
        <ServiceDetails selectedService={selectedService} />

        {/* Interactive Tools */}
        <InteractiveTools selectedService={selectedService} />

        {/* Project Showcase */}
        <ProjectShowcase selectedService={selectedService} />

        {/* Maintenance Programs */}
        <MaintenancePrograms selectedService={selectedService} />

        {/* Call to Action Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  Our certified engineers are ready to discuss your specific
                  requirements and provide customized MEP solutions that exceed
                  expectations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="xl"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  iconName="Phone"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Call Emergency Line
                </Button>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Icon name="Phone" size={20} />
                  <span className="font-medium">(555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Icon name="Mail" size={20} />
                  <span className="font-medium">info@premiermep.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-white">
                  <Icon name="Clock" size={20} />
                  <span className="font-medium">24/7 Emergency</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 21V3h6v18H3zm8-12v12h6V9h-6zm8-6v18h2V3h-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Premier MEP</h3>
                  <p className="text-sm text-slate-400">Solutions</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Building tomorrow's infrastructure today with innovative MEP
                solutions.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a
                    href="/individual-service-pages"
                    className="hover:text-white transition-colors"
                  >
                    Mechanical Systems
                  </a>
                </li>
                <li>
                  <a
                    href="/individual-service-pages"
                    className="hover:text-white transition-colors"
                  >
                    Electrical Infrastructure
                  </a>
                </li>
                <li>
                  <a
                    href="/individual-service-pages"
                    className="hover:text-white transition-colors"
                  >
                    Plumbing Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="/services-overview"
                    className="hover:text-white transition-colors"
                  >
                    All Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
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
                    Projects
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
                    href="/homepage"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} />
                  <span>info@premiermep.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={14} />
                  <span>Seattle, WA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © {new Date()?.getFullYear()} Premier MEP Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndividualServicePages;
