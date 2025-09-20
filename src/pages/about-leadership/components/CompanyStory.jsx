import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";

const CompanyStory = () => {
  const milestones = [
    {
      year: "1999",
      title: "Foundation & Vision",
      description:
        "Delta Air Solutions was founded with a mission to revolutionize infrastructure development through innovative engineering solutions.",
      icon: "Rocket",
    },
    {
      year: "2005",
      title: "First Major Contract",
      description:
        "Secured our first multi-million dollar commercial project, establishing Delta Air as a trusted partner for complex MEP installations.",
      icon: "Building",
    },
    {
      year: "2012",
      title: "Green Building Pioneer",
      description:
        "Became early adopters of sustainable MEP practices, helping clients achieve LEED certifications and energy efficiency goals.",
      icon: "Leaf",
    },
    {
      year: "2018",
      title: "Technology Integration",
      description:
        "Integrated smart building technologies and IoT solutions, positioning Delta Air at the forefront of intelligent infrastructure.",
      icon: "Cpu",
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description:
        "Recognized as a Delta Air contractor with over 500 successful projects and industry-leading safety standards.",
      icon: "Award",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="History" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Our Journey
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Building Tomorrow's Infrastructure
            <span className="block text-secondary">Since 1999</span>
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to industry leadership, Delta Air has
            consistently delivered innovative engineering solutions that shape
            the future of infrastructure development.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
              Our Founding Story
            </h3>

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Delta Air was born from a simple yet powerful vision: to
                transform how mechanical, electrical, and plumbing systems are
                designed, installed, and maintained in modern buildings. Our
                founders recognized that traditional MEP approaches were holding
                back the construction industry's potential.
              </p>

              <p>
                Starting with a small team of passionate engineers, we focused
                on delivering solutions that went beyond basic compliance. We
                pioneered integrated system designs that maximized efficiency,
                reduced costs, and enhanced building performance—principles that
                continue to guide us today.
              </p>

              <p>
                Today, Delta Air stands as a testament to what's possible when
                engineering expertise meets visionary thinking. We've grown from
                a local contractor to an industry leader, but our commitment to
                innovation and client success remains unchanged.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-brand">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-text-secondary">
                  Years of Excellence
                </div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-brand">
                <div className="text-3xl font-bold text-secondary mb-2">
                  50+
                </div>
                <div className="text-sm text-text-secondary">Team Members</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-brand-lg">
              <Image
                // src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Delta Air office building and team workspace"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating Achievement */}
            <div className="absolute -bottom-6 -right-6 bg-success rounded-xl p-6 shadow-brand-lg">
              <div className="flex items-center space-x-3">
                <Icon name="TrendingUp" size={24} className="text-white" />
                <div>
                  <div className="text-lg font-bold text-white">98%</div>
                  <div className="text-sm text-success-foreground">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-2xl lg:text-3xl font-bold text-text-primary text-center mb-12">
            Our Journey Through Time
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary to-secondary hidden lg:block"></div>

            <div className="space-y-12">
              {milestones?.map((milestone, index) => (
                <div
                  key={milestone?.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-brand hover-lift">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon
                            name={milestone?.icon}
                            size={20}
                            className="text-primary"
                          />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">
                            {milestone?.year}
                          </div>
                          <div className="text-lg font-semibold text-text-primary">
                            {milestone?.title}
                          </div>
                        </div>
                      </div>
                      <p className="text-text-secondary leading-relaxed">
                        {milestone?.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-brand"></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
