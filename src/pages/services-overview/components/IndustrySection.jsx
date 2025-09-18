import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const IndustrySection = () => {
  const industries = [
    {
      id: "healthcare",
      name: "Healthcare Facilities",
      icon: "Heart",
      description:
        "Specialized MEP solutions for hospitals, clinics, and medical centers with strict compliance requirements.",
      features: [
        "Medical gas systems",
        "Emergency power systems",
        "HVAC with infection control",
        "Specialized lighting systems",
      ],
      compliance: ["Joint Commission", "NFPA 99", "FGI Guidelines"],
      projects: "150+ Healthcare Projects",
      color: "text-red-600",
    },
    {
      id: "education",
      name: "Educational Institutions",
      icon: "GraduationCap",
      description:
        "Energy-efficient MEP systems for schools, universities, and research facilities.",
      features: [
        "Smart classroom technology",
        "Energy management systems",
        "Laboratory ventilation",
        "Campus-wide infrastructure",
      ],
      compliance: ["ASHRAE 90.1", "LEED Standards", "State Education Codes"],
      projects: "200+ Educational Projects",
      color: "text-blue-600",
    },
    {
      id: "commercial",
      name: "Commercial Buildings",
      icon: "Building",
      description:
        "Comprehensive MEP solutions for office buildings, retail spaces, and mixed-use developments.",
      features: [
        "Building automation systems",
        "Energy-efficient HVAC",
        "Advanced electrical distribution",
        "Sustainable plumbing systems",
      ],
      compliance: ["IECC", "ASHRAE Standards", "Local Building Codes"],
      projects: "500+ Commercial Projects",
      color: "text-green-600",
    },
    {
      id: "residential",
      name: "Residential Complexes",
      icon: "Home",
      description:
        "Modern MEP systems for apartments, condominiums, and residential developments.",
      features: [
        "Individual unit controls",
        "Central utility systems",
        "Smart home integration",
        "Water conservation systems",
      ],
      compliance: ["IRC", "NEC", "UPC Standards"],
      projects: "300+ Residential Projects",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Tailored MEP expertise for diverse sectors with specialized
            compliance requirements and technical standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries?.map((industry) => (
            <div
              key={industry?.id}
              className="bg-white rounded-xl border border-border shadow-brand p-6 hover-lift"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon
                      name={industry?.icon}
                      size={24}
                      className={industry?.color}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      {industry?.name}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {industry?.projects}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-4 leading-relaxed">
                {industry?.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="font-medium text-text-primary mb-2">
                  Key Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {industry?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span className="text-sm text-text-secondary">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance */}
              <div className="mb-6">
                <h4 className="font-medium text-text-primary mb-2">
                  Compliance Standards:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {industry?.compliance?.map((standard, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md font-medium"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  className="flex-1"
                  iconName="FileText"
                  iconPosition="left"
                  iconSize={16}
                >
                  View Case Studies
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  iconName="MessageSquare"
                  iconPosition="left"
                  iconSize={16}
                >
                  Discuss Project
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl border border-border shadow-brand p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              We work across all sectors and can adapt our MEP expertise to meet
              your specific industry requirements and compliance standards.
            </p>
            <Button
              variant="default"
              size="lg"
              iconName="Phone"
              iconPosition="left"
            >
              Discuss Your Industry Needs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
