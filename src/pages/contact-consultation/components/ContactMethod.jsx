import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const ContactMethods = () => {
  const [activeMethod, setActiveMethod] = useState("consultation");

  const contactMethods = [
    {
      id: "consultation",
      title: "Project Consultation",
      description:
        "Schedule a detailed discussion about your MEP project requirements",
      icon: "Users",
      color: "primary",
      features: [
        "Free initial consultation",
        "Technical assessment",
        "Project timeline",
        "Cost estimation",
      ],
    },
    {
      id: "emergency",
      title: "Emergency Services",
      description: "24/7 emergency response for critical MEP system failures",
      icon: "AlertTriangle",
      color: "accent",
      features: [
        "24/7 availability",
        "<2 hour response",
        "Emergency repairs",
        "System diagnostics",
      ],
    },
    {
      id: "maintenance",
      title: "Maintenance Programs",
      description:
        "Preventive maintenance and ongoing support for your MEP systems",
      icon: "Settings",
      color: "secondary",
      features: [
        "Scheduled maintenance",
        "System monitoring",
        "Performance optimization",
        "Extended warranties",
      ],
    },
    {
      id: "quote",
      title: "Request Quote",
      description:
        "Get detailed pricing for your specific MEP project requirements",
      icon: "FileText",
      color: "success",
      features: [
        "Detailed estimates",
        "Material specifications",
        "Timeline planning",
        "Competitive pricing",
      ],
    },
  ];

  const getColorClasses = (color, isActive) => {
    const colors = {
      primary: isActive
        ? "bg-primary text-white border-primary"
        : "bg-primary/5 text-primary border-primary/20 hover:bg-primary/10",
      accent: isActive
        ? "bg-accent text-white border-accent"
        : "bg-accent/5 text-accent border-accent/20 hover:bg-accent/10",
      secondary: isActive
        ? "bg-secondary text-white border-secondary"
        : "bg-secondary/5 text-secondary border-secondary/20 hover:bg-secondary/10",
      success: isActive
        ? "bg-success text-white border-success"
        : "bg-success/5 text-success border-success/20 hover:bg-success/10",
    };
    return colors?.[color];
  };

  return (
    <section className="py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Whether you need immediate emergency support or want to discuss a
            future project, we have the right communication channel for your
            needs.
          </p>
        </div>

        {/* Contact Method Tabs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactMethods?.map((method) => (
            <button
              key={method?.id}
              onClick={() => setActiveMethod(method?.id)}
              className={`p-6 rounded-xl border-2 transition-brand text-left ${getColorClasses(
                method?.color,
                activeMethod === method?.id
              )}`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Icon
                  name={method?.icon}
                  size={24}
                  className={
                    activeMethod === method?.id ? "text-white" : "text-current"
                  }
                />
                <h3 className="font-semibold">{method?.title}</h3>
              </div>
              <p
                className={`text-sm ${
                  activeMethod === method?.id
                    ? "text-white/90"
                    : "text-current opacity-80"
                }`}
              >
                {method?.description}
              </p>
            </button>
          ))}
        </div>

        {/* Active Method Details */}
        <div className="bg-white rounded-2xl shadow-brand p-8 lg:p-12">
          {contactMethods?.map(
            (method) =>
              activeMethod === method?.id && (
                <div
                  key={method?.id}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Method Info */}
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          method?.color === "primary"
                            ? "bg-primary/10 text-primary"
                            : method?.color === "accent"
                            ? "bg-accent/10 text-accent"
                            : method?.color === "secondary"
                            ? "bg-secondary/10 text-secondary"
                            : "bg-success/10 text-success"
                        }`}
                      >
                        <Icon name={method?.icon} size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary">
                        {method?.title}
                      </h3>
                    </div>

                    <p className="text-lg text-text-secondary mb-6">
                      {method?.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {method?.features?.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <Icon
                            name="Check"
                            size={16}
                            className="text-success"
                          />
                          <span className="text-text-primary">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Contact Actions */}
                    <div className="space-y-4">
                      {method?.id === "emergency" && (
                        <>
                          <Button
                            variant="default"
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto"
                            iconName="Phone"
                            iconPosition="left"
                          >
                            Call Emergency: (555) 911-MEP1
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto"
                            iconName="MessageSquare"
                            iconPosition="left"
                          >
                            Emergency Text: (555) 911-TEXT
                          </Button>
                        </>
                      )}

                      {method?.id === "consultation" && (
                        <>
                          <Button
                            variant="default"
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
                            iconName="Calendar"
                            iconPosition="left"
                          >
                            Schedule Free Consultation
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto"
                            iconName="Phone"
                            iconPosition="left"
                          >
                            Call: (555) 123-4567
                          </Button>
                        </>
                      )}

                      {method?.id === "maintenance" && (
                        <>
                          <Button
                            variant="default"
                            size="lg"
                            className="bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto"
                            iconName="Settings"
                            iconPosition="left"
                          >
                            Discuss Maintenance Plan
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto"
                            iconName="Download"
                            iconPosition="left"
                          >
                            Download Service Guide
                          </Button>
                        </>
                      )}

                      {method?.id === "quote" && (
                        <>
                          <Button
                            variant="default"
                            size="lg"
                            className="bg-success hover:bg-success/90 text-white w-full sm:w-auto"
                            iconName="FileText"
                            iconPosition="left"
                          >
                            Start Quote Request
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto"
                            iconName="Upload"
                            iconPosition="left"
                          >
                            Upload Project Plans
                          </Button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="bg-gradient-to-br from-surface to-muted rounded-xl p-8 text-center">
                    <div
                      className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${
                        method?.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : method?.color === "accent"
                          ? "bg-accent/10 text-accent"
                          : method?.color === "secondary"
                          ? "bg-secondary/10 text-secondary"
                          : "bg-success/10 text-success"
                      }`}
                    >
                      <Icon name={method?.icon} size={40} />
                    </div>

                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      Ready to Get Started?
                    </h4>
                    <p className="text-text-secondary">
                      Our team is standing by to help with your MEP project
                      needs.
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
