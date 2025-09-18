import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const SustainabilityShowcase = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({});

  const sustainabilityMetrics = [
    {
      title: "Energy Saved",
      value: 1247000,
      unit: "kWh",
      description: "Total energy savings across all projects this year",
      icon: "Zap",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      equivalent: "Equivalent to powering 115 homes for a year",
    },
    {
      title: "Carbon Reduced",
      value: 892,
      unit: "tons CO₂",
      description: "Carbon emissions prevented through our solutions",
      icon: "Leaf",
      color: "text-green-600",
      bgColor: "bg-green-100",
      equivalent: "Equal to planting 20,300 trees",
    },
    {
      title: "Water Conserved",
      value: 2840000,
      unit: "gallons",
      description: "Water saved through efficient plumbing systems",
      icon: "Droplets",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      equivalent: "Enough to fill 4.3 Olympic swimming pools",
    },
    {
      title: "Waste Diverted",
      value: 156,
      unit: "tons",
      description: "Construction waste diverted from landfills",
      icon: "Recycle",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      equivalent: "Equivalent to 312,000 pounds of materials",
    },
  ];

  const greenTechnologies = [
    {
      name: "Solar Integration",
      description:
        "Seamless integration of solar panels with existing MEP systems for maximum efficiency.",
      icon: "Sun",
      projects: 23,
      savings: "45% average energy reduction",
      features: [
        "Grid-tie systems",
        "Battery storage",
        "Smart inverters",
        "Monitoring systems",
      ],
    },
    {
      name: "Smart HVAC Systems",
      description:
        "AI-powered climate control that learns and adapts to optimize energy usage.",
      icon: "Thermometer",
      projects: 67,
      savings: "38% HVAC energy savings",
      features: [
        "Predictive maintenance",
        "Zone control",
        "Air quality monitoring",
        "Remote optimization",
      ],
    },
    {
      name: "LED Lighting Solutions",
      description:
        "Advanced LED systems with smart controls and daylight harvesting.",
      icon: "Lightbulb",
      projects: 89,
      savings: "65% lighting energy reduction",
      features: [
        "Motion sensors",
        "Daylight harvesting",
        "Color temperature control",
        "Wireless controls",
      ],
    },
    {
      name: "Water Recovery Systems",
      description:
        "Greywater and rainwater harvesting for sustainable water management.",
      icon: "Droplets",
      projects: 34,
      savings: "42% water usage reduction",
      features: [
        "Greywater recycling",
        "Rainwater collection",
        "Smart irrigation",
        "Water quality monitoring",
      ],
    },
    {
      name: "Energy Storage",
      description:
        "Battery systems for peak shaving and backup power with renewable integration.",
      icon: "Battery",
      projects: 18,
      savings: "30% peak demand reduction",
      features: [
        "Lithium-ion batteries",
        "Peak shaving",
        "Backup power",
        "Grid services",
      ],
    },
    {
      name: "Building Automation",
      description:
        "Integrated systems that optimize all building operations for maximum efficiency.",
      icon: "Cpu",
      projects: 45,
      savings: "35% overall energy savings",
      features: [
        "IoT sensors",
        "Machine learning",
        "Predictive analytics",
        "Remote monitoring",
      ],
    },
  ];

  const certifications = [
    { name: "LEED Projects", count: 47, icon: "Award" },
    { name: "Energy Star", count: 32, icon: "Star" },
    { name: "Green Building", count: 28, icon: "Building" },
    { name: "Net Zero Ready", count: 12, icon: "Target" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % sustainabilityMetrics?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate metric values
    const animateValue = (start, end, duration, key) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (end - start) * progress);

        setAnimatedValues((prev) => ({ ...prev, [key]: current }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    sustainabilityMetrics?.forEach((metric, index) => {
      setTimeout(() => {
        animateValue(0, metric?.value, 2000, index);
      }, index * 200);
    });
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000)?.toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000)?.toFixed(0) + "K";
    }
    return num?.toLocaleString() || "0";
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-4">
            <Icon name="Leaf" size={16} className="mr-2" />
            Sustainability & Innovation
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Building Tomorrow's Infrastructure Today
          </h2>

          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our commitment to sustainability drives innovation in every project.
            Discover how our green MEP solutions are creating a more sustainable
            future.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sustainabilityMetrics?.map((metric, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-6 shadow-brand border-2 transition-all duration-500 hover-lift ${
                index === currentMetric
                  ? "border-green-200 shadow-brand-lg"
                  : "border-border"
              }`}
            >
              <div
                className={`w-16 h-16 ${metric?.bgColor} rounded-xl flex items-center justify-center mb-4`}
              >
                <Icon name={metric?.icon} size={32} className={metric?.color} />
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-text-primary text-lg">
                  {metric?.title}
                </h3>
                <div className="text-3xl font-bold text-text-primary">
                  {formatNumber(animatedValues?.[index] || 0)}
                  <span className="text-lg text-text-secondary ml-1">
                    {metric?.unit}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">
                  {metric?.description}
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-green-600 font-medium">
                    {metric?.equivalent}
                  </p>
                </div>
              </div>

              {index === currentMetric && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Green Technologies */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Green Technology Solutions
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Cutting-edge sustainable technologies that reduce environmental
              impact while improving performance and reducing costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {greenTechnologies?.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-brand border border-border hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon
                      name={tech?.icon}
                      size={24}
                      className="text-green-600"
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-secondary">Projects</div>
                    <div className="text-lg font-bold text-text-primary">
                      {tech?.projects}
                    </div>
                  </div>
                </div>

                <h4 className="font-bold text-text-primary mb-2">
                  {tech?.name}
                </h4>
                <p className="text-sm text-text-secondary mb-4">
                  {tech?.description}
                </p>

                <div className="mb-4">
                  <div className="inline-flex items-center px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                    <Icon name="TrendingUp" size={14} className="mr-1" />
                    {tech?.savings}
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-text-primary">
                    Key Features:
                  </h5>
                  <div className="grid grid-cols-2 gap-1">
                    {tech?.features?.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-1"
                      >
                        <Icon
                          name="Check"
                          size={12}
                          className="text-green-500"
                        />
                        <span className="text-xs text-text-secondary">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-brand border border-border">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Green Building Certifications
              </h3>
              <p className="text-text-secondary">
                Our projects consistently achieve top sustainability
                certifications
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications?.map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={cert?.icon}
                      size={24}
                      className="text-green-600"
                    />
                  </div>
                  <div className="text-2xl font-bold text-text-primary">
                    {cert?.count}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {cert?.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto">
              <Icon name="Leaf" size={48} className="mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Build Sustainably?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Partner with Premier MEP to create energy-efficient,
                environmentally responsible buildings that reduce costs and
                environmental impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Schedule Green Consultation
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-600"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Sustainability Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityShowcase;
