import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const TrustCenter = () => {
  const certifications = [
    {
      name: "Licensed Professional Engineers",
      description: "All senior engineers hold PE licenses in Colorado",
      icon: "Award",
      status: "Current",
      validUntil: "2025-12-31",
    },
    {
      name: "OSHA Safety Certified",
      description: "30-hour OSHA certification for all field personnel",
      icon: "Shield",
      status: "Current",
      validUntil: "2025-06-30",
    },
    {
      name: "LEED Accredited Professionals",
      description: "Green building expertise for sustainable projects",
      icon: "Leaf",
      status: "Current",
      validUntil: "2026-03-15",
    },
    {
      name: "NECA Contractor Certification",
      description: "National Electrical Contractors Association member",
      icon: "Zap",
      status: "Current",
      validUntil: "2025-09-30",
    },
  ];

  const insurance = [
    {
      type: "General Liability",
      coverage: "$2,000,000",
      provider: "Liberty Mutual",
      policyNumber: "GL-2024-PM-001",
      validUntil: "2025-01-15",
    },
    {
      type: "Professional Liability",
      coverage: "$1,000,000",
      provider: "Travelers",
      policyNumber: "PL-2024-PM-002",
      validUntil: "2025-01-15",
    },
    {
      type: "Workers Compensation",
      coverage: "State Required",
      provider: "State Fund",
      policyNumber: "WC-2024-PM-003",
      validUntil: "2025-01-15",
    },
    {
      type: "Commercial Auto",
      coverage: "$1,000,000",
      provider: "Progressive",
      policyNumber: "CA-2024-PM-004",
      validUntil: "2025-01-15",
    },
  ];

  const safetyMetrics = [
    {
      metric: "Safety Record",
      value: "0 Lost Time Incidents",
      period: "2024 YTD",
      icon: "Shield",
    },
    {
      metric: "OSHA Rating",
      value: "Excellent",
      period: "Last 3 Years",
      icon: "Star",
    },
    {
      metric: "Training Hours",
      value: "2,400+ Hours",
      period: "2024 YTD",
      icon: "BookOpen",
    },
    {
      metric: "Safety Inspections",
      value: "100% Pass Rate",
      period: "Last 24 Months",
      icon: "CheckCircle",
    },
  ];

  const partnerships = [
    {
      name: "Schneider Electric",
      type: "Authorized Partner",
      // logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      specialization: "Electrical Systems & Automation",
    },
    {
      name: "Johnson Controls",
      type: "Certified Installer",
      // logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop",
      specialization: "HVAC & Building Controls",
    },
    {
      name: "Victaulic",
      type: "Preferred Contractor",
      // logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      specialization: "Piping & Fire Protection",
    },
    {
      name: "Trane",
      type: "Authorized Dealer",
      // logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop",
      specialization: "Commercial HVAC Systems",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Trust & Compliance Center
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Your confidence is built on our credentials. Review our
            certifications, insurance coverage, safety record, and industry
            partnerships that ensure project success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <Icon name="Award" size={24} className="mr-3 text-primary" />
                Professional Certifications
              </h3>
              <div className="space-y-4">
                {certifications?.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-surface rounded-xl p-6 border border-border"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={cert?.icon}
                          size={20}
                          className="text-primary"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-text-primary">
                            {cert?.name}
                          </h4>
                          <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-lg font-medium">
                            {cert?.status}
                          </span>
                        </div>
                        <p className="text-text-secondary text-sm mb-2">
                          {cert?.description}
                        </p>
                        <p className="text-xs text-text-secondary">
                          Valid until:{" "}
                          {new Date(cert.validUntil)?.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Metrics */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <Icon name="Shield" size={24} className="mr-3 text-primary" />
                Safety Performance
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {safetyMetrics?.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-surface rounded-xl p-6 text-center border border-border"
                  >
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon
                        name={metric?.icon}
                        size={20}
                        className="text-success"
                      />
                    </div>
                    <div className="text-2xl font-bold text-text-primary mb-1">
                      {metric?.value}
                    </div>
                    <div className="text-sm font-medium text-text-primary mb-1">
                      {metric?.metric}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {metric?.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Insurance Coverage */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <Icon name="FileText" size={24} className="mr-3 text-primary" />
                Insurance Coverage
              </h3>
              <div className="space-y-4">
                {insurance?.map((policy, index) => (
                  <div
                    key={index}
                    className="bg-surface rounded-xl p-6 border border-border"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-text-primary">
                        {policy?.type}
                      </h4>
                      <span className="text-lg font-bold text-primary">
                        {policy?.coverage}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-text-secondary">Provider:</span>
                        <div className="font-medium text-text-primary">
                          {policy?.provider}
                        </div>
                      </div>
                      <div>
                        <span className="text-text-secondary">Policy #:</span>
                        <div className="font-medium text-text-primary">
                          {policy?.policyNumber}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border">
                      <span className="text-xs text-text-secondary">
                        Valid until:{" "}
                        {new Date(policy.validUntil)?.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Partnerships */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <Icon
                  name="Handshake"
                  size={24}
                  className="mr-3 text-primary"
                />
                Industry Partnerships
              </h3>
              <div className="space-y-4">
                {partnerships?.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-surface rounded-xl p-6 border border-border"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-12 bg-white rounded-lg border border-border flex items-center justify-center overflow-hidden">
                        <Image
                          src={partner?.logo}
                          alt={partner?.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-text-primary">
                            {partner?.name}
                          </h4>
                          <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-lg font-medium">
                            {partner?.type}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary">
                          {partner?.specialization}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Statement */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                Fully Licensed & Insured
              </h3>
              <p className="text-lg text-text-secondary mb-8 max-w-3xl mx-auto">
                Delta Air maintains all required licenses, certifications, and
                insurance coverage to protect your project investment. Our
                compliance documentation is available for review during the
                procurement process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center space-x-2 text-text-primary">
                  <Icon name="FileCheck" size={20} className="text-success" />
                  <span className="font-medium">Colorado State Licensed</span>
                </div>
                <div className="flex items-center space-x-2 text-text-primary">
                  <Icon name="Shield" size={20} className="text-success" />
                  <span className="font-medium">Fully Insured & Bonded</span>
                </div>
                <div className="flex items-center space-x-2 text-text-primary">
                  <Icon name="Award" size={20} className="text-success" />
                  <span className="font-medium">Industry Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCenter;
