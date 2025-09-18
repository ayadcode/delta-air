import React from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary pt-20 lg:pt-24 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name="MessageSquare" size={24} className="text-white" />
              </div>
              <span className="text-white/80 font-medium">Get In Touch</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Let's Build Your
              <span className="block text-gradient-primary bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                MEP Solution
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              From emergency repairs to complex installations, our expert team
              is ready to deliver innovative MEP solutions tailored to your
              project needs.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  24/7
                </div>
                <div className="text-sm text-white/80">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  &lt;2hr
                </div>
                <div className="text-sm text-white/80">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  500+
                </div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-accent/20 border border-accent/30 rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="AlertTriangle" size={20} className="text-accent" />
                <h3 className="text-lg font-semibold text-white">
                  Emergency Services
                </h3>
              </div>
              <p className="text-white/80 mb-4">
                MEP system failure? Our emergency response team is available
                24/7 with guaranteed response times.
              </p>
              <Button
                variant="default"
                className="bg-accent hover:bg-accent/90 text-white"
                iconName="Phone"
                iconPosition="left"
              >
                Call Emergency: (555) 911-MEP1
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Cards */}
          <div className="space-y-6">
            {/* Primary Contact Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Users" size={24} className="text-white" />
                <h3 className="text-xl font-semibold text-white">
                  Speak with Our Experts
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-white/80" />
                  <span className="text-white">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-white/80" />
                  <span className="text-white">info@premiermep.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={18} className="text-white/80" />
                  <span className="text-white">
                    Mon-Fri: 7AM-7PM, Sat: 8AM-4PM
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-16"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-16"
                iconName="FileText"
                iconPosition="left"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
