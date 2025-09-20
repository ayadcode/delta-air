import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";

const OfficeLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState("headquarters");

  const locations = [
    {
      id: "headquarters",
      name: "Headquarters",
      type: "Main Office",
      address: "1234 Industrial Boulevard, Suite 500",
      city: "Denver, CO 80202",
      phone: "(555) 123-4567",
      email: "denver@deltaair.com",
      hours: "Mon-Fri: 7AM-7PM, Sat: 8AM-4PM",
      coordinates: "39.7392,-104.9903",
      serviceRadius: "50 miles",
      specialties: [
        "Commercial MEP",
        "Industrial Systems",
        "Emergency Services",
      ],
      teamSize: "25+ Engineers",
      responseTime: "<2 hours",
      projects: [
        "Denver Convention Center HVAC Upgrade",
        "University of Colorado Medical Center",
        "Denver International Airport Terminal",
      ],
    },
    {
      id: "north",
      name: "North Branch",
      type: "Regional Office",
      address: "5678 Commerce Drive",
      city: "Fort Collins, CO 80525",
      phone: "(555) 234-5678",
      email: "fortcollins@deltaair.com",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM",
      coordinates: "40.5853,-105.0844",
      serviceRadius: "40 miles",
      specialties: ["Residential MEP", "Green Building", "Solar Integration"],
      teamSize: "15+ Engineers",
      responseTime: "<3 hours",
      projects: [
        "Colorado State University Dormitories",
        "Fort Collins Municipal Building",
        "Poudre Valley Hospital Expansion",
      ],
    },
    {
      id: "south",
      name: "South Branch",
      type: "Regional Office",
      address: "9012 Technology Parkway",
      city: "Colorado Springs, CO 80906",
      phone: "(555) 345-6789",
      email: "coloradosprings@deltaair.com",
      hours: "Mon-Fri: 7AM-6PM, Sat: 8AM-2PM",
      coordinates: "38.8339,-104.8214",
      serviceRadius: "45 miles",
      specialties: ["Military Facilities", "Healthcare MEP", "Data Centers"],
      teamSize: "20+ Engineers",
      responseTime: "<2.5 hours",
      projects: [
        "Peterson Air Force Base Upgrades",
        "Penrose Hospital MEP Systems",
        "Colorado Springs Tech Center",
      ],
    },
  ];

  const currentLocation = locations?.find(
    (loc) => loc?.id === selectedLocation
  );

  return (
    <section className="py-16 lg:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Service Locations
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Strategically located across Colorado to provide rapid response and
            local expertise for all your MEP project needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Selector */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Choose Location
            </h3>
            <div className="space-y-4">
              {locations?.map((location) => (
                <button
                  key={location?.id}
                  onClick={() => setSelectedLocation(location?.id)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-brand ${
                    selectedLocation === location?.id
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-white hover:border-primary/30 text-text-primary"
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon
                      name="MapPin"
                      size={20}
                      className={
                        selectedLocation === location?.id
                          ? "text-primary"
                          : "text-text-secondary"
                      }
                    />
                    <div>
                      <h4 className="font-semibold">{location?.name}</h4>
                      <p className="text-sm opacity-80">{location?.type}</p>
                    </div>
                  </div>
                  <p className="text-sm opacity-80">{location?.city}</p>
                </button>
              ))}
            </div>

            {/* Service Coverage */}
            <div className="mt-8 bg-white rounded-xl p-6 border border-border">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="Target" size={20} className="mr-2 text-primary" />
                Service Coverage
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Total Coverage:</span>
                  <span className="font-medium text-text-primary">
                    135+ miles radius
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">
                    Emergency Response:
                  </span>
                  <span className="font-medium text-text-primary">
                    24/7 Statewide
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Team Size:</span>
                  <span className="font-medium text-text-primary">
                    60+ Engineers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-brand overflow-hidden">
              {/* Map */}
              <div className="h-64 lg:h-80 bg-muted relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={currentLocation?.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${currentLocation?.coordinates}&z=14&output=embed`}
                  className="border-0"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-text-primary">
                      {currentLocation?.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Location Info */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Details */}
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-6">
                      {currentLocation?.name}
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="MapPin"
                          size={20}
                          className="text-primary mt-0.5"
                        />
                        <div>
                          <p className="text-text-primary">
                            {currentLocation?.address}
                          </p>
                          <p className="text-text-secondary">
                            {currentLocation?.city}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Icon name="Phone" size={20} className="text-primary" />
                        <span className="text-text-primary">
                          {currentLocation?.phone}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" size={20} className="text-primary" />
                        <span className="text-text-primary">
                          {currentLocation?.email}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Icon name="Clock" size={20} className="text-primary" />
                        <span className="text-text-primary">
                          {currentLocation?.hours}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <Button
                        variant="default"
                        className="bg-primary hover:bg-primary/90"
                        iconName="Phone"
                        iconPosition="left"
                      >
                        Call Office
                      </Button>
                      <Button
                        variant="outline"
                        iconName="Navigation"
                        iconPosition="left"
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-4">
                      Service Information
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon
                            name="Target"
                            size={16}
                            className="text-secondary"
                          />
                          <span className="text-sm font-medium text-text-primary">
                            Service Radius
                          </span>
                        </div>
                        <p className="text-text-secondary ml-6">
                          {currentLocation?.serviceRadius}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon
                            name="Users"
                            size={16}
                            className="text-secondary"
                          />
                          <span className="text-sm font-medium text-text-primary">
                            Team Size
                          </span>
                        </div>
                        <p className="text-text-secondary ml-6">
                          {currentLocation?.teamSize}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon
                            name="Clock"
                            size={16}
                            className="text-secondary"
                          />
                          <span className="text-sm font-medium text-text-primary">
                            Response Time
                          </span>
                        </div>
                        <p className="text-text-secondary ml-6">
                          {currentLocation?.responseTime}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon
                            name="Settings"
                            size={16}
                            className="text-secondary"
                          />
                          <span className="text-sm font-medium text-text-primary">
                            Specialties
                          </span>
                        </div>
                        <div className="ml-6 space-y-1">
                          {currentLocation?.specialties?.map(
                            (specialty, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <Icon
                                  name="Check"
                                  size={12}
                                  className="text-success"
                                />
                                <span className="text-sm text-text-secondary">
                                  {specialty}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Recent Projects */}
                    <div className="mt-6">
                      <h5 className="text-sm font-medium text-text-primary mb-3">
                        Recent Projects
                      </h5>
                      <div className="space-y-2">
                        {currentLocation?.projects?.map((project, index) => (
                          <div
                            key={index}
                            className="text-sm text-text-secondary flex items-center space-x-2"
                          >
                            <Icon
                              name="Building"
                              size={12}
                              className="text-primary"
                            />
                            <span>{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
