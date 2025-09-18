import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const ServiceCalculator = () => {
  const [formData, setFormData] = useState({
    projectType: "",
    squareFootage: "",
    serviceType: "",
    timeline: "",
    complexity: "standard",
  });
  const [estimate, setEstimate] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const projectTypes = [
    { value: "commercial", label: "Commercial Building" },
    { value: "residential", label: "Residential Complex" },
    { value: "healthcare", label: "Healthcare Facility" },
    { value: "education", label: "Educational Institution" },
    { value: "industrial", label: "Industrial Facility" },
  ];

  const serviceTypes = [
    { value: "mechanical", label: "Mechanical Systems" },
    { value: "electrical", label: "Electrical Infrastructure" },
    { value: "plumbing", label: "Plumbing Solutions" },
    { value: "full-mep", label: "Complete MEP Package" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateEstimate = async () => {
    setIsCalculating(true);

    // Simulate calculation delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock calculation logic
    const baseRate = {
      mechanical: 15,
      electrical: 12,
      plumbing: 8,
      "full-mep": 35,
    };

    const complexityMultiplier = {
      standard: 1,
      complex: 1.3,
      premium: 1.6,
    };

    const projectMultiplier = {
      commercial: 1.2,
      residential: 1,
      healthcare: 1.5,
      education: 1.1,
      industrial: 1.4,
    };

    const sqft = parseInt(formData?.squareFootage) || 0;
    const rate = baseRate?.[formData?.serviceType] || 20;
    const complexity = complexityMultiplier?.[formData?.complexity] || 1;
    const project = projectMultiplier?.[formData?.projectType] || 1;

    const baseEstimate = sqft * rate * complexity * project;
    const lowEstimate = Math.round(baseEstimate * 0.8);
    const highEstimate = Math.round(baseEstimate * 1.2);

    setEstimate({
      low: lowEstimate,
      high: highEstimate,
      timeline: formData?.timeline || "8-12 weeks",
      breakdown: {
        design: Math.round(baseEstimate * 0.2),
        materials: Math.round(baseEstimate * 0.4),
        labor: Math.round(baseEstimate * 0.3),
        permits: Math.round(baseEstimate * 0.1),
      },
    });

    setIsCalculating(false);
  };

  const resetCalculator = () => {
    setFormData({
      projectType: "",
      squareFootage: "",
      serviceType: "",
      timeline: "",
      complexity: "standard",
    });
    setEstimate(null);
  };

  return (
    <div className="bg-white rounded-xl border border-border shadow-brand p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Calculator" size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary">
            Project Estimate Calculator
          </h3>
          <p className="text-sm text-text-secondary">
            Get preliminary pricing for your MEP project
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Project Type
            </label>
            <select
              value={formData?.projectType}
              onChange={(e) =>
                handleInputChange("projectType", e?.target?.value)
              }
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="">Select project type</option>
              {projectTypes?.map((type) => (
                <option key={type?.value} value={type?.value}>
                  {type?.label}
                </option>
              ))}
            </select>
          </div>

          <Input
            label="Square Footage"
            type="number"
            placeholder="Enter total square footage"
            value={formData?.squareFootage}
            onChange={(e) =>
              handleInputChange("squareFootage", e?.target?.value)
            }
          />

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Service Type
            </label>
            <select
              value={formData?.serviceType}
              onChange={(e) =>
                handleInputChange("serviceType", e?.target?.value)
              }
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="">Select service type</option>
              {serviceTypes?.map((service) => (
                <option key={service?.value} value={service?.value}>
                  {service?.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Project Complexity
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["standard", "complex", "premium"]?.map((level) => (
                <button
                  key={level}
                  onClick={() => handleInputChange("complexity", level)}
                  className={`px-3 py-2 text-sm rounded-lg border transition-brand ${
                    formData?.complexity === level
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-text-secondary border-border hover:border-primary"
                  }`}
                >
                  {level?.charAt(0)?.toUpperCase() + level?.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="default"
              onClick={calculateEstimate}
              loading={isCalculating}
              disabled={
                !formData?.projectType ||
                !formData?.squareFootage ||
                !formData?.serviceType
              }
              iconName="Calculator"
              iconPosition="left"
              className="flex-1"
            >
              Calculate Estimate
            </Button>
            <Button
              variant="outline"
              onClick={resetCalculator}
              iconName="RotateCcw"
              iconSize={16}
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {estimate ? (
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Icon
                  name="DollarSign"
                  size={16}
                  className="mr-2 text-success"
                />
                Estimated Project Cost
              </h4>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-text-secondary">Price Range:</span>
                  <span className="font-semibold text-text-primary">
                    ${estimate?.low?.toLocaleString()} - $
                    {estimate?.high?.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-text-secondary">Timeline:</span>
                  <span className="font-medium text-text-primary">
                    {estimate?.timeline}
                  </span>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium text-text-primary">
                    Cost Breakdown:
                  </h5>
                  {Object.entries(estimate?.breakdown)?.map(
                    ([category, amount]) => (
                      <div
                        key={category}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-text-secondary capitalize">
                          {category}:
                        </span>
                        <span className="text-text-primary">
                          ${amount?.toLocaleString()}
                        </span>
                      </div>
                    )
                  )}
                </div>

                <div className="pt-3 border-t border-border">
                  <Button
                    variant="default"
                    fullWidth
                    iconName="MessageSquare"
                    iconPosition="left"
                  >
                    Request Detailed Quote
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-muted rounded-lg p-8 text-center">
              <Icon
                name="Calculator"
                size={48}
                className="mx-auto text-text-secondary/50 mb-4"
              />
              <p className="text-text-secondary">
                Fill in the project details to get your preliminary estimate
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCalculator;
