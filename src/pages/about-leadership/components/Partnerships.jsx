import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const Partnerships = () => {
  const manufacturerPartners = [
    {
      id: 1,
      name: "Johnson Controls",
      category: "HVAC Systems",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      partnership: "Authorized Dealer",
      benefits: ["Preferred pricing", "Technical support", "Training programs"],
      description:
        "Leading provider of intelligent building technologies and HVAC solutions",
    },
    {
      id: 2,
      name: "Schneider Electric",
      category: "Electrical Systems",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      partnership: "Certified Partner",
      benefits: [
        "Advanced training",
        "Priority support",
        "Co-marketing opportunities",
      ],
      description:
        "Global specialist in energy management and automation solutions",
    },
    {
      id: 3,
      name: "Grundfos",
      category: "Pumping Solutions",
      logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      partnership: "Premium Partner",
      benefits: [
        "Extended warranties",
        "Technical consultation",
        "Product customization",
      ],
      description:
        "World leader in advanced pump solutions and water technology",
    },
    {
      id: 4,
      name: "Honeywell",
      category: "Building Automation",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      partnership: "Authorized Integrator",
      benefits: [
        "Certification programs",
        "Marketing support",
        "Lead generation",
      ],
      description:
        "Innovative technology solutions for building automation and control",
    },
    {
      id: 5,
      name: "Carrier",
      category: "Climate Solutions",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      partnership: "Factory Authorized",
      benefits: ["Factory training", "Warranty support", "Technical resources"],
      description: "Global leader in intelligent climate and energy solutions",
    },
    {
      id: 6,
      name: "Siemens",
      category: "Smart Infrastructure",
      logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      partnership: "Solution Partner",
      benefits: ["Innovation access", "Joint development", "Market expansion"],
      description:
        "Technology company focused on industry, infrastructure, and digitalization",
    },
  ];

  const industryAssociations = [
    {
      name: "ASHRAE",
      fullName:
        "American Society of Heating, Refrigerating and Air-Conditioning Engineers",
      role: "Corporate Member",
      benefits: [
        "Industry standards access",
        "Technical resources",
        "Networking opportunities",
      ],
    },
    {
      name: "NECA",
      fullName: "National Electrical Contractors Association",
      role: "Active Member",
      benefits: ["Training programs", "Safety resources", "Industry advocacy"],
    },
    {
      name: "MCAA",
      fullName: "Mechanical Contractors Association of America",
      role: "Board Member",
      benefits: [
        "Leadership role",
        "Industry influence",
        "Best practice sharing",
      ],
    },
    {
      name: "USGBC",
      fullName: "U.S. Green Building Council",
      role: "Member Organization",
      benefits: [
        "LEED resources",
        "Sustainability training",
        "Green building advocacy",
      ],
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      category: "Quality Management",
      description: "International standard for quality management systems",
      icon: "Award",
      color: "primary",
    },
    {
      name: "OSHA VPP",
      category: "Safety Excellence",
      description: "Voluntary Protection Program for workplace safety",
      icon: "Shield",
      color: "success",
    },
    {
      name: "LEED AP",
      category: "Green Building",
      description:
        "Leadership in Energy and Environmental Design certification",
      icon: "Leaf",
      color: "secondary",
    },
    {
      name: "NATE Certified",
      category: "Technical Excellence",
      description: "North American Technician Excellence certification",
      icon: "Settings",
      color: "accent",
    },
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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Handshake" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">
              Strategic Partnerships
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Trusted Industry
            <span className="block text-primary">Partnerships</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our strategic partnerships with leading manufacturers and industry
            organizations ensure we deliver cutting-edge solutions with the
            highest quality standards and competitive pricing.
          </p>
        </div>

        {/* Manufacturer Partners */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-text-primary text-center mb-12">
            Manufacturer Partners
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturerPartners?.map((partner) => (
              <div
                key={partner?.id}
                className="bg-surface rounded-xl p-6 shadow-brand hover-lift"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white shadow-brand">
                    <Image
                      src={partner?.logo}
                      alt={`${partner?.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary">
                      {partner?.name}
                    </h4>
                    <p className="text-sm text-primary font-medium">
                      {partner?.category}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-3 py-1 mb-3">
                    <Icon
                      name="CheckCircle"
                      size={14}
                      className="text-success"
                    />
                    <span className="text-sm font-medium text-success">
                      {partner?.partnership}
                    </span>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {partner?.description}
                  </p>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-text-primary mb-2">
                    Partnership Benefits:
                  </h5>
                  <div className="space-y-1">
                    {partner?.benefits?.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon
                          name="Check"
                          size={14}
                          className="text-secondary"
                        />
                        <span className="text-sm text-text-secondary">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Associations */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-text-primary text-center mb-12">
            Industry Associations
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {industryAssociations?.map((association, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-surface to-white rounded-xl p-8 shadow-brand hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Building" size={24} className="text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-xl font-bold text-text-primary">
                        {association?.name}
                      </h4>
                      <div className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                        {association?.role}
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {association?.fullName}
                    </p>

                    <div>
                      <h5 className="text-sm font-semibold text-text-primary mb-2">
                        Member Benefits:
                      </h5>
                      <div className="space-y-1">
                        {association?.benefits?.map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="flex items-center space-x-2"
                          >
                            <Icon
                              name="Star"
                              size={14}
                              className="text-warning"
                            />
                            <span className="text-sm text-text-secondary">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-text-primary text-center mb-12">
            Certifications & Standards
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications?.map((cert, index) => (
              <div
                key={index}
                className="text-center bg-surface rounded-xl p-6 shadow-brand hover-lift"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(
                    cert?.color
                  )}`}
                >
                  <Icon name={cert?.icon} size={24} />
                </div>

                <h4 className="text-lg font-bold text-text-primary mb-2">
                  {cert?.name}
                </h4>
                <p className="text-sm font-medium text-primary mb-3">
                  {cert?.category}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Value Proposition */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Why Our Partnerships Matter
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Cost Savings
                </h4>
                <p className="text-white/90 text-sm">
                  Preferred pricing and volume discounts passed directly to our
                  clients
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Latest Technology
                </h4>
                <p className="text-white/90 text-sm">
                  Early access to cutting-edge products and innovative solutions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Expert Support
                </h4>
                <p className="text-white/90 text-sm">
                  Direct technical support and training from manufacturer
                  experts
                </p>
              </div>
            </div>

            <p className="text-white/90 text-lg leading-relaxed">
              Our strategic partnerships ensure that every Delta Air project
              benefits from the latest technology, competitive pricing, and
              unmatched technical support—delivering superior value to our
              clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
