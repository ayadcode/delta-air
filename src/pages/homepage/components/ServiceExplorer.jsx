import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ServiceExplorer = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedService, setSelectedService] = useState(null);

  const projectTypes = [
    { id: "all", label: "All Projects", icon: "Building" },
    { id: "commercial", label: "Commercial", icon: "Building2" },
    { id: "residential", label: "Residential", icon: "Home" },
    { id: "industrial", label: "Industrial", icon: "Factory" },
    { id: "healthcare", label: "Healthcare", icon: "Heart" },
  ];

  const services = [
    {
      id: "mechanical",
      title: "Mechanical Systems",
      description:
        "HVAC, ventilation, and climate control solutions for optimal comfort and efficiency.",
      icon: "Wind",
      color: "bg-blue-500",
      projects: ["commercial", "residential", "industrial", "healthcare"],
      features: [
        "HVAC Design & Installation",
        "Energy Recovery Systems",
        "Smart Climate Control",
        "Preventive Maintenance",
      ],
      stats: { projects: 180, savings: "35%" },
    },
    {
      id: "electrical",
      title: "Electrical Systems",
      description:
        "Complete electrical infrastructure from power distribution to smart building automation.",
      icon: "Zap",
      color: "bg-yellow-500",
      projects: ["commercial", "residential", "industrial"],
      features: [
        "Power Distribution",
        "Lighting Design",
        "Emergency Systems",
        "Smart Automation",
      ],
      stats: { projects: 220, savings: "28%" },
    },
    {
      id: "plumbing",
      title: "Plumbing Systems",
      description:
        "Water supply, drainage, and specialized plumbing for all building types.",
      icon: "Droplets",
      color: "bg-cyan-500",
      projects: ["commercial", "residential", "healthcare"],
      features: [
        "Water Supply Systems",
        "Drainage Solutions",
        "Fire Protection",
        "Water Conservation",
      ],
      stats: { projects: 165, savings: "42%" },
    },
    {
      id: "automation",
      title: "Building Automation",
      description:
        "Integrated smart building systems for enhanced efficiency and control.",
      icon: "Cpu",
      color: "bg-purple-500",
      projects: ["commercial", "industrial", "healthcare"],
      features: [
        "IoT Integration",
        "Energy Management",
        "Remote Monitoring",
        "Predictive Analytics",
      ],
      stats: { projects: 95, savings: "45%" },
    },
    {
      id: "sustainability",
      title: "Sustainability Solutions",
      description:
        "Green building technologies and renewable energy integration.",
      icon: "Leaf",
      color: "bg-green-500",
      projects: ["commercial", "residential", "industrial"],
      features: [
        "Solar Integration",
        "Energy Storage",
        "Green Certifications",
        "Carbon Reduction",
      ],
      stats: { projects: 78, savings: "52%" },
    },
    {
      id: "maintenance",
      title: "Maintenance & Support",
      description:
        "24/7 maintenance services and emergency support for all MEP systems.",
      icon: "Wrench",
      color: "bg-orange-500",
      projects: ["commercial", "residential", "industrial", "healthcare"],
      features: [
        "Preventive Maintenance",
        "24/7 Emergency Service",
        "System Upgrades",
        "Performance Monitoring",
      ],
      stats: { projects: 340, savings: "30%" },
    },
  ];

  const filteredServices =
    activeFilter === "all"
      ? services
      : services?.filter((service) =>
          service?.projects?.includes(activeFilter)
        );

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
            <Icon name="Search" size={16} className="mr-2" />
            Interactive Service Explorer
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Discover Our MEP Solutions
          </h2>

          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Explore our comprehensive range of mechanical, electrical, and
            plumbing services tailored to your project type and requirements.
          </p>
        </div>

        {/* Project Type Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectTypes?.map((type) => (
            <button
              key={type?.id}
              onClick={() => setActiveFilter(type?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === type?.id
                  ? "bg-primary text-primary-foreground shadow-brand"
                  : "bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <Icon name={type?.icon} size={18} />
              <span>{type?.label}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices?.map((service) => (
            <div
              key={service?.id}
              className={`group relative bg-white rounded-xl border-2 transition-all duration-300 cursor-pointer hover-lift ${
                selectedService === service?.id
                  ? "border-primary shadow-brand-lg"
                  : "border-border hover:border-primary/30"
              }`}
              onClick={() =>
                setSelectedService(
                  selectedService === service?.id ? null : service?.id
                )
              }
            >
              {/* Service Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${service?.color} rounded-lg flex items-center justify-center`}
                  >
                    <Icon
                      name={service?.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-text-secondary">Projects</div>
                    <div className="text-lg font-bold text-text-primary">
                      {service?.stats?.projects}+
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {service?.title}
                </h3>

                <p className="text-text-secondary text-sm mb-4">
                  {service?.description}
                </p>

                {/* Energy Savings Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                  <Icon name="TrendingUp" size={14} className="mr-1" />
                  {service?.stats?.savings} Energy Savings
                </div>
              </div>

              {/* Expandable Features */}
              {selectedService === service?.id && (
                <div className="border-t border-border p-6 bg-muted/30">
                  <h4 className="font-semibold text-text-primary mb-3">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-sm text-text-secondary">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="w-full"
                    >
                      Learn More About {service?.title}
                    </Button>
                  </div>
                </div>
              )}

              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon
                  name={
                    selectedService === service?.id
                      ? "ChevronUp"
                      : "ChevronDown"
                  }
                  size={20}
                  className="text-primary"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90"
            >
              Schedule Service Consultation
            </Button>

            <Button
              variant="outline"
              size="lg"
              iconName="FileText"
              iconPosition="left"
            >
              Download Service Brochure
            </Button>
          </div>

          <p className="text-sm text-text-secondary mt-4">
            Need immediate assistance? Call our 24/7 emergency line:
            <span className="font-semibold text-accent ml-1">
              (555) 123-HELP
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceExplorer;
