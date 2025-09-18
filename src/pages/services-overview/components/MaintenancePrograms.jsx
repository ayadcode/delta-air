import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const MaintenancePrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState("preventive");

  const programs = {
    preventive: {
      title: "Preventive Maintenance",
      icon: "Shield",
      description:
        "Scheduled maintenance to prevent equipment failures and extend system lifespan.",
      features: [
        "Regular system inspections",
        "Filter replacements",
        "Performance optimization",
        "Detailed reporting",
      ],
      schedule: "Monthly/Quarterly",
      savings: "Up to 30% cost reduction",
      color: "text-green-600",
    },
    emergency: {
      title: "24/7 Emergency Service",
      icon: "AlertTriangle",
      description:
        "Round-the-clock emergency response for critical MEP system failures.",
      features: [
        "24/7 emergency hotline",
        "2-hour response time",
        "Emergency repair services",
        "Temporary system solutions",
      ],
      schedule: "Available 24/7/365",
      savings: "Minimize downtime costs",
      color: "text-red-600",
    },
    predictive: {
      title: "Predictive Maintenance",
      icon: "TrendingUp",
      description:
        "Advanced monitoring and analytics to predict equipment failures before they occur.",
      features: [
        "IoT sensor monitoring",
        "Predictive analytics",
        "Condition-based maintenance",
        "Performance trending",
      ],
      schedule: "Continuous monitoring",
      savings: "Up to 50% cost reduction",
      color: "text-blue-600",
    },
    comprehensive: {
      title: "Comprehensive Service",
      icon: "Settings",
      description:
        "Complete maintenance solution combining all service types for maximum efficiency.",
      features: [
        "All maintenance types included",
        "Priority emergency response",
        "Dedicated service team",
        "Performance guarantees",
      ],
      schedule: "Customized schedule",
      savings: "Maximum ROI",
      color: "text-purple-600",
    },
  };

  const benefits = [
    {
      icon: "DollarSign",
      title: "Cost Savings",
      description:
        "Reduce operational costs through efficient maintenance scheduling and early problem detection.",
    },
    {
      icon: "Clock",
      title: "Minimal Downtime",
      description:
        "Keep your systems running with proactive maintenance and rapid emergency response.",
    },
    {
      icon: "Award",
      title: "Extended Lifespan",
      description:
        "Maximize equipment lifespan through proper maintenance and timely repairs.",
    },
    {
      icon: "Zap",
      title: "Energy Efficiency",
      description:
        "Optimize system performance to reduce energy consumption and environmental impact.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Maintenance Programs
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Comprehensive maintenance solutions to keep your MEP systems running
            at peak performance year-round.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Program Selection */}
          <div className="lg:col-span-1">
            <div className="bg-muted rounded-xl p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Select Program Type
              </h3>
              <div className="space-y-3">
                {Object.entries(programs)?.map(([key, program]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedProgram(key)}
                    className={`w-full text-left p-4 rounded-lg border transition-brand ${
                      selectedProgram === key
                        ? "bg-white border-primary shadow-brand"
                        : "bg-white/50 border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon
                        name={program?.icon}
                        size={20}
                        className={
                          selectedProgram === key
                            ? program?.color
                            : "text-text-secondary"
                        }
                      />
                      <div>
                        <h4 className="font-medium text-text-primary">
                          {program?.title}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {program?.schedule}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-border shadow-brand p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon
                    name={programs?.[selectedProgram]?.icon}
                    size={24}
                    className={programs?.[selectedProgram]?.color}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-text-primary">
                    {programs?.[selectedProgram]?.title}
                  </h3>
                  <p className="text-text-secondary">
                    {programs?.[selectedProgram]?.description}
                  </p>
                </div>
              </div>

              {/* Program Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-text-primary mb-3">
                  Program Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {programs?.[selectedProgram]?.features?.map(
                    (feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-text-secondary">{feature}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Program Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Calendar" size={16} className="text-primary" />
                    <span className="font-medium text-text-primary">
                      Schedule
                    </span>
                  </div>
                  <p className="text-text-secondary">
                    {programs?.[selectedProgram]?.schedule}
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon
                      name="TrendingDown"
                      size={16}
                      className="text-success"
                    />
                    <span className="font-medium text-text-primary">
                      Cost Savings
                    </span>
                  </div>
                  <p className="text-text-secondary">
                    {programs?.[selectedProgram]?.savings}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  className="flex-1"
                  iconName="FileText"
                  iconPosition="left"
                >
                  Download Program Details
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  iconName="MessageSquare"
                  iconPosition="left"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-text-primary text-center mb-8">
            Why Choose Our Maintenance Programs?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits?.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-muted rounded-xl hover-lift"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={benefit?.icon}
                    size={24}
                    className="text-primary"
                  />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">
                  {benefit?.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {benefit?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-accent/10 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Phone" size={24} className="text-accent" />
            <h3 className="text-xl font-semibold text-text-primary">
              Emergency MEP Services
            </h3>
          </div>
          <p className="text-text-secondary mb-6">
            Critical system failure? Our emergency response team is available
            24/7 to get your systems back online.
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            iconName="Phone"
            iconPosition="left"
          >
            Call Emergency Hotline: (555) 123-HELP
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePrograms;
