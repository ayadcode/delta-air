import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ServiceCard = ({ service, onExpand, isExpanded }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl border border-border shadow-brand transition-brand hover-lift ${
        isExpanded ? "ring-2 ring-primary/20" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-brand ${
                isHovered
                  ? "bg-primary text-white"
                  : "bg-primary/10 text-primary"
              }`}
            >
              <Icon name={service?.icon} size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary">
                {service?.title}
              </h3>
              <p className="text-sm text-text-secondary">{service?.category}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onExpand(service?.id)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconSize={20}
          />
        </div>

        {/* Description */}
        <p className="text-text-secondary mb-4 leading-relaxed">
          {service?.description}
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {service?.keyFeatures?.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon name="Check" size={16} className="text-success" />
              <span className="text-sm text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="border-t border-border pt-4 mt-4 space-y-4">
            {/* Technical Specifications */}
            <div>
              <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                <Icon name="Settings" size={16} className="mr-2" />
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service?.technicalSpecs?.map((spec, index) => (
                  <div key={index} className="text-sm text-text-secondary">
                    • {spec}
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Standards */}
            <div>
              <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                <Icon name="Shield" size={16} className="mr-2" />
                Compliance Standards
              </h4>
              <div className="flex flex-wrap gap-2">
                {service?.complianceStandards?.map((standard, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md font-medium"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Timeline */}
            <div>
              <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                <Icon name="Clock" size={16} className="mr-2" />
                Typical Project Timeline
              </h4>
              <div className="bg-muted rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Duration:</span>
                  <span className="text-sm font-medium text-text-primary">
                    {service?.timeline}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="default"
                className="flex-1"
                iconName="Download"
                iconPosition="left"
                iconSize={16}
              >
                Download Guide
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                iconName="Calculator"
                iconPosition="left"
                iconSize={16}
              >
                Get Estimate
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
