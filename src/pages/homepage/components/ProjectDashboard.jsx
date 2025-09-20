import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const ProjectDashboard = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeProjects = [
    {
      id: 1,
      name: "Metropolitan Hospital Expansion",
      type: "Healthcare",
      location: "Downtown District",
      progress: 87,
      phase: "Final Systems Testing",
      startDate: "2024-03-15",
      expectedCompletion: "2024-12-20",
      // image:
      // "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop",
      systems: ["HVAC", "Electrical", "Medical Gas"],
      teamSize: 12,
      budget: "$2.8M",
      highlights: [
        "Advanced air filtration systems",
        "Redundant power backup",
        "Smart building integration",
      ],
      status: "on-track",
      nextMilestone: "Final inspection scheduled for Dec 15",
    },
    {
      id: 2,
      name: "Green Office Complex",
      type: "Commercial",
      location: "Business Park",
      progress: 65,
      phase: "MEP Installation",
      startDate: "2024-05-01",
      expectedCompletion: "2025-02-28",
      image:
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?w=600&h=400&fit=crop",
      systems: ["Solar Integration", "Smart HVAC", "LED Lighting"],
      teamSize: 8,
      budget: "$1.9M",
      highlights: [
        "LEED Platinum certification target",
        "50% energy reduction goal",
        "Rainwater harvesting system",
      ],
      status: "ahead",
      nextMilestone: "Electrical rough-in completion by Dec 30",
    },
    {
      id: 3,
      name: "Luxury Residential Tower",
      type: "Residential",
      location: "Waterfront District",
      progress: 42,
      phase: "Rough-in Installation",
      startDate: "2024-08-10",
      expectedCompletion: "2025-06-15",
      image:
        "https://images.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg?w=600&h=400&fit=crop",
      systems: ["Central HVAC", "Smart Home", "Fire Safety"],
      teamSize: 15,
      budget: "$3.2M",
      highlights: [
        "Individual unit climate control",
        "Smart home automation",
        "Advanced fire suppression",
      ],
      status: "on-track",
      nextMilestone: "Plumbing rough-in starts Jan 5",
    },
    {
      id: 4,
      name: "Manufacturing Facility Upgrade",
      type: "Industrial",
      location: "Industrial Zone",
      progress: 23,
      phase: "Design Development",
      startDate: "2024-11-01",
      expectedCompletion: "2025-08-30",
      // image:
      // "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      systems: ["Industrial HVAC", "High-Voltage", "Process Cooling"],
      teamSize: 10,
      budget: "$4.1M",
      highlights: [
        "Energy-efficient process cooling",
        "Upgraded electrical capacity",
        "Improved air quality systems",
      ],
      status: "planning",
      nextMilestone: "Final design approval by Jan 15",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "ahead":
        return "text-success bg-success/10";
      case "on-track":
        return "text-primary bg-primary/10";
      case "planning":
        return "text-secondary bg-secondary/10";
      default:
        return "text-text-secondary bg-muted";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "ahead":
        return "TrendingUp";
      case "on-track":
        return "CheckCircle";
      case "planning":
        return "Clock";
      default:
        return "AlertCircle";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "ahead":
        return "Ahead of Schedule";
      case "on-track":
        return "On Track";
      case "planning":
        return "In Planning";
      default:
        return "Unknown";
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setSelectedProject((prev) => (prev + 1) % activeProjects?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeProjects?.length]);

  const currentProject = activeProjects?.[selectedProject];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Icon name="Activity" size={16} className="mr-2" />
            Real-Time Project Dashboard
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Current Active Projects
          </h2>

          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Track our ongoing MEP projects in real-time. See our commitment to
            quality, timeline adherence, and client satisfaction in action.
          </p>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-brand border border-border">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Building2" size={24} className="text-primary" />
              <span className="text-2xl font-bold text-text-primary">47</span>
            </div>
            <p className="text-sm text-text-secondary">Active Projects</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-brand border border-border">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Users" size={24} className="text-secondary" />
              <span className="text-2xl font-bold text-text-primary">156</span>
            </div>
            <p className="text-sm text-text-secondary">Team Members</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-brand border border-border">
            <div className="flex items-center justify-between mb-2">
              <Icon name="TrendingUp" size={24} className="text-success" />
              <span className="text-2xl font-bold text-text-primary">94%</span>
            </div>
            <p className="text-sm text-text-secondary">On-Time Delivery</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-brand border border-border">
            <div className="flex items-center justify-between mb-2">
              <Icon name="DollarSign" size={24} className="text-accent" />
              <span className="text-2xl font-bold text-text-primary">$18M</span>
            </div>
            <p className="text-sm text-text-secondary">Projects Value</p>
          </div>
        </div>

        {/* Main Project Display */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden border border-border">
              {/* Project Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <Image
                  src={currentProject?.image}
                  alt={currentProject?.name}
                  className="w-full h-full object-cover"
                />

                {/* Status Badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    currentProject?.status
                  )}`}
                >
                  <Icon
                    name={getStatusIcon(currentProject?.status)}
                    size={14}
                    className="inline mr-1"
                  />
                  {getStatusText(currentProject?.status)}
                </div>

                {/* Progress Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">
                      Progress
                    </span>
                    <span className="text-sm font-bold text-primary">
                      {currentProject?.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${currentProject?.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {currentProject?.name}
                  </h3>
                  <div className="flex items-center space-x-4 text-text-secondary">
                    <span className="flex items-center">
                      <Icon name="MapPin" size={16} className="mr-1" />
                      {currentProject?.location}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Tag" size={16} className="mr-1" />
                      {currentProject?.type}
                    </span>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-lg font-bold text-text-primary">
                      {currentProject?.teamSize}
                    </div>
                    <div className="text-xs text-text-secondary">Team Size</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-lg font-bold text-text-primary">
                      {currentProject?.budget}
                    </div>
                    <div className="text-xs text-text-secondary">Budget</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-lg font-bold text-text-primary">
                      {currentProject?.phase}
                    </div>
                    <div className="text-xs text-text-secondary">
                      Current Phase
                    </div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-lg font-bold text-text-primary">
                      {new Date(
                        currentProject.expectedCompletion
                      )?.toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                    <div className="text-xs text-text-secondary">
                      Completion
                    </div>
                  </div>
                </div>

                {/* Systems */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">
                    MEP Systems:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject?.systems?.map((system, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                      >
                        {system}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Next Milestone */}
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Calendar"
                      size={20}
                      className="text-primary mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">
                        Next Milestone
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {currentProject?.nextMilestone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project List & Controls */}
          <div className="space-y-6">
            {/* Auto-play Control */}
            <div className="bg-white rounded-xl p-4 shadow-brand border border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-primary">
                  Auto-rotate
                </span>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    isAutoPlaying ? "bg-primary" : "bg-border"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      isAutoPlaying ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Project List */}
            <div className="space-y-3">
              {activeProjects?.map((project, index) => (
                <button
                  key={project?.id}
                  onClick={() => {
                    setSelectedProject(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    selectedProject === index
                      ? "bg-primary text-primary-foreground shadow-brand"
                      : "bg-white hover:bg-muted border border-border"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm truncate">
                      {project?.name}
                    </h4>
                    <span className="text-xs opacity-75">
                      {project?.progress}%
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs opacity-75">
                    <Icon name="MapPin" size={12} />
                    <span>{project?.location}</span>
                  </div>
                  <div className="mt-2 w-full bg-white/20 rounded-full h-1">
                    <div
                      className="bg-white h-1 rounded-full transition-all duration-500"
                      style={{ width: `${project?.progress}%` }}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-white rounded-xl p-6 shadow-brand border border-border">
              <h4 className="font-bold text-text-primary mb-2">
                Start Your Project
              </h4>
              <p className="text-sm text-text-secondary mb-4">
                Ready to begin your MEP project? Get a consultation with our
                experts.
              </p>
              <Button
                variant="default"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDashboard;
