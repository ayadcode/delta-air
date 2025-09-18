import React, { useState } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const Awards = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const awards = [
    {
      id: 1,
      title: "MEP Contractor of the Year 2024",
      organization: "Engineering News-Record",
      year: "2024",
      category: "industry",
      description:
        "Recognized for outstanding project delivery, innovation in MEP solutions, and commitment to sustainable building practices.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      significance:
        "Premier industry recognition for overall excellence in MEP contracting and project delivery.",
      icon: "Trophy",
    },
    {
      id: 2,
      title: "Safety Excellence Award",
      organization: "Associated General Contractors",
      year: "2024",
      category: "safety",
      description:
        "Achieved zero recordable incidents across all projects with over 500,000 work hours completed safely.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      significance:
        "Recognition for maintaining the highest safety standards and protecting our workforce.",
      icon: "Shield",
    },
    {
      id: 3,
      title: "Green Building Innovation Award",
      organization: "U.S. Green Building Council",
      year: "2023",
      category: "sustainability",
      description:
        "Innovative MEP design for LEED Platinum office complex achieving 45% energy savings over baseline.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      significance:
        "Demonstrates our leadership in sustainable MEP solutions and environmental stewardship.",
      icon: "Leaf",
    },
    {
      id: 4,
      title: "Technology Innovation Award",
      organization: "Smart Building Association",
      year: "2023",
      category: "technology",
      description:
        "Implementation of IoT-enabled building automation system reducing operational costs by 30%.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      significance:
        "Recognition for pioneering smart building technologies and digital transformation.",
      icon: "Cpu",
    },
    {
      id: 5,
      title: "Project Excellence Award",
      organization: "Mechanical Contractors Association",
      year: "2023",
      category: "project",
      description:
        "Outstanding mechanical system installation for luxury residential tower completed ahead of schedule.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      significance:
        "Acknowledges superior project management and technical execution capabilities.",
      icon: "Building",
    },
    {
      id: 6,
      title: "Employer of Choice Award",
      organization: "Construction Industry Institute",
      year: "2022",
      category: "workplace",
      description:
        "Recognized for exceptional workplace culture, employee development programs, and retention rates.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      significance:
        "Highlights our commitment to creating an outstanding workplace for our team members.",
      icon: "Users",
    },
    {
      id: 7,
      title: "Quality Achievement Award",
      organization: "Associated Builders and Contractors",
      year: "2022",
      category: "quality",
      description:
        "Exceptional quality standards maintained across all projects with 99.8% client satisfaction rating.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      significance:
        "Validates our unwavering commitment to delivering superior quality in every project.",
      icon: "Award",
    },
    {
      id: 8,
      title: "Community Impact Award",
      organization: "Local Chamber of Commerce",
      year: "2022",
      category: "community",
      description:
        "Outstanding community service through pro-bono MEP work for local schools and non-profit organizations.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      significance:
        "Recognizes our dedication to giving back to the community and supporting local initiatives.",
      icon: "Heart",
    },
  ];

  const categories = [
    { id: "all", label: "All Awards", icon: "Award" },
    { id: "industry", label: "Industry Recognition", icon: "Trophy" },
    { id: "safety", label: "Safety Excellence", icon: "Shield" },
    { id: "sustainability", label: "Sustainability", icon: "Leaf" },
    { id: "technology", label: "Technology", icon: "Cpu" },
    { id: "project", label: "Project Excellence", icon: "Building" },
    { id: "workplace", label: "Workplace", icon: "Users" },
    { id: "quality", label: "Quality", icon: "CheckCircle" },
    { id: "community", label: "Community", icon: "Heart" },
  ];

  const filteredAwards =
    selectedCategory === "all"
      ? awards
      : awards?.filter((award) => award?.category === selectedCategory);

  const getIconColor = (category) => {
    const colorMap = {
      industry: "text-primary",
      safety: "text-success",
      sustainability: "text-secondary",
      technology: "text-accent",
      project: "text-warning",
      workplace: "text-primary",
      quality: "text-success",
      community: "text-accent",
    };
    return colorMap?.[category] || "text-primary";
  };

  const getBgColor = (category) => {
    const colorMap = {
      industry: "bg-primary/10",
      safety: "bg-success/10",
      sustainability: "bg-secondary/10",
      technology: "bg-accent/10",
      project: "bg-warning/10",
      workplace: "bg-primary/10",
      quality: "bg-success/10",
      community: "bg-accent/10",
    };
    return colorMap?.[category] || "bg-primary/10";
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-warning/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Award" size={16} className="text-warning" />
            <span className="text-sm font-medium text-warning">
              Awards & Recognition
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Industry Recognition &
            <span className="block text-primary">Excellence Awards</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence has been recognized by leading industry
            organizations, reflecting our dedication to quality, safety,
            innovation, and client satisfaction.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories?.map((category) => (
              <Button
                key={category?.id}
                variant={
                  selectedCategory === category?.id ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedCategory(category?.id)}
                iconName={category?.icon}
                iconPosition="left"
                iconSize={16}
                className={
                  selectedCategory === category?.id
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                {category?.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredAwards?.map((award) => (
            <div
              key={award?.id}
              className="bg-white rounded-2xl shadow-brand hover-lift overflow-hidden"
            >
              {/* Award Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={award?.image}
                  alt={`${award?.title} - Premier MEP Solutions award recognition`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Award Icon */}
                <div
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center ${getBgColor(
                    award?.category
                  )} backdrop-blur-sm`}
                >
                  <Icon
                    name={award?.icon}
                    size={20}
                    className={getIconColor(award?.category)}
                  />
                </div>

                {/* Year Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-bold text-text-primary">
                    {award?.year}
                  </span>
                </div>
              </div>

              {/* Award Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-text-primary mb-2 leading-tight">
                    {award?.title}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {award?.organization}
                  </p>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {award?.description}
                </p>

                <div
                  className={`p-3 rounded-lg ${getBgColor(award?.category)}`}
                >
                  <div className="flex items-start space-x-2">
                    <Icon
                      name="Info"
                      size={16}
                      className={`${getIconColor(award?.category)} mt-0.5`}
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-1">
                        Significance
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {award?.significance}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Summary */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-brand-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Recognition by the Numbers
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our awards and certifications demonstrate our commitment to
              excellence across all aspects of MEP contracting and business
              operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-text-secondary">Industry Awards</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-success" />
              </div>
              <div className="text-3xl font-bold text-success mb-2">5</div>
              <div className="text-sm text-text-secondary">
                Safety Recognitions
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={24} className="text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">8</div>
              <div className="text-sm text-text-secondary">
                Sustainability Awards
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={24} className="text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-text-secondary">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
