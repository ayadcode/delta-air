import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const InteractiveTools = ({ selectedService }) => {
  const [calculatorData, setCalculatorData] = useState({
    squareFootage: '',
    buildingType: 'office',
    efficiency: 'standard'
  });
  const [calculatorResult, setCalculatorResult] = useState(null);

  const toolsData = {
    mechanical: {
      title: 'HVAC System Calculator',
      description: 'Calculate optimal HVAC capacity and energy requirements for your space',
      icon: 'Calculator',
      fields: [
        { key: 'squareFootage', label: 'Square Footage', type: 'number', placeholder: '5000' },
        { key: 'buildingType', label: 'Building Type', type: 'select', options: ['office', 'retail', 'warehouse', 'healthcare'] },
        { key: 'efficiency', label: 'Efficiency Level', type: 'select', options: ['standard', 'high', 'premium'] }
      ]
    },
    electrical: {
      title: 'Electrical Load Calculator',
      description: 'Determine electrical capacity and distribution requirements',
      icon: 'Zap',
      fields: [
        { key: 'squareFootage', label: 'Square Footage', type: 'number', placeholder: '5000' },
        { key: 'buildingType', label: 'Building Type', type: 'select', options: ['office', 'retail', 'industrial', 'residential'] },
        { key: 'efficiency', label: 'Lighting Type', type: 'select', options: ['led', 'fluorescent', 'mixed'] }
      ]
    },
    plumbing: {
      title: 'Water System Calculator',
      description: 'Calculate water supply and waste system requirements',
      icon: 'Droplets',
      fields: [
        { key: 'squareFootage', label: 'Square Footage', type: 'number', placeholder: '5000' },
        { key: 'buildingType', label: 'Building Type', type: 'select', options: ['office', 'restaurant', 'hotel', 'healthcare'] },
        { key: 'efficiency', label: 'Fixture Efficiency', type: 'select', options: ['standard', 'watersense', 'premium'] }
      ]
    }
  };

  const currentTool = toolsData?.[selectedService] || toolsData?.mechanical;

  const handleInputChange = (key, value) => {
    setCalculatorData(prev => ({ ...prev, [key]: value }));
  };

  const calculateResults = () => {
    const { squareFootage, buildingType, efficiency } = calculatorData;
    if (!squareFootage) return;

    // Mock calculation logic
    const baseMultiplier = selectedService === 'mechanical' ? 25 : selectedService === 'electrical' ? 8 : 15;
    const typeMultiplier = buildingType === 'office' ? 1.0 : buildingType === 'retail' ? 1.2 : 1.5;
    const efficiencyMultiplier = efficiency === 'standard' ? 1.0 : efficiency === 'high' ? 0.8 : 0.6;
    
    const capacity = Math.round(parseInt(squareFootage) * baseMultiplier * typeMultiplier * efficiencyMultiplier);
    const estimatedCost = Math.round(capacity * 12.5);
    const energySavings = efficiency === 'premium' ? 35 : efficiency === 'high' ? 20 : 0;

    setCalculatorResult({
      capacity,
      estimatedCost,
      energySavings,
      unit: selectedService === 'mechanical' ? 'BTU/hr' : selectedService === 'electrical' ? 'kW' : 'GPM'
    });
  };

  const downloadableResources = [
    {
      title: 'Maintenance Schedule Template',
      description: 'Comprehensive maintenance checklist and scheduling guide',
      icon: 'Calendar',
      format: 'PDF'
    },
    {
      title: 'Code Compliance Checklist',
      description: 'Current building codes and compliance requirements',
      icon: 'CheckSquare',
      format: 'PDF'
    },
    {
      title: 'Energy Efficiency Guide',
      description: 'Best practices for optimizing system performance',
      icon: 'Leaf',
      format: 'PDF'
    },
    {
      title: 'Technical Specifications',
      description: 'Detailed technical documentation and standards',
      icon: 'FileText',
      format: 'PDF'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Calculator */}
          <div className="space-y-8">
            <div className="text-center lg:text-left space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name={currentTool?.icon} size={24} color="white" />
                </div>
                <h2 className="text-3xl font-bold text-text-primary">
                  {currentTool?.title}
                </h2>
              </div>
              <p className="text-text-secondary">
                {currentTool?.description}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-brand">
              <div className="space-y-6">
                {currentTool?.fields?.map((field) => (
                  <div key={field?.key}>
                    {field?.type === 'select' ? (
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-text-primary">
                          {field?.label}
                        </label>
                        <select
                          value={calculatorData?.[field?.key]}
                          onChange={(e) => handleInputChange(field?.key, e?.target?.value)}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          {field?.options?.map((option) => (
                            <option key={option} value={option}>
                              {option?.charAt(0)?.toUpperCase() + option?.slice(1)}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <Input
                        label={field?.label}
                        type={field?.type}
                        placeholder={field?.placeholder}
                        value={calculatorData?.[field?.key]}
                        onChange={(e) => handleInputChange(field?.key, e?.target?.value)}
                      />
                    )}
                  </div>
                ))}

                <Button
                  variant="default"
                  fullWidth
                  size="lg"
                  onClick={calculateResults}
                  iconName="Calculator"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  Calculate Requirements
                </Button>

                {calculatorResult && (
                  <div className="mt-6 p-6 bg-muted rounded-xl">
                    <h3 className="text-lg font-semibold text-text-primary mb-4">
                      Calculation Results
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {calculatorResult?.capacity?.toLocaleString()}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {calculatorResult?.unit}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">
                          ${calculatorResult?.estimatedCost?.toLocaleString()}
                        </div>
                        <div className="text-sm text-text-secondary">
                          Estimated Cost
                        </div>
                      </div>
                    </div>
                    {calculatorResult?.energySavings > 0 && (
                      <div className="mt-4 p-3 bg-success/10 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Icon name="Leaf" size={16} color="var(--color-success)" />
                          <span className="text-sm font-medium text-success">
                            Up to {calculatorResult?.energySavings}% energy savings
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Downloadable Resources */}
          <div className="space-y-8">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-3xl font-bold text-text-primary">
                Technical Resources
              </h2>
              <p className="text-text-secondary">
                Download comprehensive guides and documentation to support your project planning and maintenance.
              </p>
            </div>

            <div className="space-y-4">
              {downloadableResources?.map((resource, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-brand hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={resource?.icon} size={24} color="var(--color-secondary)" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-text-primary">
                          {resource?.title}
                        </h3>
                        <span className="text-xs font-medium text-text-secondary bg-muted px-2 py-1 rounded">
                          {resource?.format}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm">
                        {resource?.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Download"
                        iconPosition="left"
                        className="mt-3"
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <div className="text-center space-y-4">
                <Icon name="Headphones" size={48} color="white" className="mx-auto" />
                <h3 className="text-2xl font-bold">
                  Need Expert Consultation?
                </h3>
                <p className="text-white/90">
                  Our certified engineers are ready to discuss your specific requirements and provide customized solutions.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTools;