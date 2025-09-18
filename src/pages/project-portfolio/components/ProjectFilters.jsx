import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ProjectFilters = ({
  filters,
  activeFilters,
  onFilterChange,
  onClearFilters,
  searchQuery,
  onSearchChange,
}) => {
  const filterCategories = [
    {
      key: "industry",
      label: "Industry",
      icon: "Building",
      options: filters?.industries,
    },
    {
      key: "system",
      label: "MEP Systems",
      icon: "Settings",
      options: filters?.systems,
    },
    {
      key: "complexity",
      label: "Complexity",
      icon: "BarChart3",
      options: filters?.complexities,
    },
    {
      key: "size",
      label: "Project Size",
      icon: "Maximize",
      options: filters?.sizes,
    },
  ];

  const handleFilterToggle = (category, value) => {
    const currentFilters = activeFilters?.[category] || [];
    const newFilters = currentFilters?.includes(value)
      ? currentFilters?.filter((f) => f !== value)
      : [...currentFilters, value];

    onFilterChange(category, newFilters);
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters)?.reduce(
      (count, filters) => count + filters?.length,
      0
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-brand border border-border p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Icon
            name="Search"
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
          />
          <input
            type="text"
            placeholder="Search projects by name, location, or description..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-brand"
          />
        </div>
      </div>
      {/* Filter Categories */}
      <div className="space-y-6">
        {filterCategories?.map((category) => (
          <div key={category?.key}>
            <div className="flex items-center mb-3">
              <Icon
                name={category?.icon}
                size={18}
                className="mr-2 text-primary"
              />
              <h4 className="font-semibold text-text-primary">
                {category?.label}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {category?.options?.map((option) => {
                const isActive =
                  activeFilters?.[category?.key]?.includes(option);
                return (
                  <button
                    key={option}
                    onClick={() => handleFilterToggle(category?.key, option)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-brand border ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-white text-text-primary border-border hover:bg-muted hover:border-primary"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {/* Filter Actions */}
      <div className="flex items-center justify-between pt-6 border-t border-border mt-6">
        <div className="text-sm text-text-secondary">
          {getActiveFilterCount() > 0 && (
            <span>
              {getActiveFilterCount()} filter
              {getActiveFilterCount() !== 1 ? "s" : ""} applied
            </span>
          )}
        </div>
        {getActiveFilterCount() > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            iconSize={16}
            className="text-text-secondary hover:text-primary"
          >
            Clear All
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectFilters;
