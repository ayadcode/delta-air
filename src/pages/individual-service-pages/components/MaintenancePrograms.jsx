import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const MaintenancePrograms = ({ selectedService }) => {
  const [selectedProgram, setSelectedProgram] = useState("preventive");

  const programData = {
    mechanical: {
      title: "HVAC Maintenance Programs",
      description:
        "Comprehensive maintenance solutions to ensure optimal performance, energy efficiency, and equipment longevity.",
      programs: {
        preventive: {
          name: "Preventive Maintenance",
          icon: "Calendar",
          frequency: "Quarterly",
          price: "$299/month",
          features: [
            "Filter replacement and cleaning",
            "Coil inspection and cleaning",
            "Belt tension and alignment checks",
            "Thermostat calibration",
            "Refrigerant level monitoring",
            "Electrical connection inspection",
            "Performance optimization",
            "Detailed maintenance reports",
          ],
        },
        predictive: {
          name: "Predictive Maintenance",
          icon: "TrendingUp",
          frequency: "Continuous",
          price: "$499/month",
          features: [
            "IoT sensor monitoring",
            "Vibration analysis",
            "Thermal imaging inspections",
            "Energy consumption tracking",
            "Predictive failure alerts",
            "Remote system diagnostics",
            "Automated maintenance scheduling",
            "Performance analytics dashboard",
          ],
        },
        emergency: {
          name: "Emergency Response",
          icon: "AlertTriangle",
          frequency: "24/7 Availability",
          price: "$150/call",
          features: [
            "24/7 emergency hotline",
            "2-hour response time",
            "Certified technician dispatch",
            "Emergency repair services",
            "System failure diagnostics",
            "Temporary solution implementation",
            "Priority parts procurement",
            "Post-repair system testing",
          ],
        },
      },
    },
    electrical: {
      title: "Electrical Maintenance Programs",
      description:
        "Professional electrical maintenance to ensure safety, reliability, and code compliance.",
      programs: {
        preventive: {
          name: "Safety Inspections",
          icon: "Shield",
          frequency: "Bi-annual",
          price: "$399/month",
          features: [
            "Electrical panel inspections",
            "Circuit breaker testing",
            "Ground fault testing",
            "Arc fault detection",
            "Thermal imaging scans",
            "Connection tightening",
            "Safety compliance audits",
            "Code violation reporting",
          ],
        },
        predictive: {
          name: "Power Quality Monitoring",
          icon: "BarChart3",
          frequency: "Continuous",
          price: "$599/month",
          features: [
            "Real-time power monitoring",
            "Harmonic distortion analysis",
            "Voltage fluctuation tracking",
            "Load balancing optimization",
            "Energy efficiency reporting",
            "Equipment health monitoring",
            "Automated alert systems",
            "Performance trend analysis",
          ],
        },
        emergency: {
          name: "Emergency Electrical",
          icon: "Zap",
          frequency: "24/7 Availability",
          price: "$200/call",
          features: [
            "24/7 emergency response",
            "1-hour response time",
            "Licensed electrician dispatch",
            "Power restoration services",
            "Safety hazard mitigation",
            "Emergency lighting repair",
            "Generator system support",
            "Code compliance restoration",
          ],
        },
      },
    },
    plumbing: {
      title: "Plumbing Maintenance Programs",
      description:
        "Comprehensive plumbing maintenance to prevent costly repairs and ensure system reliability.",
      programs: {
        preventive: {
          name: "System Maintenance",
          icon: "Wrench",
          frequency: "Quarterly",
          price: "$249/month",
          features: [
            "Pipe inspection and cleaning",
            "Drain cleaning and maintenance",
            "Water pressure testing",
            "Leak detection services",
            "Fixture maintenance",
            "Water heater servicing",
            "Backflow prevention testing",
            "System performance reports",
          ],
        },
        predictive: {
          name: "Smart Monitoring",
          icon: "Droplets",
          frequency: "Continuous",
          price: "$399/month",
          features: [
            "Smart leak detection sensors",
            "Water usage monitoring",
            "Pressure monitoring systems",
            "Temperature tracking",
            "Automated shutoff systems",
            "Usage pattern analysis",
            "Efficiency optimization",
            "Real-time alert notifications",
          ],
        },
        emergency: {
          name: "Emergency Plumbing",
          icon: "Phone",
          frequency: "24/7 Availability",
          price: "$125/call",
          features: [
            "24/7 emergency hotline",
            "90-minute response time",
            "Licensed plumber dispatch",
            "Leak repair services",
            "Drain clearing services",
            "Water damage mitigation",
            "Emergency shutoff assistance",
            "Temporary repair solutions",
          ],
        },
      },
    },
  };

  const currentData = programData?.[selectedService] || programData?.mechanical;
  const currentProgram = currentData?.programs?.[selectedProgram];

  const benefits = [
    {
      icon: "DollarSign",
      title: "Cost Savings",
      description:
        "Reduce emergency repairs and extend equipment life by up to 40%",
    },
    {
      icon: "Clock",
      title: "Minimal Downtime",
      description: "Scheduled maintenance prevents unexpected system failures",
    },
    {
      icon: "Award",
      title: "Warranty Protection",
      description:
        "Maintain manufacturer warranties with proper maintenance records",
    },
    {
      icon: "CheckCircle",
      title: "Code Compliance",
      description: "Stay current with building codes and safety regulations",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              {currentData?.title}
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              {currentData?.description}
            </p>
          </div>

          {/* Program Selection */}
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 bg-white rounded-xl p-2 shadow-brand">
              {Object.entries(currentData?.programs)?.map(([key, program]) => (
                <button
                  key={key}
                  onClick={() => setSelectedProgram(key)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-brand ${
                    selectedProgram === key
                      ? "bg-primary text-primary-foreground"
                      : "text-text-primary hover:bg-muted"
                  }`}
                >
                  <Icon name={program?.icon} size={16} />
                  <span>{program?.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Program Details */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Program Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-brand">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <Icon
                          name={currentProgram?.icon}
                          size={24}
                          color="white"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary">
                          {currentProgram?.name}
                        </h3>
                        <p className="text-text-secondary">
                          {currentProgram?.frequency}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">
                        {currentProgram?.price}
                      </div>
                      <div className="text-sm text-text-secondary">
                        Starting from
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-text-primary">
                      What's Included:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {currentProgram?.features?.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <Icon
                            name="CheckCircle"
                            size={16}
                            color="var(--color-success)"
                          />
                          <span className="text-text-primary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                    <Button
                      variant="default"
                      size="lg"
                      iconName="Calendar"
                      iconPosition="left"
                      className="bg-primary hover:bg-primary/90"
                    >
                      Schedule Service
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      iconName="Download"
                      iconPosition="left"
                    >
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-text-primary">
                Program Benefits
              </h3>
              <div className="space-y-4">
                {benefits?.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-brand"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={benefit?.icon}
                          size={20}
                          color="var(--color-secondary)"
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-text-primary">
                          {benefit?.title}
                        </h4>
                        <p className="text-sm text-text-secondary">
                          {benefit?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-accent to-accent/80 rounded-xl p-6 text-white">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={20} color="white" />
                    <h4 className="font-semibold">24/7 Support</h4>
                  </div>
                  <p className="text-white/90 text-sm">
                    Emergency services available around the clock for critical
                    system failures.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    fullWidth
                    iconName="Phone"
                    iconPosition="left"
                    className="bg-white text-accent hover:bg-white/90"
                  >
                    Call Emergency Line
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance Schedule */}
          <div className="bg-white rounded-2xl p-8 shadow-brand">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-text-primary text-center">
                Typical Maintenance Schedule
              </h3>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    period: "Monthly",
                    tasks: [
                      "Visual inspections",
                      "Filter checks",
                      "Basic cleaning",
                    ],
                    color: "bg-blue-500",
                  },
                  {
                    period: "Quarterly",
                    tasks: [
                      "Deep cleaning",
                      "Calibration",
                      "Performance testing",
                    ],
                    color: "bg-green-500",
                  },
                  {
                    period: "Bi-Annual",
                    tasks: [
                      "Major inspections",
                      "Component replacement",
                      "System optimization",
                    ],
                    color: "bg-orange-500",
                  },
                  {
                    period: "Annual",
                    tasks: [
                      "Comprehensive audit",
                      "Warranty updates",
                      "Efficiency analysis",
                    ],
                    color: "bg-purple-500",
                  },
                ]?.map((schedule, index) => (
                  <div key={index} className="text-center space-y-4">
                    <div
                      className={`w-16 h-16 ${schedule?.color} rounded-full flex items-center justify-center mx-auto`}
                    >
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">
                        {schedule?.period}
                      </h4>
                      <ul className="space-y-1">
                        {schedule?.tasks?.map((task, taskIndex) => (
                          <li
                            key={taskIndex}
                            className="text-sm text-text-secondary"
                          >
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePrograms;
