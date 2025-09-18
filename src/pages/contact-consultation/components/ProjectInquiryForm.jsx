import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import { Checkbox } from "../../../components/ui/Checkbox";
import Icon from "../../../components/AppIcon";

const ProjectInquiryForm = () => {
  const [formData, setFormData] = useState({
    projectType: "",
    services: [],
    timeline: "",
    budget: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectDescription: "",
    hasPlans: false,
    needsEmergency: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    { value: "new-construction", label: "New Construction" },
    { value: "renovation", label: "Renovation/Retrofit" },
    { value: "maintenance", label: "Maintenance & Repair" },
    { value: "emergency", label: "Emergency Service" },
    { value: "consultation", label: "Design Consultation" },
  ];

  const serviceOptions = [
    { value: "electrical", label: "Electrical Systems" },
    { value: "plumbing", label: "Plumbing Systems" },
    { value: "hvac", label: "HVAC Systems" },
    { value: "fire-safety", label: "Fire Safety Systems" },
    { value: "automation", label: "Building Automation" },
    { value: "energy", label: "Energy Management" },
  ];

  const timelineOptions = [
    { value: "immediate", label: "Immediate (Emergency)" },
    { value: "1-2-weeks", label: "1-2 Weeks" },
    { value: "1-month", label: "1 Month" },
    { value: "2-3-months", label: "2-3 Months" },
    { value: "6-months", label: "6+ Months" },
    { value: "planning", label: "Still Planning" },
  ];

  const budgetOptions = [
    { value: "under-10k", label: "Under $10,000" },
    { value: "10k-50k", label: "$10,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "100k-500k", label: "$100,000 - $500,000" },
    { value: "over-500k", label: "Over $500,000" },
    { value: "discuss", label: "Prefer to Discuss" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleServiceChange = (service, checked) => {
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev?.services, service]
        : prev?.services?.filter((s) => s !== service),
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert(
      "Thank you for your inquiry! Our team will contact you within 24 hours to discuss your project."
    );
    setIsSubmitting(false);

    // Reset form
    setFormData({
      projectType: "",
      services: [],
      timeline: "",
      budget: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      projectDescription: "",
      hasPlans: false,
      needsEmergency: false,
    });
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData?.projectType && formData?.services?.length > 0;
      case 2:
        return formData?.timeline && formData?.budget;
      case 3:
        return (
          formData?.firstName &&
          formData?.lastName &&
          formData?.email &&
          formData?.phone
        );
      default:
        return false;
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Project Inquiry Wizard
          </h2>
          <p className="text-xl text-text-secondary">
            Tell us about your project and we'll connect you with the right MEP
            specialist
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3]?.map((step) => (
              <React.Fragment key={step}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step <= currentStep
                      ? "bg-primary text-white"
                      : "bg-muted text-text-secondary"
                  }`}
                >
                  {step < currentStep ? <Icon name="Check" size={20} /> : step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 ${
                      step < currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-surface rounded-2xl p-8 lg:p-12"
        >
          {/* Step 1: Project Type & Services */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  What type of project do you have?
                </h3>
                <p className="text-text-secondary">
                  Help us understand your MEP needs
                </p>
              </div>

              <Select
                label="Project Type"
                options={projectTypes}
                value={formData?.projectType}
                onChange={(value) => handleInputChange("projectType", value)}
                placeholder="Select your project type"
                required
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-4">
                  Which MEP services do you need? (Select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {serviceOptions?.map((service) => (
                    <Checkbox
                      key={service?.value}
                      label={service?.label}
                      checked={formData?.services?.includes(service?.value)}
                      onChange={(e) =>
                        handleServiceChange(service?.value, e?.target?.checked)
                      }
                    />
                  ))}
                </div>
              </div>

              <Checkbox
                label="This is an emergency situation requiring immediate attention"
                checked={formData?.needsEmergency}
                onChange={(e) =>
                  handleInputChange("needsEmergency", e?.target?.checked)
                }
                className="border-2 border-accent/20"
              />
            </div>
          )}

          {/* Step 2: Timeline & Budget */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Project Timeline & Budget
                </h3>
                <p className="text-text-secondary">
                  Help us plan the right approach for your project
                </p>
              </div>

              <Select
                label="Project Timeline"
                description="When do you need this project completed?"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleInputChange("timeline", value)}
                placeholder="Select your timeline"
                required
              />

              <Select
                label="Project Budget Range"
                description="This helps us recommend the most suitable solutions"
                options={budgetOptions}
                value={formData?.budget}
                onChange={(value) => handleInputChange("budget", value)}
                placeholder="Select budget range"
                required
              />

              <div>
                <Input
                  label="Project Description"
                  type="textarea"
                  placeholder="Describe your project requirements, challenges, or specific needs..."
                  value={formData?.projectDescription}
                  onChange={(e) =>
                    handleInputChange("projectDescription", e?.target?.value)
                  }
                  className="min-h-32"
                />
              </div>

              <Checkbox
                label="I have architectural plans or technical drawings to share"
                checked={formData?.hasPlans}
                onChange={(e) =>
                  handleInputChange("hasPlans", e?.target?.checked)
                }
              />
            </div>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Contact Information
                </h3>
                <p className="text-text-secondary">
                  How can our MEP specialists reach you?
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  value={formData?.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e?.target?.value)
                  }
                  required
                />
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                  value={formData?.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e?.target?.value)
                  }
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange("email", e?.target?.value)}
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange("phone", e?.target?.value)}
                  required
                />
              </div>

              <Input
                label="Company/Organization"
                type="text"
                placeholder="Your company name (optional)"
                value={formData?.company}
                onChange={(e) => handleInputChange("company", e?.target?.value)}
              />

              {/* Summary */}
              <div className="bg-white rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-text-primary mb-4">
                  Project Summary
                </h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Project Type:</strong>{" "}
                    {
                      projectTypes?.find(
                        (p) => p?.value === formData?.projectType
                      )?.label
                    }
                  </div>
                  <div>
                    <strong>Services:</strong>{" "}
                    {formData?.services
                      ?.map(
                        (s) =>
                          serviceOptions?.find((opt) => opt?.value === s)?.label
                      )
                      ?.join(", ")}
                  </div>
                  <div>
                    <strong>Timeline:</strong>{" "}
                    {
                      timelineOptions?.find(
                        (t) => t?.value === formData?.timeline
                      )?.label
                    }
                  </div>
                  <div>
                    <strong>Budget:</strong>{" "}
                    {
                      budgetOptions?.find((b) => b?.value === formData?.budget)
                        ?.label
                    }
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              iconName="ChevronLeft"
              iconPosition="left"
            >
              Previous
            </Button>

            <div className="text-sm text-text-secondary">
              Step {currentStep} of 3
            </div>

            {currentStep < 3 ? (
              <Button
                type="button"
                variant="default"
                onClick={nextStep}
                disabled={!isStepValid()}
                iconName="ChevronRight"
                iconPosition="right"
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                variant="default"
                loading={isSubmitting}
                disabled={!isStepValid()}
                iconName="Send"
                iconPosition="left"
                className="bg-primary hover:bg-primary/90"
              >
                Submit Inquiry
              </Button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProjectInquiryForm;
