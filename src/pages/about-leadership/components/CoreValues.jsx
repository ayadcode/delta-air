import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const CoreValues = () => {
  const values = [
    {
      id: 1,
      title: "Innovation Excellence",
      description:
        "We continuously push the boundaries of MEP engineering, integrating cutting-edge technologies and sustainable practices to deliver solutions that exceed industry standards.",
      icon: "Lightbulb",
      color: "primary",
      projectExample: {
        name: "Smart Office Complex - Downtown",
        result:
          "Implemented IoT-enabled HVAC system reducing energy consumption by 35%",
      },
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Safety First",
      description:
        "Safety is non-negotiable in everything we do. Our comprehensive safety protocols and continuous training ensure zero-incident project delivery while protecting our team and clients.",
      icon: "Shield",
      color: "success",
      projectExample: {
        name: "Hospital Renovation Project",
        result:
          "Completed 18-month project with zero safety incidents and 100% compliance",
      },
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Client Partnership",
      description:
        "We build lasting relationships through transparent communication, collaborative problem-solving, and unwavering commitment to delivering on our promises.",
      icon: "Handshake",
      color: "secondary",
      projectExample: {
        name: "Multi-Phase Retail Development",
        result:
          "5-year partnership resulting in 12 successful projects and 98% client satisfaction",
      },
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Quality Craftsmanship",
      description:
        "Every installation reflects our commitment to precision and excellence. We take pride in delivering MEP systems that perform flawlessly for decades.",
      icon: "Settings",
      color: "accent",
      projectExample: {
        name: "Luxury Residential Tower",
        result: "Premium MEP installations with 25-year performance warranty",
      },
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      title: "Environmental Stewardship",
      description:
        "We're committed to sustainable practices that protect our environment while delivering cost-effective solutions that reduce our clients' carbon footprint.",
      icon: "Leaf",
      color: "success",
      projectExample: {
        name: "LEED Platinum Office Building",
        result:
          "Achieved highest sustainability rating with 40% energy savings",
      },
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      title: "Continuous Learning",
      description:
        "We invest in our team's growth through ongoing education, certifications, and exposure to emerging technologies, ensuring we stay at the forefront of MEP innovation.",
      icon: "GraduationCap",
      color: "warning",
      projectExample: {
        name: "Team Development Program",
        result:
          "100% of engineers maintain current certifications with 40+ hours annual training",
      },
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/20",
        gradient: "from-primary/5 to-primary/10",
      },
      secondary: {
        bg: "bg-secondary/10",
        text: "text-secondary",
        border: "border-secondary/20",
        gradient: "from-secondary/5 to-secondary/10",
      },
      accent: {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent/20",
        gradient: "from-accent/5 to-accent/10",
      },
      success: {
        bg: "bg-success/10",
        text: "text-success",
        border: "border-success/20",
        gradient: "from-success/5 to-success/10",
      },
      warning: {
        bg: "bg-warning/10",
        text: "text-warning",
        border: "border-warning/20",
        gradient: "from-warning/5 to-warning/10",
      },
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-surface to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Heart" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Core Values
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Values That Drive
            <span className="block text-secondary">Our Excellence</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our core values aren't just words on a wall—they're demonstrated
            through every project we complete and every relationship we build.
            Here's how we live our values through real results.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values?.map((value) => {
            const colors = getColorClasses(value?.color);

            return (
              <div
                key={value?.id}
                className={`bg-gradient-to-br ${colors?.gradient} rounded-2xl p-8 shadow-brand hover-lift border ${colors?.border}`}
              >
                {/* Value Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-12 h-12 ${colors?.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon
                      name={value?.icon}
                      size={24}
                      className={colors?.text}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {value?.title}
                    </h3>
                  </div>
                </div>
                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6">
                  {value?.description}
                </p>
                {/* Project Example */}
                <div className="bg-white/50 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Briefcase" size={16} className={colors?.text} />
                    <span className="text-sm font-medium text-text-primary">
                      Real Example
                    </span>
                  </div>

                  <h4 className="font-semibold text-text-primary mb-1">
                    {value?.projectExample?.name}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {value?.projectExample?.result}
                  </p>
                </div>
                {/* Background Image */}
                <div className="mt-6 rounded-xl overflow-hidden">
                  <Image
                    src={value?.image}
                    alt={`${value?.title} - Premier MEP Solutions core value demonstration`}
                    className="w-full h-32 object-cover opacity-80 hover:opacity-100 transition-brand"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Values in Action */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-brand-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Our Values in Action
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              These aren't just aspirational statements—they're measurable
              commitments that guide every decision and project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-success" />
              </div>
              <div className="text-3xl font-bold text-success mb-2">99.8%</div>
              <div className="text-sm text-text-secondary">Safety Record</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-text-secondary">
                Client Satisfaction
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={24} className="text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">35%</div>
              <div className="text-sm text-text-secondary">
                Avg. Energy Savings
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm text-text-secondary">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
