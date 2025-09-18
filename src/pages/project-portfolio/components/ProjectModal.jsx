import React, { useState } from "react";
import Image from "../../../components/AppImage";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !project) return null;

  const tabs = [
    { id: "overview", label: "Overview", icon: "Eye" },
    { id: "technical", label: "Technical Details", icon: "Settings" },
    { id: "timeline", label: "Project Timeline", icon: "Calendar" },
    { id: "results", label: "Results & Impact", icon: "TrendingUp" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

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
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-brand-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-1">
                {project?.title}
              </h2>
              <div className="flex items-center text-text-secondary">
                <Icon name="MapPin" size={16} className="mr-2" />
                <span>{project?.location}</span>
                <span className="mx-2">•</span>
                <span>{project?.completionYear}</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              iconName="X"
              iconSize={24}
              className="text-text-secondary hover:text-text-primary"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row max-h-[calc(90vh-100px)]">
            {/* Image Gallery */}
            <div className="lg:w-1/2 relative">
              <div className="relative h-64 lg:h-full">
                <Image
                  src={project?.gallery?.[currentImageIndex]}
                  alt={`${project?.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Image Navigation */}
                {project?.gallery?.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-brand hover:bg-white transition-brand"
                    >
                      <Icon
                        name="ChevronLeft"
                        size={20}
                        className="text-text-primary"
                      />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-brand hover:bg-white transition-brand"
                    >
                      <Icon
                        name="ChevronRight"
                        size={20}
                        className="text-text-primary"
                      />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {project?.gallery?.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-brand ${
                            index === currentImageIndex
                              ? "bg-white"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Content Panel */}
            <div className="lg:w-1/2 flex flex-col">
              {/* Tabs */}
              <div className="flex border-b border-border overflow-x-auto">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center px-4 py-3 text-sm font-medium whitespace-nowrap transition-brand border-b-2 ${
                      activeTab === tab?.id
                        ? "border-primary text-primary"
                        : "border-transparent text-text-secondary hover:text-primary"
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} className="mr-2" />
                    {tab?.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-3">
                        Project Overview
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {project?.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text-primary mb-3">
                        MEP Systems
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {project?.systems?.map((system, index) => (
                          <div
                            key={index}
                            className="flex items-center bg-muted p-3 rounded-lg"
                          >
                            <Icon
                              name={getSystemIcon(system)}
                              size={18}
                              className="mr-3 text-primary"
                            />
                            <span className="text-sm font-medium text-text-primary">
                              {system}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          {project?.energySavings}
                        </div>
                        <div className="text-sm text-text-secondary">
                          Energy Savings
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">
                          {project?.costSavings}
                        </div>
                        <div className="text-sm text-text-secondary">
                          Cost Reduction
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "technical" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-3">
                        Technical Specifications
                      </h3>
                      <div className="space-y-4">
                        {project?.technicalSpecs?.map((spec, index) => (
                          <div
                            key={index}
                            className="border border-border rounded-lg p-4"
                          >
                            <h4 className="font-semibold text-text-primary mb-2">
                              {spec?.category}
                            </h4>
                            <ul className="space-y-1">
                              {spec?.details?.map((detail, detailIndex) => (
                                <li
                                  key={detailIndex}
                                  className="text-sm text-text-secondary flex items-start"
                                >
                                  <Icon
                                    name="Check"
                                    size={14}
                                    className="mr-2 text-success mt-0.5 flex-shrink-0"
                                  />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "timeline" && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                      Project Timeline
                    </h3>
                    <div className="space-y-4">
                      {project?.timeline?.map((phase, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                            <span className="text-xs font-bold text-primary-foreground">
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-text-primary">
                                {phase?.phase}
                              </h4>
                              <span className="text-sm text-text-secondary">
                                {phase?.duration}
                              </span>
                            </div>
                            <p className="text-sm text-text-secondary">
                              {phase?.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "results" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-3">
                        Project Impact
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {project?.results?.map((result, index) => (
                          <div key={index} className="bg-muted p-4 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-text-primary">
                                {result?.metric}
                              </h4>
                              <span className="text-lg font-bold text-primary">
                                {result?.value}
                              </span>
                            </div>
                            <p className="text-sm text-text-secondary">
                              {result?.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                      <div className="flex items-start">
                        <Icon
                          name="Quote"
                          size={20}
                          className="text-success mr-3 mt-1 flex-shrink-0"
                        />
                        <div>
                          <p className="text-text-primary italic mb-2">
                            "{project?.testimonial?.quote}"
                          </p>
                          <div className="text-sm text-text-secondary">
                            <strong>{project?.testimonial?.author}</strong>
                            <br />
                            {project?.testimonial?.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="border-t border-border p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center mr-4">
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
                      {project?.rating}.0 Rating
                    </span>
                  </div>
                  <Button
                    variant="default"
                    iconName="MessageSquare"
                    iconPosition="left"
                    iconSize={16}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Discuss Similar Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
