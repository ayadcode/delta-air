import React from "react";
import Icon from "../../../components/AppIcon";

const ProjectStats = ({ stats }) => {
  const statItems = [
    {
      icon: "Building",
      value: stats?.totalProjects,
      label: "Projects Completed",
      color: "text-primary",
    },
    {
      icon: "Users",
      value: stats?.happyClients,
      label: "Happy Clients",
      color: "text-secondary",
    },
    {
      icon: "Zap",
      value: stats?.energySaved,
      label: "Energy Saved",
      color: "text-success",
    },
    {
      icon: "DollarSign",
      value: stats?.costSavings,
      label: "Client Savings",
      color: "text-accent",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Every project we complete contributes to a more efficient,
            sustainable, and comfortable built environment.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover-lift transition-brand">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4">
                  <Icon name={stat?.icon} size={32} className="text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat?.value}
                </div>
                <div className="text-white/90 font-medium">{stat?.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-2">98%</div>
            <div className="text-white/90">Client Satisfaction Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-2">15+</div>
            <div className="text-white/90">Years of Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/90">Emergency Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;
