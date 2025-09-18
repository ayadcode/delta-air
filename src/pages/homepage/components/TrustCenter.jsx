import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const TrustCenter = () => {
  const [activeTab, setActiveTab] = useState("certifications");

  const certifications = [
    {
      name: "NECA Certified",
      description: "National Electrical Contractors Association",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=120&h=120&fit=crop",
      validUntil: "2025-12-31",
      category: "Electrical",
    },
    {
      name: "MCAA Member",
      description: "Mechanical Contractors Association of America",
      image:
        "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?w=120&h=120&fit=crop",
      validUntil: "2025-06-30",
      category: "Mechanical",
    },
    {
      name: "PHCC Certified",
      description: "Plumbing-Heating-Cooling Contractors Association",
      image:
        "https://images.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg?w=120&h=120&fit=crop",
      validUntil: "2025-09-15",
      category: "Plumbing",
    },
    {
      name: "OSHA 30 Certified",
      description: "Occupational Safety and Health Administration",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=120&h=120&fit=crop",
      validUntil: "2025-03-20",
      category: "Safety",
    },
    {
      name: "LEED AP Certified",
      description: "Leadership in Energy and Environmental Design",
      image:
        "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?w=120&h=120&fit=crop",
      validUntil: "2025-11-10",
      category: "Sustainability",
    },
    {
      name: "ISO 9001:2015",
      description: "Quality Management System Certification",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
      validUntil: "2025-08-25",
      category: "Quality",
    },
  ];

  const safetyRecords = [
    {
      metric: "Zero Incidents",
      value: "847 Days",
      description: "Consecutive days without workplace incidents",
      icon: "Shield",
      color: "text-success",
    },
    {
      metric: "Safety Rating",
      value: "5.0/5.0",
      description: "OSHA safety compliance rating",
      icon: "Award",
      color: "text-primary",
    },
    {
      metric: "Training Hours",
      value: "2,400+",
      description: "Annual safety training hours completed",
      icon: "BookOpen",
      color: "text-secondary",
    },
    {
      metric: "EMR Score",
      value: "0.65",
      description: "Experience Modification Rate (Industry avg: 1.0)",
      icon: "TrendingDown",
      color: "text-success",
    },
  ];

  const partnerships = [
    {
      name: "Carrier Corporation",
      type: "Authorized Dealer",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=60&fit=crop",
      description: "Commercial HVAC systems and equipment",
    },
    {
      name: "Schneider Electric",
      type: "Certified Partner",
      logo: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?w=100&h=60&fit=crop",
      description: "Electrical distribution and automation",
    },
    {
      name: "Honeywell",
      type: "Solutions Partner",
      logo: "https://images.pixabay.com/photo/2017/08/10/08/47/laptop-2619564_1280.jpg?w=100&h=60&fit=crop",
      description: "Building automation and controls",
    },
    {
      name: "Trane Technologies",
      type: "Authorized Service",
      logo: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=100&h=60&fit=crop",
      description: "Climate control solutions",
    },
    {
      name: "Siemens",
      type: "Technology Partner",
      logo: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?w=100&h=60&fit=crop",
      description: "Smart building technologies",
    },
    {
      name: "Johnson Controls",
      type: "Premier Partner",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=60&fit=crop",
      description: "Fire safety and security systems",
    },
  ];

  const insuranceCoverage = [
    {
      type: "General Liability",
      coverage: "$5,000,000",
      provider: "Liberty Mutual",
      description: "Comprehensive general liability protection",
    },
    {
      type: "Professional Liability",
      coverage: "$2,000,000",
      provider: "Travelers",
      description: "Errors and omissions coverage",
    },
    {
      type: "Workers' Compensation",
      coverage: "Full Coverage",
      provider: "State Fund",
      description: "Complete employee protection",
    },
    {
      type: "Bonding Capacity",
      coverage: "$10,000,000",
      provider: "Surety Partners",
      description: "Project performance bonds available",
    },
  ];

  const tabs = [
    { id: "certifications", label: "Certifications", icon: "Award" },
    { id: "safety", label: "Safety Records", icon: "Shield" },
    { id: "partnerships", label: "Partnerships", icon: "Handshake" },
    { id: "insurance", label: "Insurance", icon: "FileText" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "certifications":
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications?.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-brand border border-border hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={cert?.image}
                      alt={cert?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-text-primary mb-1">
                      {cert?.name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-2">
                      {cert?.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {cert?.category}
                      </span>
                      <span className="text-xs text-success">
                        Valid until{" "}
                        {new Date(cert.validUntil)?.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "safety":
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {safetyRecords?.map((record, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-brand border border-border text-center"
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon
                      name={record?.icon}
                      size={32}
                      className={record?.color}
                    />
                  </div>
                  <div className="text-2xl font-bold text-text-primary mb-1">
                    {record?.value}
                  </div>
                  <div className="text-sm font-semibold text-text-primary mb-2">
                    {record?.metric}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {record?.description}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="CheckCircle" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    Safety First Commitment
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Our comprehensive safety program includes regular training,
                    equipment inspections, and strict adherence to all OSHA
                    regulations. Every team member is certified in safety
                    protocols specific to their role.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-text-primary">
                      OSHA 30 Certified
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-text-primary">
                      First Aid Certified
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-text-primary">
                      Fall Protection
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-text-primary">
                      Electrical Safety
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "partnerships":
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerships?.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-brand border border-border hover-lift"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-10 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <Image
                        src={partner?.logo}
                        alt={partner?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary">
                        {partner?.name}
                      </h3>
                      <span className="inline-flex items-center px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                        {partner?.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">
                    {partner?.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl p-8">
              <div className="text-center">
                <Icon
                  name="Handshake"
                  size={48}
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  Trusted Industry Partnerships
                </h3>
                <p className="text-text-secondary max-w-3xl mx-auto">
                  Our strategic partnerships with leading manufacturers ensure
                  access to the latest technologies, competitive pricing, and
                  comprehensive warranty support for all our installations.
                </p>
              </div>
            </div>
          </div>
        );

      case "insurance":
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {insuranceCoverage?.map((insurance, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-brand border border-border"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-text-primary mb-1">
                        {insurance?.type}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {insurance?.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        {insurance?.coverage}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {insurance?.provider}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-success"
                    />
                    <span className="text-sm text-success font-medium">
                      Active Coverage
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    Complete Protection
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Our comprehensive insurance coverage protects both our
                    clients and our team. All policies are maintained with
                    A-rated insurance carriers and exceed industry requirements.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download Insurance Certificates
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Icon name="Shield" size={16} className="mr-2" />
            Trust & Credibility Center
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Your Trust is Our Foundation
          </h2>

          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Explore our certifications, safety records, industry partnerships,
            and insurance coverage that demonstrate our commitment to excellence
            and reliability.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab?.id
                  ? "bg-primary text-primary-foreground shadow-brand"
                  : "bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">{renderContent()}</div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Questions About Our Credentials?
            </h3>
            <p className="text-text-secondary mb-6">
              We're transparent about our qualifications and happy to provide
              detailed documentation of our certifications, insurance, and
              safety records.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                Speak with Our Team
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Credentials Package
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCenter;
