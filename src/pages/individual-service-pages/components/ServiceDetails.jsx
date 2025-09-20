import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const ProjectShowcase = ({ selectedService }) => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projectData = {
    mechanical: [
      {
        id: 1,
        title: "Downtown Medical Center HVAC Upgrade",
        location: "Seattle, WA",
        size: "150,000 sq ft",
        completion: "2024",
        // beforeImage:
        // "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
        // afterImage:
        // "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
        challenge: `The existing HVAC system was inefficient and couldn't maintain proper temperature control across different zones. Energy costs were 40% above industry standards, and patient comfort was compromised.`,
        solution: `Implemented a state-of-the-art variable air volume (VAV) system with smart controls, energy recovery ventilation, and zone-specific temperature management. Integrated building automation system for predictive maintenance.`,
        results: [
          { metric: "Energy Savings", value: "42%", icon: "TrendingDown" },
          {
            metric: "Temperature Variance",
            value: "±1°F",
            icon: "Thermometer",
          },
          { metric: "Maintenance Costs", value: "-35%", icon: "Wrench" },
          { metric: "Patient Satisfaction", value: "95%", icon: "Heart" },
        ],
      },
      {
        id: 2,
        title: "Corporate Headquarters Smart Building",
        location: "Portland, OR",
        size: "200,000 sq ft",
        completion: "2024",
        // beforeImage:
        // "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        // afterImage:
        // "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        challenge: `Outdated mechanical systems with poor indoor air quality and high operational costs. The building needed to achieve LEED Gold certification while maintaining occupant comfort.`,
        solution: `Designed and installed high-efficiency HVAC systems with advanced air filtration, demand-controlled ventilation, and integrated IoT sensors for real-time monitoring and optimization.`,
        results: [
          { metric: "Energy Reduction", value: "38%", icon: "Leaf" },
          { metric: "Air Quality Index", value: "Excellent", icon: "Wind" },
          { metric: "LEED Certification", value: "Gold", icon: "Award" },
          { metric: "ROI Timeline", value: "3.2 years", icon: "TrendingUp" },
        ],
      },
    ],
    electrical: [
      {
        id: 1,
        title: "Manufacturing Facility Power Upgrade",
        location: "Tacoma, WA",
        size: "300,000 sq ft",
        completion: "2024",
        // beforeImage:
        // "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&h=400&fit=crop",
        // afterImage:
        // "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
        challenge: `Aging electrical infrastructure couldn't support new high-efficiency equipment. Frequent power outages and safety concerns required immediate attention and code compliance updates.`,
        solution: `Complete electrical system overhaul including new service entrance, distribution panels, LED lighting retrofit, and emergency backup systems. Implemented arc flash mitigation and safety protocols.`,
        results: [
          { metric: "Power Reliability", value: "99.9%", icon: "Zap" },
          { metric: "Lighting Efficiency", value: "65%", icon: "Lightbulb" },
          { metric: "Safety Incidents", value: "0", icon: "Shield" },
          { metric: "Code Compliance", value: "100%", icon: "CheckCircle" },
        ],
      },
      {
        id: 2,
        title: "Retail Complex Electrical Design",
        location: "Bellevue, WA",
        size: "75,000 sq ft",
        completion: "2024",
        // beforeImage:
        // "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
        // afterImage:
        // "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        challenge: `New construction required sophisticated electrical design to support diverse retail tenants with varying power needs, while maintaining energy efficiency and aesthetic appeal.`,
        solution: `Designed flexible electrical infrastructure with tenant-specific panels, smart lighting controls, and integrated security systems. Implemented energy monitoring for individual tenant billing.`,
        results: [
          { metric: "Tenant Satisfaction", value: "98%", icon: "Users" },
          {
            metric: "Energy Monitoring",
            value: "Real-time",
            icon: "BarChart3",
          },
          { metric: "Installation Time", value: "-20%", icon: "Clock" },
          { metric: "Future Flexibility", value: "High", icon: "Settings" },
        ],
      },
    ],
    plumbing: [
      {
        id: 1,
        title: "Hotel Water System Renovation",
        location: "Vancouver, WA",
        size: "250 rooms",
        completion: "2024",
        // beforeImage:
        // "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
        // afterImage:
        // "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
        challenge: `Aging plumbing infrastructure with frequent leaks, poor water pressure, and high water consumption. Guest complaints about water quality and temperature consistency were increasing.`,
        solution: `Complete plumbing system replacement with high-efficiency fixtures, pressure-boosting systems, and water recycling technology. Implemented smart leak detection and automated shutoff systems.`,
        results: [
          { metric: "Water Savings", value: "45%", icon: "Droplets" },
          { metric: "Guest Complaints", value: "-90%", icon: "ThumbsUp" },
          { metric: "Maintenance Calls", value: "-75%", icon: "Wrench" },
          { metric: "Water Pressure", value: "Optimal", icon: "Gauge" },
        ],
      },
      {
        id: 2,
        title: "Restaurant Grease Management System",
        location: "Spokane, WA",
        size: "5,000 sq ft",
        completion: "2024",
        // beforeImage:
        // "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
        // afterImage:
        // "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
        challenge: `Frequent grease trap backups and odor issues were affecting restaurant operations. City compliance violations required immediate attention and system redesign.`,
        solution: `Installed advanced grease management system with automatic cleaning cycles, odor control technology, and compliance monitoring. Integrated with kitchen operations for optimal performance.`,
        results: [
          { metric: "Backup Incidents", value: "0", icon: "CheckCircle" },
          { metric: "Compliance Score", value: "100%", icon: "Award" },
          { metric: "Maintenance Time", value: "-60%", icon: "Clock" },
          { metric: "Odor Complaints", value: "0", icon: "Smile" },
        ],
      },
    ],
  };

  const currentProjects =
    projectData?.[selectedService] || projectData?.mechanical;
  const currentProject = currentProjects?.[selectedProject];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Project Success Stories
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Real projects, measurable results. See how our {selectedService}{" "}
              expertise transforms challenges into efficient, cost-effective
              solutions.
            </p>
          </div>

          {/* Project Navigation */}
          <div className="flex justify-center">
            <div className="flex space-x-2 bg-muted rounded-lg p-1">
              {currentProjects?.map((project, index) => (
                <button
                  key={project?.id}
                  onClick={() => setSelectedProject(index)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-brand ${
                    selectedProject === index
                      ? "bg-white text-primary shadow-sm"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  Project {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Before/After Images */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
                    Before
                  </h3>
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={currentProject?.beforeImage}
                      alt={`${currentProject?.title} - Before`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
                    After
                  </h3>
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={currentProject?.afterImage}
                      alt={`${currentProject?.title} - After`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-muted rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="MapPin"
                      size={16}
                      color="var(--color-text-secondary)"
                    />
                    <span className="text-sm text-text-secondary">
                      Location
                    </span>
                  </div>
                  <div className="text-sm font-medium text-text-primary">
                    {currentProject?.location}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Square"
                      size={16}
                      color="var(--color-text-secondary)"
                    />
                    <span className="text-sm text-text-secondary">Size</span>
                  </div>
                  <div className="text-sm font-medium text-text-primary">
                    {currentProject?.size}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Calendar"
                      size={16}
                      color="var(--color-text-secondary)"
                    />
                    <span className="text-sm text-text-secondary">
                      Completed
                    </span>
                  </div>
                  <div className="text-sm font-medium text-text-primary">
                    {currentProject?.completion}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-text-primary">
                  {currentProject?.title}
                </h3>
              </div>

              {/* Challenge */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon
                    name="AlertTriangle"
                    size={20}
                    color="var(--color-accent)"
                  />
                  <h4 className="text-lg font-semibold text-text-primary">
                    Challenge
                  </h4>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {currentProject?.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Lightbulb"
                    size={20}
                    color="var(--color-primary)"
                  />
                  <h4 className="text-lg font-semibold text-text-primary">
                    Solution
                  </h4>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {currentProject?.solution}
                </p>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon
                    name="TrendingUp"
                    size={20}
                    color="var(--color-success)"
                  />
                  <h4 className="text-lg font-semibold text-text-primary">
                    Results
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {currentProject?.results?.map((result, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 border border-border"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                          <Icon
                            name={result?.icon}
                            size={16}
                            color="var(--color-success)"
                          />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-text-primary">
                            {result?.value}
                          </div>
                          <div className="text-xs text-text-secondary">
                            {result?.metric}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageSquare"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  Discuss Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
