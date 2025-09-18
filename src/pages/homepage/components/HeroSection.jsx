import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  const liveMetrics = [
    {
      label: "Active Projects",
      value: "47",
      icon: "Building2",
      color: "text-primary",
    },
    {
      label: "Systems Installed",
      value: "2,847",
      icon: "Settings",
      color: "text-secondary",
    },
    {
      label: "Energy Saved",
      value: "1.2M kWh",
      icon: "Zap",
      color: "text-success",
    },
    {
      label: "Client Satisfaction",
      value: "98.7%",
      icon: "Heart",
      color: "text-accent",
    },
  ];

  const featuredProjects = [
    {
      title: "Downtown Medical Center",
      type: "Healthcare Facility",
      status: "95% Complete",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
      highlight: "Advanced HVAC system with 40% energy reduction",
    },
    {
      title: "Tech Campus Phase II",
      type: "Commercial Complex",
      status: "In Progress",
      image:
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?w=800&h=600&fit=crop",
      highlight: "Smart building integration with IoT monitoring",
    },
    {
      title: "Luxury Residential Tower",
      type: "High-Rise Residential",
      status: "Planning Phase",
      image:
        "https://images.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg?w=800&h=600&fit=crop",
      highlight: "Sustainable MEP systems for LEED Platinum",
    },
  ];

  useEffect(() => {
    const metricInterval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % liveMetrics?.length);
    }, 3000);

    const projectInterval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects?.length);
    }, 5000);

    return () => {
      clearInterval(metricInterval);
      clearInterval(projectInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 pt-20 lg:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a8a' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Icon name="Award" size={16} className="mr-2" />
                Certified MEP Excellence Since 2010
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                Building Tomorrow's
                <span className="text-gradient-primary block">
                  Infrastructure Today
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-xl">
                Premier MEP Solutions delivers comprehensive mechanical,
                electrical, and plumbing systems that power modern buildings
                with precision, efficiency, and sustainability.
              </p>
            </div>

            {/* Live Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {liveMetrics?.map((metric, index) => (
                <div
                  key={metric?.label}
                  className={`p-4 rounded-xl transition-all duration-500 ${
                    index === currentMetric
                      ? "bg-white shadow-brand-lg scale-105 border-2 border-primary/20"
                      : "bg-white/70 shadow-brand"
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon
                      name={metric?.icon}
                      size={20}
                      className={metric?.color}
                    />
                  </div>
                  <div className="text-2xl font-bold text-text-primary">
                    {metric?.value}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {metric?.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/90"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Emergency Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-success" />
                <span className="text-sm text-text-secondary">
                  Licensed & Insured
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} className="text-accent" />
                <span className="text-sm text-text-secondary">
                  24/7 Emergency
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={20} className="text-warning" />
                <span className="text-sm text-text-secondary">
                  5-Star Rated
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Project Showcase */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-brand-lg overflow-hidden">
              {/* Project Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <Image
                  src={featuredProjects?.[currentProject]?.image}
                  alt={featuredProjects?.[currentProject]?.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Status Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-success text-success-foreground rounded-full text-sm font-medium">
                  {featuredProjects?.[currentProject]?.status}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    {featuredProjects?.[currentProject]?.title}
                  </h3>
                  <p className="text-text-secondary">
                    {featuredProjects?.[currentProject]?.type}
                  </p>
                </div>

                <p className="text-sm text-text-secondary">
                  {featuredProjects?.[currentProject]?.highlight}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="text-primary hover:text-primary/80"
                  >
                    View Project
                  </Button>

                  {/* Project Navigation Dots */}
                  <div className="flex space-x-2">
                    {featuredProjects?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentProject ? "bg-primary" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-brand-lg p-4 border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-success" />
                </div>
                <div>
                  <div className="text-lg font-bold text-text-primary">40%</div>
                  <div className="text-xs text-text-secondary">
                    Energy Savings
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-brand-lg p-4 border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-lg font-bold text-text-primary">
                    500+
                  </div>
                  <div className="text-xs text-text-secondary">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-text-secondary" />
      </div>
    </section>
  );
};

export default HeroSection;
