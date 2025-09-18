import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ServiceHero = ({ selectedService, onServiceChange }) => {
  const services = [
    {
      id: "mechanical",
      name: "Mechanical Systems",
      icon: "Wind",
      description: "HVAC design, installation, and smart building integration",
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: "electrical",
      name: "Electrical Infrastructure",
      icon: "Zap",
      description: "Power distribution, lighting design, and emergency systems",
      color: "from-amber-600 to-orange-600",
    },
    {
      id: "plumbing",
      name: "Plumbing Solutions",
      icon: "Droplets",
      description: "Water systems, waste management, and sustainable practices",
      color: "from-teal-600 to-emerald-600",
    },
  ];

  const currentService =
    services?.find((s) => s?.id === selectedService) || services?.[0];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${currentService?.color} rounded-xl flex items-center justify-center`}
                >
                  <Icon name={currentService?.icon} size={24} color="white" />
                </div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  MEP Excellence
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                {currentService?.name}
                <span className="block text-secondary mt-2">
                  Technical Expertise
                </span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed">
                {currentService?.description}. Our certified engineers deliver
                cutting-edge solutions with proven track records in energy
                efficiency, code compliance, and sustainable practices.
              </p>
            </div>

            {/* Service Navigation */}
            <div className="flex flex-wrap gap-3">
              {services?.map((service) => (
                <button
                  key={service?.id}
                  onClick={() => onServiceChange(service?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-brand ${
                    selectedService === service?.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-white border border-border text-text-primary hover:bg-muted hover:border-primary"
                  }`}
                >
                  <Icon name={service?.icon} size={16} />
                  <span>{service?.name}</span>
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                System Calculator
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Technical Guides
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-32 h-32 bg-gradient-to-br ${currentService?.color} rounded-full flex items-center justify-center shadow-brand-lg`}
                >
                  <Icon name={currentService?.icon} size={64} color="white" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-white rounded-lg p-3 shadow-brand">
                <div className="flex items-center space-x-2">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    color="var(--color-success)"
                  />
                  <span className="text-xs font-medium text-text-primary">
                    Certified
                  </span>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white rounded-lg p-3 shadow-brand">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} color="var(--color-accent)" />
                  <span className="text-xs font-medium text-text-primary">
                    15+ Years
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
