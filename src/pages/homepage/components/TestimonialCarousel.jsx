import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "Facilities Manager",
      company: "Metropolitan Hospital",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Premier MEP transformed our hospital's aging HVAC system into a state-of-the-art climate control solution. The installation was completed 2 weeks ahead of schedule with zero disruption to patient care. Our energy costs have dropped by 40% while maintaining perfect temperature control throughout all departments.`,
      project: "Hospital HVAC Modernization",
      savings: "$180,000 annually",
      timeline: "Completed 2 weeks early",
      highlight: "Zero patient care disruption",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Property Developer",
      company: "Urban Development Group",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Working with Premier MEP on our 40-story residential tower was exceptional. Their smart building integration and energy-efficient systems helped us achieve LEED Gold certification. The attention to detail and proactive communication throughout the project was outstanding. Every unit now has individual climate control with 50% lower operating costs.`,
      project: "Luxury Residential Tower",
      savings: "50% energy reduction",
      timeline: "LEED Gold certified",
      highlight: "Smart building integration",
    },
    {
      id: 3,
      name: "Jennifer Chen",
      title: "Operations Director",
      company: "TechCorp Manufacturing",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Premier MEP's industrial expertise was evident from day one. They redesigned our manufacturing facility's electrical and cooling systems to handle our increased production capacity. The new systems are 35% more efficient and have eliminated all the downtime we were experiencing. Their 24/7 maintenance support gives us complete peace of mind.`,
      project: "Manufacturing Facility Upgrade",
      savings: "35% efficiency improvement",
      timeline: "Zero production downtime",
      highlight: "24/7 maintenance support",
    },
    {
      id: 4,
      name: "David Thompson",
      title: "School District Superintendent",
      company: "Central Valley School District",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Premier MEP upgraded MEP systems across 12 schools in our district. Their phased approach ensured minimal disruption to classes, and the new energy-efficient systems have saved us over $300,000 annually. The improved air quality and lighting have created better learning environments for our 8,000 students.`,
      project: "Multi-School District Upgrade",
      savings: "$300,000 annually",
      timeline: "12 schools completed",
      highlight: "Improved learning environment",
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Restaurant Chain Owner",
      company: "Park Family Restaurants",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Premier MEP has been our go-to partner for all 15 restaurant locations. Their commercial kitchen ventilation systems and energy-efficient solutions have reduced our utility costs by 45% across all locations. When we had an emergency at our flagship location, they had a team there within 2 hours. Exceptional service and reliability.`,
      project: "Multi-Location Restaurant Chain",
      savings: "45% utility cost reduction",
      timeline: "15 locations served",
      highlight: "2-hour emergency response",
    },
  ];

  const metrics = [
    { label: "Average Cost Savings", value: "42%", icon: "TrendingDown" },
    { label: "Projects Completed Early", value: "89%", icon: "Clock" },
    { label: "Client Satisfaction", value: "98.7%", icon: "Heart" },
    { label: "Repeat Clients", value: "85%", icon: "RefreshCw" },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials?.length) % testimonials?.length
    );
    setIsPlaying(false);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 rounded-full text-success text-sm font-medium mb-4">
            <Icon name="MessageSquare" size={16} className="mr-2" />
            Client Success Stories
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            What Our Clients Say
          </h2>

          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real testimonials from satisfied clients who have experienced the
            Premier MEP difference in their projects.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {metrics?.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-brand border border-border text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={metric?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">
                {metric?.value}
              </div>
              <div className="text-sm text-text-secondary">{metric?.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden border border-border">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Client Info */}
              <div className="lg:col-span-1 bg-gradient-to-br from-primary to-secondary p-8 text-white">
                <div className="text-center space-y-6">
                  {/* Client Photo */}
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white/20">
                      <Image
                        src={current?.image}
                        alt={current?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2">
                      <Icon name="Quote" size={16} className="text-primary" />
                    </div>
                  </div>

                  {/* Client Details */}
                  <div>
                    <h3 className="text-xl font-bold mb-1">{current?.name}</h3>
                    <p className="text-white/80 text-sm mb-1">
                      {current?.title}
                    </p>
                    <p className="text-white/60 text-sm">{current?.company}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(current?.rating)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Project Highlights */}
                  <div className="space-y-3 pt-4 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-sm text-white/60 mb-1">Project</div>
                      <div className="text-sm font-medium">
                        {current?.project}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-white/60 mb-1">
                        Key Achievement
                      </div>
                      <div className="text-sm font-medium">
                        {current?.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <div className="h-full flex flex-col justify-center">
                  {/* Quote */}
                  <div className="mb-8">
                    <Icon
                      name="Quote"
                      size={48}
                      className="text-primary/20 mb-4"
                    />
                    <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed">
                      {current?.content}
                    </blockquote>
                  </div>

                  {/* Project Results */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-success/10 rounded-lg p-4 text-center">
                      <Icon
                        name="DollarSign"
                        size={24}
                        className="text-success mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold text-success">
                        {current?.savings}
                      </div>
                      <div className="text-xs text-text-secondary">
                        Cost Savings
                      </div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <Icon
                        name="Clock"
                        size={24}
                        className="text-primary mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold text-primary">
                        {current?.timeline}
                      </div>
                      <div className="text-xs text-text-secondary">
                        Timeline
                      </div>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-4 text-center">
                      <Icon
                        name="Award"
                        size={24}
                        className="text-secondary mx-auto mb-2"
                      />
                      <div className="text-sm font-semibold text-secondary">
                        {current?.highlight}
                      </div>
                      <div className="text-xs text-text-secondary">
                        Special Feature
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {testimonials?.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentTestimonial(index);
                            setIsPlaying(false);
                          }}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentTestimonial
                              ? "bg-primary"
                              : "bg-border"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevTestimonial}
                        iconName="ChevronLeft"
                        className="text-text-secondary hover:text-primary"
                      />

                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`p-2 rounded-lg transition-colors ${
                          isPlaying
                            ? "text-primary bg-primary/10"
                            : "text-text-secondary bg-muted"
                        }`}
                      >
                        <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
                      </button>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextTestimonial}
                        iconName="ChevronRight"
                        className="text-text-secondary hover:text-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-brand border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-text-secondary mb-6">
              Experience the Premier MEP difference for your next project. Get a
              free consultation and see how we can exceed your expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                Schedule Free Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="FileText"
                iconPosition="left"
              >
                View All Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
