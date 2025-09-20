import React, { useState } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const LeadershipTeam = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const leaders = [
    {
      id: 1,
      name: "Michael Rodriguez",
      position: "Chief Executive Officer & Founder",
      experience: "25+ Years",
      // image:
      // "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: `Michael founded Delta Air with a vision to revolutionize infrastructure development. His leadership has guided the company through 25 years of growth and innovation.`,
      specializations: [
        "Strategic Planning",
        "Business Development",
        "Client Relations",
        "Industry Leadership",
      ],
      certifications: [
        "MBA - Business Administration",
        "PE - Professional Engineer",
        "LEED AP - Green Building",
      ],
      achievements: [
        "Led company growth from startup to industry leader",
        "Secured over $500M in project contracts",
        "Recognized as MEP Industry Innovator 2023",
      ],
      contact: {
        email: "michael.rodriguez@deltaair.com",
        linkedin: "linkedin.com/in/michael-rodriguez-mep",
      },
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "Chief Technology Officer",
      experience: "18+ Years",
      // image:
      // "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: `Sarah leads Delta Air's technology initiatives, driving innovation in smart building systems and sustainable MEP solutions. Her expertise spans both traditional engineering and cutting-edge IoT integration.`,
      specializations: [
        "Smart Building Technology",
        "IoT Integration",
        "Energy Management",
        "System Automation",
      ],
      certifications: [
        "MS - Electrical Engineering",
        "CISSP - Cybersecurity",
        "CEM - Certified Energy Manager",
      ],
      achievements: [
        "Implemented IoT solutions in 200+ buildings",
        "Reduced client energy costs by average 30%",
        "Patent holder for smart HVAC control systems",
      ],
      contact: {
        email: "sarah.chen@deltaair.com",
        linkedin: "linkedin.com/in/sarah-chen-tech",
      },
    },
    {
      id: 3,
      name: "David Thompson",
      position: "Chief Operations Officer",
      experience: "22+ Years",
      // image:
      // "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: `David oversees all operational aspects of Delta Air, ensuring project delivery excellence and maintaining our industry-leading safety standards across all installations.`,
      specializations: [
        "Project Management",
        "Safety Compliance",
        "Quality Control",
        "Team Leadership",
      ],
      certifications: [
        "PMP - Project Management",
        "OSHA 30-Hour Construction",
        "Six Sigma Black Belt",
      ],
      achievements: [
        "Maintained 99.8% safety record across all projects",
        "Delivered 500+ projects on time and budget",
        "Implemented lean construction methodologies",
      ],
      contact: {
        email: "david.thompson@deltaair.com",
        linkedin: "linkedin.com/in/david-thompson-ops",
      },
    },
    {
      id: 4,
      name: "Jennifer Martinez",
      position: "Chief Financial Officer",
      experience: "15+ Years",
      // image:
      // "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: `Jennifer manages Delta Air's financial strategy and growth initiatives. Her expertise in construction finance and risk management has been instrumental in the company's sustained profitability.`,
      specializations: [
        "Financial Planning",
        "Risk Management",
        "Contract Negotiation",
        "Investment Strategy",
      ],
      certifications: [
        "CPA - Certified Public Accountant",
        "MBA - Finance",
        "PMP - Project Management",
      ],
      achievements: [
        "Secured $50M in growth capital funding",
        "Improved profit margins by 25% over 5 years",
        "Established strategic partnerships with major suppliers",
      ],
      contact: {
        email: "jennifer.martinez@deltaair.com",
        linkedin: "linkedin.com/in/jennifer-martinez-cfo",
      },
    },
  ];

  const handleLeaderClick = (leader) => {
    setSelectedLeader(selectedLeader?.id === leader?.id ? null : leader);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">
              Leadership Team
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Meet Our
            <span className="block text-primary">Visionary Leaders</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our leadership team combines decades of engineering expertise with
            strategic vision to deliver innovative MEP solutions that exceed
            client expectations.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {leaders?.map((leader) => (
            <div
              key={leader?.id}
              className={`bg-white rounded-xl shadow-brand hover-lift cursor-pointer transition-brand ${
                selectedLeader?.id === leader?.id
                  ? "ring-2 ring-primary shadow-brand-lg"
                  : ""
              }`}
              onClick={() => handleLeaderClick(leader)}
            >
              <div className="p-6">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <Image
                      src={leader?.image}
                      alt={`${leader?.name} - ${leader?.position}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary rounded-full p-2">
                    <Icon name="User" size={16} className="text-white" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-text-primary mb-1">
                    {leader?.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {leader?.position}
                  </p>
                  <div className="inline-flex items-center space-x-1 bg-accent/10 rounded-full px-3 py-1">
                    <Icon name="Clock" size={12} className="text-accent" />
                    <span className="text-xs font-medium text-accent">
                      {leader?.experience}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex justify-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Mail"
                      iconSize={14}
                      className="text-text-secondary hover:text-primary"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Linkedin"
                      iconSize={14}
                      className="text-text-secondary hover:text-secondary"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName={
                        selectedLeader?.id === leader?.id
                          ? "ChevronUp"
                          : "ChevronDown"
                      }
                      iconSize={14}
                      className="text-text-secondary hover:text-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Leader Profile */}
        {selectedLeader && (
          <div className="bg-gradient-to-br from-surface to-white rounded-2xl p-8 shadow-brand-lg">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Leader Image & Basic Info */}
              <div className="lg:col-span-1">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
                    <Image
                      src={selectedLeader?.image}
                      alt={`${selectedLeader?.name} - ${selectedLeader?.position}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {selectedLeader?.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {selectedLeader?.position}
                  </p>

                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Mail"
                      iconPosition="left"
                      className="w-full justify-start"
                    >
                      Contact
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Linkedin"
                      iconPosition="left"
                      className="w-full justify-start"
                    >
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="lg:col-span-2 space-y-8">
                {/* Bio */}
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                    <Icon name="User" size={18} className="mr-2 text-primary" />
                    Biography
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {selectedLeader?.bio}
                  </p>
                </div>

                {/* Specializations */}
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                    <Icon
                      name="Target"
                      size={18}
                      className="mr-2 text-secondary"
                    />
                    Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader?.specializations?.map((spec, index) => (
                      <span
                        key={index}
                        className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                    <Icon name="Award" size={18} className="mr-2 text-accent" />
                    Certifications
                  </h4>
                  <div className="space-y-2">
                    {selectedLeader?.certifications?.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon
                          name="CheckCircle"
                          size={16}
                          className="text-success"
                        />
                        <span className="text-text-secondary">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                    <Icon
                      name="Trophy"
                      size={18}
                      className="mr-2 text-warning"
                    />
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {selectedLeader?.achievements?.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon
                          name="Star"
                          size={16}
                          className="text-warning mt-0.5"
                        />
                        <span className="text-text-secondary">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadershipTeam;
