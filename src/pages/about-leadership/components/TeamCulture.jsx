import React, { useState } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const TeamCulture = () => {
  const [activeTab, setActiveTab] = useState("workplace");

  const cultureAspects = {
    workplace: {
      title: "Modern Workplace",
      description:
        "Our state-of-the-art facilities foster collaboration, creativity, and professional growth in an environment designed for engineering excellence.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Delta Air modern office workspace",
        },
        {
          src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Collaborative meeting spaces and engineering workstations",
        },
        {
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Team collaboration and project planning sessions",
        },
      ],
      features: [
        "Open-concept engineering workspaces",
        "Advanced CAD and BIM workstations",
        "Collaborative project planning areas",
        "Modern conference and training facilities",
      ],
    },
    development: {
      title: "Professional Development",
      description:
        "We invest heavily in our team's growth through continuous learning, certifications, and exposure to cutting-edge MEP technologies.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Professional training and development sessions",
        },
        {
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Industry certification and continuing education programs",
        },
        {
          src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Technology training and skill development workshops",
        },
      ],
      features: [
        "Annual training budget of $5,000 per employee",
        "Industry certification support and reimbursement",
        "Mentorship programs for career advancement",
        "Conference attendance and networking opportunities",
      ],
    },
    collaboration: {
      title: "Team Collaboration",
      description:
        "Our collaborative culture breaks down silos, encouraging cross-functional teamwork that delivers innovative solutions for complex MEP challenges.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Cross-functional team collaboration and project planning",
        },
        {
          src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Engineering teams working together on MEP solutions",
        },
        {
          src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Project review meetings and technical discussions",
        },
      ],
      features: [
        "Cross-disciplinary project teams",
        "Regular knowledge sharing sessions",
        "Collaborative problem-solving workshops",
        "Open communication and feedback culture",
      ],
    },
  };

  const benefits = [
    {
      icon: "Heart",
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, wellness programs, and mental health support",
      color: "success",
    },
    {
      icon: "DollarSign",
      title: "Competitive Compensation",
      description:
        "Market-leading salaries, performance bonuses, and profit-sharing programs",
      color: "primary",
    },
    {
      icon: "Calendar",
      title: "Work-Life Balance",
      description:
        "Flexible schedules, remote work options, and generous PTO policies",
      color: "secondary",
    },
    {
      icon: "GraduationCap",
      title: "Growth Opportunities",
      description:
        "Clear career paths, leadership development, and educational support",
      color: "accent",
    },
    {
      icon: "Users",
      title: "Team Events",
      description:
        "Regular team building, company outings, and celebration events",
      color: "warning",
    },
    {
      icon: "Award",
      title: "Recognition Programs",
      description:
        "Employee of the month, project excellence awards, and peer recognition",
      color: "success",
    },
  ];

  const tabs = [
    { id: "workplace", label: "Workplace", icon: "Building" },
    { id: "development", label: "Development", icon: "GraduationCap" },
    { id: "collaboration", label: "Collaboration", icon: "Users" },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary",
      secondary: "bg-secondary/10 text-secondary",
      accent: "bg-accent/10 text-accent",
      success: "bg-success/10 text-success",
      warning: "bg-warning/10 text-warning",
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">
              Team Culture
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Where Excellence
            <span className="block text-primary">Meets Collaboration</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our culture is built on mutual respect, continuous learning, and
            shared success. We create an environment where talented
            professionals thrive and deliver exceptional MEP solutions.
          </p>
        </div>

        {/* Culture Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs?.map((tab) => (
              <Button
                key={tab?.id}
                variant={activeTab === tab?.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab?.id)}
                iconName={tab?.icon}
                iconPosition="left"
                className={
                  activeTab === tab?.id
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                {tab?.label}
              </Button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-brand-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
                  {cultureAspects?.[activeTab]?.title}
                </h3>

                <p className="text-text-secondary leading-relaxed mb-8">
                  {cultureAspects?.[activeTab]?.description}
                </p>

                <div className="space-y-4">
                  {cultureAspects?.[activeTab]?.features?.map(
                    (feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon
                          name="CheckCircle"
                          size={20}
                          className="text-success"
                        />
                        <span className="text-text-secondary">{feature}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {cultureAspects?.[activeTab]?.images?.map((image, index) => (
                  <div
                    key={index}
                    className={`rounded-xl overflow-hidden shadow-brand hover-lift ${
                      index === 0 ? "col-span-2" : ""
                    }`}
                  >
                    <Image
                      src={image?.src}
                      alt={image?.alt}
                      className={`w-full object-cover ${
                        index === 0 ? "h-48" : "h-32"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & Perks */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Benefits & Perks
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We believe in taking care of our team members with comprehensive
              benefits and perks that support both professional and personal
              well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits?.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-brand hover-lift"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(
                    benefit?.color
                  )}`}
                >
                  <Icon name={benefit?.icon} size={24} />
                </div>

                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {benefit?.title}
                </h4>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {benefit?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Join Our Team?
            </h3>

            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              We're always looking for talented professionals who share our
              passion for engineering excellence and innovation. Explore
              opportunities to grow your career with Delta Air.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                iconName="Briefcase"
                iconPosition="left"
              >
                View Open Positions
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Send"
                iconPosition="left"
              >
                Submit Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCulture;
