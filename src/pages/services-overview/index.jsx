import React, { useState } from "react";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import ServiceCard from "./components/ServiceCard";
import ServiceCalculator from "./components/ServiceCalculator";
import IndustrySection from "./components/IndustrySection";
import MaintenancePrograms from "./components/MaintenancePrograms";

const ServicesOverview = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: "mechanical",
      title: "Mechanical Systems",
      category: "HVAC & Climate Control",
      icon: "Wind",
      description: `Advanced HVAC design and installation for optimal climate control, energy efficiency, and indoor air quality. Our mechanical systems ensure comfortable environments while minimizing operational costs.`,
      keyFeatures: [
        "Energy-efficient HVAC design",
        "Indoor air quality optimization",
        "Smart climate control systems",
        "Preventive maintenance programs",
      ],
      technicalSpecs: [
        "Variable Air Volume (VAV) systems",
        "Heat recovery ventilation",
        "Building automation integration",
        "Energy management systems",
        "Chilled water systems",
        "Boiler and heating systems",
      ],
      complianceStandards: [
        "ASHRAE 90.1",
        "IECC",
        "LEED Standards",
        "NFPA 90A",
      ],
      timeline: "6-10 weeks",
    },
    {
      id: "electrical",
      title: "Electrical Infrastructure",
      category: "Power & Lighting Systems",
      icon: "Zap",
      description: `Comprehensive electrical design and installation services including power distribution, lighting systems, and emergency backup solutions for reliable and safe electrical infrastructure.`,
      keyFeatures: [
        "Power distribution design",
        "LED lighting solutions",
        "Emergency backup systems",
        "Electrical safety compliance",
      ],
      technicalSpecs: [
        "Main electrical panels and switchgear",
        "Circuit breaker protection systems",
        "Emergency generator systems",
        "Uninterruptible Power Supply (UPS)",
        "Fire alarm and detection systems",
        "Security and access control wiring",
      ],
      complianceStandards: ["NEC", "NFPA 70", "IEEE Standards", "UL Listed"],
      timeline: "4-8 weeks",
    },
    {
      id: "plumbing",
      title: "Plumbing Solutions",
      category: "Water & Waste Systems",
      icon: "Droplets",
      description: `Complete plumbing system design and installation including water supply, drainage, and specialized systems for commercial and residential applications with focus on water conservation.`,
      keyFeatures: [
        "Water-efficient fixtures",
        "Drainage system design",
        "Backflow prevention",
        "Water quality management",
      ],
      technicalSpecs: [
        "Domestic water supply systems",
        "Sanitary and storm drainage",
        "Grease trap and oil separator systems",
        "Medical gas systems (healthcare)",
        "Irrigation and landscape systems",
        "Water treatment systems",
      ],
      complianceStandards: ["UPC", "IPC", "ASSE Standards", "NSF Certified"],
      timeline: "3-6 weeks",
    },
    {
      id: "emergency",
      title: "Emergency Services",
      category: "24/7 Critical Response",
      icon: "AlertTriangle",
      description: `Round-the-clock emergency MEP services for critical system failures. Our rapid response team ensures minimal downtime and immediate restoration of essential building systems.`,
      keyFeatures: [
        "24/7 emergency response",
        "2-hour response time",
        "Critical system restoration",
        "Temporary system solutions",
      ],
      technicalSpecs: [
        "Emergency power restoration",
        "HVAC system emergency repairs",
        "Plumbing leak and flood response",
        "Electrical fault diagnosis and repair",
        "Fire safety system restoration",
        "Temporary equipment deployment",
      ],
      complianceStandards: [
        "OSHA Safety",
        "Emergency Protocols",
        "Insurance Approved",
      ],
      timeline: "Immediate response",
    },
  ];

  const handleExpandService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Comprehensive MEP Solutions
            </h1>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Premier MEP delivers integrated mechanical, electrical, and
              plumbing services that power modern buildings. From design to
              maintenance, we're your trusted partner for reliable, efficient,
              and compliant MEP systems.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                number: "1,000+",
                label: "Projects Completed",
                icon: "Building",
              },
              { number: "15+", label: "Years Experience", icon: "Award" },
              { number: "24/7", label: "Emergency Support", icon: "Clock" },
              { number: "98%", label: "Client Satisfaction", icon: "Star" },
            ]?.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-brand"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat?.icon} size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-text-primary mb-1">
                  {stat?.number}
                </div>
                <div className="text-sm text-text-secondary">{stat?.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Calculator"
              iconPosition="left"
            >
              Get Project Estimate
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
            >
              Emergency Services
            </Button>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Explore our comprehensive MEP services designed to meet the unique
              needs of your project. Click on any service to view detailed
              specifications and compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services?.map((service) => (
              <ServiceCard
                key={service?.id}
                service={service}
                onExpand={handleExpandService}
                isExpanded={expandedService === service?.id}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Service Calculator */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Project Estimate Calculator
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Get preliminary pricing for your MEP project instantly. Our
              calculator provides accurate estimates based on project type,
              size, and complexity.
            </p>
          </div>

          <ServiceCalculator />
        </div>
      </section>
      {/* Industry Solutions */}
      <IndustrySection />
      {/* Maintenance Programs */}
      <MaintenancePrograms />
      {/* Cross-System Integration */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Integrated MEP Solutions
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our systems work together seamlessly to maximize efficiency,
              reduce costs, and ensure optimal building performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Energy Efficiency",
                description:
                  "Integrated systems reduce energy consumption by up to 40% through smart coordination and optimization.",
                icon: "Zap",
                metrics: [
                  "40% Energy Savings",
                  "25% Cost Reduction",
                  "LEED Certification",
                ],
              },
              {
                title: "System Coordination",
                description:
                  "Seamless integration between mechanical, electrical, and plumbing systems for optimal performance.",
                icon: "Settings",
                metrics: [
                  "99.9% Uptime",
                  "Reduced Conflicts",
                  "Faster Installation",
                ],
              },
              {
                title: "Smart Building Ready",
                description:
                  "Future-proof installations with IoT integration and building automation system compatibility.",
                icon: "Smartphone",
                metrics: [
                  "IoT Integration",
                  "Remote Monitoring",
                  "Predictive Maintenance",
                ],
              },
            ]?.map((integration, index) => (
              <div
                key={index}
                className="bg-muted rounded-xl p-8 text-center hover-lift"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name={integration?.icon}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {integration?.title}
                </h3>
                <p className="text-text-secondary mb-6">
                  {integration?.description}
                </p>
                <div className="space-y-2">
                  {integration?.metrics?.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="flex items-center justify-center space-x-2"
                    >
                      <Icon name="Check" size={16} className="text-success" />
                      <span className="text-sm text-text-secondary">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your MEP Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get expert consultation and detailed project planning from Premier
            MEP's experienced team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              iconName="MessageSquare"
              iconPosition="left"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              iconName="Download"
              iconPosition="left"
            >
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
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
                  <h3 className="text-xl font-bold">Premier MEP</h3>
                  <p className="text-sm text-slate-300">Solutions</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Building tomorrow's infrastructure today with innovative MEP
                solutions that prioritize efficiency, sustainability, and
                reliability.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-300 hover:text-white"
                >
                  <Icon name="Phone" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-300 hover:text-white"
                >
                  <Icon name="Mail" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-300 hover:text-white"
                >
                  <Icon name="MapPin" size={20} />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mechanical Systems
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Electrical Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Plumbing Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Emergency Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Emergency: (555) 123-HELP</li>
                <li>Office: (555) 123-4567</li>
                <li>info@premiermep.com</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>
              &copy; {new Date()?.getFullYear()} Premier MEP Solutions. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesOverview;
