import React from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const FeaturedProjects = ({ projects, onViewDetails }) => {
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

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Featured Projects
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Discover our most innovative and impactful MEP solutions that showcase
          our technical expertise and commitment to excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects?.map((project, index) => (
          <div
            key={project?.id}
            className="bg-white rounded-2xl shadow-brand-lg overflow-hidden hover-lift transition-brand"
          >
            {/* Project Image */}
            <div className="relative h-64">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Featured Badge */}
              <div className="absolute top-4 left-4">
                <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center">
                  <Icon name="Star" size={14} className="mr-1 fill-current" />
                  Featured
                </div>
              </div>

              {/* Project Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project?.title}</h3>
                    <div className="flex items-center text-sm opacity-90">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {project?.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">
                      {project?.energySavings}
                    </div>
                    <div className="text-xs opacity-90">Energy Saved</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Description */}
              <p className="text-text-secondary mb-4 line-clamp-3">
                {project?.description}
              </p>

              {/* Systems Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {project?.systems?.slice(0, 3)?.map((system, systemIndex) => (
                  <div
                    key={systemIndex}
                    className="flex items-center justify-center bg-muted p-3 rounded-lg"
                  >
                    <Icon
                      name={getSystemIcon(system)}
                      size={16}
                      className="mr-2 text-primary"
                    />
                    <span className="text-xs font-medium text-text-primary">
                      {system}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">
                    {project?.costSavings}
                  </div>
                  <div className="text-xs text-text-secondary">Cost Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-secondary">
                    {project?.duration}
                  </div>
                  <div className="text-xs text-text-secondary">Duration</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={`${
                          i < project?.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {project?.rating}.0 Rating
                  </div>
                </div>
              </div>

              {/* Industry & Complexity */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-text-secondary">
                  <Icon name="Building" size={14} className="mr-2" />
                  {project?.industry}
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {project?.complexity}
                </span>
              </div>

              {/* Action Button */}
              <Button
                variant="default"
                fullWidth
                onClick={() => onViewDetails(project)}
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={16}
                className="bg-primary hover:bg-primary/90"
              >
                Explore Case Study
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
