import React from "react";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const TeamContacts = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Michael Rodriguez",
      title: "Chief MEP Engineer",
      department: "Engineering Leadership",
      specialties: ["Commercial HVAC", "Energy Systems", "Project Management"],
      experience: "15+ years",
      certifications: ["PE", "LEED AP", "CEM"],
      phone: "(555) 123-4567 ext. 101",
      email: "michael.rodriguez@deltaair.com",
      // avatar:
      // "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      availability: "Available for consultations",
      responseTime: "Same day",
      projectTypes: ["Large Commercial", "Industrial", "Healthcare"],
      bio: `Michael leads our engineering team with over 15 years of experience in complex MEP systems. He specializes in energy-efficient solutions and has managed over $50M in MEP projects.`,
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Electrical Systems Director",
      department: "Electrical Engineering",
      specialties: [
        "Power Distribution",
        "Smart Building Systems",
        "Emergency Power",
      ],
      experience: "12+ years",
      certifications: ["PE", "NECA Certified", "NICET Level IV"],
      phone: "(555) 123-4567 ext. 102",
      email: "sarah.chen@deltaair.com",
      // avatar:
      // "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      availability: "Available for consultations",
      responseTime: "< 4 hours",
      projectTypes: ["Data Centers", "Hospitals", "Manufacturing"],
      bio: `Sarah is our electrical systems expert, known for innovative power solutions and smart building integrations. She has designed electrical systems for over 200 commercial projects.`,
    },
    {
      id: 3,
      name: "David Thompson",
      title: "Plumbing & Fire Safety Lead",
      department: "Plumbing Systems",
      specialties: [
        "Fire Suppression",
        "Water Treatment",
        "Sustainable Plumbing",
      ],
      experience: "18+ years",
      certifications: [
        "Master Plumber",
        "NICET Fire Protection",
        "Green Plumber",
      ],
      phone: "(555) 123-4567 ext. 103",
      email: "david.thompson@deltaair.com",
      // avatar:
      // "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      availability: "Available for consultations",
      responseTime: "< 6 hours",
      projectTypes: ["High-rise Buildings", "Educational", "Retail"],
      bio: `David brings nearly two decades of plumbing and fire safety expertise. He's known for innovative water conservation solutions and comprehensive fire protection systems.`,
    },
    {
      id: 4,
      name: "Jennifer Park",
      title: "HVAC Systems Manager",
      department: "HVAC Engineering",
      specialties: ["Climate Control", "Air Quality", "Energy Recovery"],
      experience: "10+ years",
      certifications: ["PE", "ASHRAE Certified", "HERS Rater"],
      phone: "(555) 123-4567 ext. 104",
      email: "jennifer.park@deltaair.com",
      // avatar:
      // "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      availability: "Available for consultations",
      responseTime: "< 3 hours",
      projectTypes: ["Office Buildings", "Residential", "Clean Rooms"],
      bio: `Jennifer specializes in advanced HVAC systems and indoor air quality solutions. She has designed climate control systems for over 150 projects across various industries.`,
    },
    {
      id: 5,
      name: "Robert Kim",
      title: "Emergency Services Coordinator",
      department: "Emergency Response",
      specialties: [
        "24/7 Emergency Response",
        "System Diagnostics",
        "Rapid Repairs",
      ],
      experience: "8+ years",
      certifications: [
        "Emergency Response Certified",
        "OSHA 30",
        "First Aid/CPR",
      ],
      phone: "(555) 911-MEP1",
      email: "emergency@deltaair.com",
      // avatar:
      // "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      availability: "24/7 Emergency Response",
      responseTime: "< 2 hours",
      projectTypes: [
        "Emergency Repairs",
        "System Failures",
        "Critical Infrastructure",
      ],
      bio: `Robert leads our emergency response team, ensuring rapid resolution of critical MEP system failures. Available 24/7 for urgent situations requiring immediate attention.`,
    },
    {
      id: 6,
      name: "Lisa Martinez",
      title: "Project Coordination Manager",
      department: "Project Management",
      specialties: [
        "Project Planning",
        "Client Relations",
        "Quality Assurance",
      ],
      experience: "12+ years",
      certifications: ["PMP", "LEED Green Associate", "Six Sigma Green Belt"],
      phone: "(555) 123-4567 ext. 105",
      email: "lisa.martinez@deltaair.com",
      // avatar:
      // "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      availability: "Available for consultations",
      responseTime: "< 2 hours",
      projectTypes: [
        "All Project Types",
        "Multi-phase Projects",
        "Complex Coordination",
      ],
      bio: `Lisa ensures seamless project execution from planning to completion. She coordinates all aspects of MEP projects and maintains our high standards of quality and client satisfaction.`,
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Connect with Our MEP Specialists
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get direct access to our experienced team members. Each specialist
            brings unique expertise to help solve your specific MEP challenges.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers?.map((member) => (
            <div
              key={member?.id}
              className="bg-surface rounded-2xl p-6 hover-lift"
            >
              {/* Member Header */}
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <Image
                    src={member?.avatar}
                    alt={member?.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-1">
                  {member?.name}
                </h3>
                <p className="text-primary font-medium mb-1">{member?.title}</p>
                <p className="text-sm text-text-secondary">
                  {member?.department}
                </p>
              </div>

              {/* Experience & Availability */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Experience:</span>
                  <span className="font-medium text-text-primary">
                    {member?.experience}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Response:</span>
                  <span className="font-medium text-text-primary">
                    {member?.responseTime}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-sm text-success font-medium">
                    {member?.availability}
                  </span>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-text-primary mb-3">
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member?.specialties?.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-text-primary mb-3">
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member?.certifications?.map((cert, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-lg font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Types */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-text-primary mb-3">
                  Project Types
                </h4>
                <div className="space-y-1">
                  {member?.projectTypes?.map((type, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon
                        name="Building"
                        size={12}
                        className="text-text-secondary"
                      />
                      <span className="text-xs text-text-secondary">
                        {type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {member?.bio}
                </p>
              </div>

              {/* Contact Actions */}
              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  className={`${
                    member?.id === 5
                      ? "bg-accent hover:bg-accent/90 text-white"
                      : "bg-primary hover:bg-primary/90 text-white"
                  }`}
                  iconName="Phone"
                  iconPosition="left"
                >
                  {member?.id === 5 ? "Emergency Call" : "Call Direct"}
                </Button>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Mail"
                    iconPosition="left"
                  >
                    Email
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Calendar"
                    iconPosition="left"
                  >
                    Schedule
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="space-y-2 text-xs text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={12} />
                    <span>{member?.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={12} />
                    <span className="truncate">{member?.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Not sure who to contact?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our project coordination team will connect you with the right
              specialist based on your specific MEP needs and project
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                iconName="Phone"
                iconPosition="left"
              >
                Call Main Line: (555) 123-4567
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                iconName="MessageSquare"
                iconPosition="left"
              >
                Start General Inquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamContacts;
