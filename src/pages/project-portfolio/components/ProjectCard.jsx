import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ProjectCard = ({ project, onViewDetails }) => {
  const getSystemIcon = (system) => {
    const iconMap = {
      HVAC: "Wind",
      Electrical: "Zap",
      Plumbing: "Droplets",
      "Fire Safety": "Shield",
      "Smart Systems": "Cpu",
      "Energy Management": "Battery",
    };
    return iconMap?.[system] || "Settings";
  };

  const getComplexityColor = (complexity) => {
    const colorMap = {
      Basic: "bg-green-100 text-green-800",
      Intermediate: "bg-yellow-100 text-yellow-800",
      Advanced: "bg-red-100 text-red-800",
      Expert: "bg-purple-100 text-purple-800",
    };
    return colorMap?.[complexity] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-xl shadow-brand hover-lift transition-brand border border-border overflow-hidden">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(
              project?.complexity
            )}`}
          >
            {project?.complexity}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-text-primary">
            {project?.duration}
          </span>
        </div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Project Title & Location */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-text-primary mb-2 line-clamp-2">
            {project?.title}
          </h3>
          <div className="flex items-center text-text-secondary text-sm">
            <Icon name="MapPin" size={16} className="mr-2" />
            <span>{project?.location}</span>
          </div>
        </div>

        {/* Project Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Systems & Industry */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {project?.systems?.slice(0, 3)?.map((system, index) => (
              <div
                key={index}
                className="flex items-center bg-muted px-3 py-1 rounded-lg"
              >
                <Icon
                  name={getSystemIcon(system)}
                  size={14}
                  className="mr-2 text-primary"
                />
                <span className="text-xs font-medium text-text-primary">
                  {system}
                </span>
              </div>
            ))}
            {project?.systems?.length > 3 && (
              <div className="flex items-center bg-muted px-3 py-1 rounded-lg">
                <span className="text-xs font-medium text-text-secondary">
                  +{project?.systems?.length - 3} more
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center text-xs text-text-secondary">
            <Icon name="Building" size={14} className="mr-2" />
            <span>{project?.industry}</span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted rounded-lg">
          <div className="text-center">
            <div className="text-lg font-bold text-primary">
              {project?.energySavings}
            </div>
            <div className="text-xs text-text-secondary">Energy Savings</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-secondary">
              {project?.costSavings}
            </div>
            <div className="text-xs text-text-secondary">Cost Reduction</div>
          </div>
        </div>

        {/* Client Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={16}
                  className={`${
                    i < project?.rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-text-primary">
              {project?.rating}.0
            </span>
          </div>
          <div className="text-xs text-text-secondary">
            {project?.completionYear}
          </div>
        </div>

        {/* Action Button */}
        <Button
          variant="outline"
          fullWidth
          onClick={() => onViewDetails(project)}
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          View Case Study
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
