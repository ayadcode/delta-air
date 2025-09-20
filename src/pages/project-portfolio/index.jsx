import React, { useState, useEffect } from "react";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import ProjectCard from "./components/ProjectCard";
import ProjectFilters from "./components/ProjectFilters";
import ProjectModal from "./components/ProjectModal";
import FeaturedProjects from "./components/FeaturedProjects";
import ProjectStats from "./components/ProjectStats";

const ProjectPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    industry: [],
    system: [],
    complexity: [],
    size: [],
  });
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "Metropolitan Hospital HVAC Modernization",
      location: "Downtown Medical District",
      description:
        "Complete HVAC system overhaul for a 500-bed hospital facility, including installation of energy-efficient chillers, air handling units, and smart building automation systems.",
      fullDescription: `This comprehensive project involved the complete modernization of the HVAC infrastructure for Metropolitan Hospital, a critical healthcare facility serving over 100,000 patients annually. The challenge was to upgrade aging systems while maintaining continuous operations in a sensitive medical environment.\n\nOur team implemented a phased approach, working during off-peak hours and coordinating closely with hospital staff to ensure zero disruption to patient care. The new system features state-of-the-art variable air volume controls, energy recovery ventilation, and advanced filtration systems that exceed healthcare industry standards.`,
      // image:
      // "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
      // gallery: [
      // "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      // ],
      systems: ["HVAC", "Smart Systems", "Energy Management"],
      industry: "Healthcare",
      complexity: "Expert",
      size: "Large",
      duration: "18 months",
      energySavings: "35%",
      costSavings: "$2.1M",
      rating: 5,
      completionYear: "2024",
      technicalSpecs: [
        {
          category: "HVAC Systems",
          details: [
            "4 x 500-ton magnetic bearing chillers with variable speed drives",
            "12 custom air handling units with energy recovery wheels",
            "Advanced building automation system with predictive maintenance",
            "HEPA filtration systems in critical care areas",
          ],
        },
        {
          category: "Energy Management",
          details: [
            "Smart grid integration with demand response capabilities",
            "LED lighting conversion with occupancy sensors",
            "Variable frequency drives on all major equipment",
            "Real-time energy monitoring and analytics platform",
          ],
        },
      ],
      timeline: [
        {
          phase: "Design & Planning",
          duration: "3 months",
          description:
            "Detailed system analysis, load calculations, and coordination with hospital operations",
        },
        {
          phase: "Phase 1 Implementation",
          duration: "6 months",
          description:
            "Installation of new chillers and primary mechanical systems",
        },
        {
          phase: "Phase 2 Implementation",
          duration: "6 months",
          description:
            "Air handling unit replacement and ductwork modifications",
        },
        {
          phase: "Testing & Commissioning",
          duration: "3 months",
          description: "System testing, balancing, and staff training",
        },
      ],
      results: [
        {
          metric: "Energy Reduction",
          value: "35%",
          description:
            "Annual energy consumption decreased by 35% compared to previous system",
        },
        {
          metric: "Cost Savings",
          value: "$2.1M",
          description: "Total operational cost savings over 10-year period",
        },
        {
          metric: "Indoor Air Quality",
          value: "99.9%",
          description:
            "Filtration efficiency for particles 0.3 microns and larger",
        },
      ],
      testimonial: {
        quote:
          "Delta Air's expertise and professionalism exceeded our expectations. They delivered a world-class HVAC system while maintaining our critical operations.",
        author: "Dr. Sarah Mitchell",
        position: "Chief Medical Officer, Metropolitan Hospital",
      },
    },
    {
      id: 2,
      title: "Green Office Complex Electrical Infrastructure",
      location: "Business District",
      description:
        "Design and installation of sustainable electrical systems for a LEED Platinum certified office building, featuring solar integration and smart energy management.",
      fullDescription: `This project represents the pinnacle of sustainable electrical design, serving as a model for future commercial developments. The 25-story office complex required a sophisticated electrical infrastructure that could support modern business needs while achieving aggressive sustainability targets.\n\nOur innovative approach included the integration of rooftop solar arrays, battery storage systems, and advanced power management controls. The building now operates at net-zero energy consumption during peak daylight hours and has become a showcase for sustainable commercial construction.`,
      // image:
      // "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      // gallery: [
      // "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      // ],
      systems: ["Electrical", "Smart Systems", "Energy Management"],
      industry: "Commercial",
      complexity: "Advanced",
      size: "Large",
      duration: "14 months",
      energySavings: "42%",
      costSavings: "$1.8M",
      rating: 5,
      completionYear: "2024",
      technicalSpecs: [
        {
          category: "Electrical Distribution",
          details: [
            "2000A main service with automatic transfer switches",
            "Smart electrical panels with remote monitoring",
            "LED lighting throughout with daylight harvesting",
            "Electric vehicle charging infrastructure",
          ],
        },
        {
          category: "Renewable Energy",
          details: [
            "500kW rooftop solar photovoltaic system",
            "Battery energy storage system (1MWh capacity)",
            "Grid-tie inverters with power factor correction",
            "Real-time energy production monitoring",
          ],
        },
      ],
      timeline: [
        {
          phase: "Electrical Design",
          duration: "2 months",
          description:
            "Load analysis, solar sizing, and electrical system design",
        },
        {
          phase: "Infrastructure Installation",
          duration: "8 months",
          description: "Main electrical distribution and panel installation",
        },
        {
          phase: "Solar & Storage",
          duration: "3 months",
          description: "Solar array and battery system installation",
        },
        {
          phase: "Testing & Commissioning",
          duration: "1 month",
          description:
            "System integration testing and performance verification",
        },
      ],
      results: [
        {
          metric: "Energy Independence",
          value: "85%",
          description:
            "Building generates 85% of its energy needs from renewable sources",
        },
        {
          metric: "Carbon Reduction",
          value: "60%",
          description:
            "Annual carbon footprint reduced by 60% compared to conventional buildings",
        },
        {
          metric: "LEED Points",
          value: "18",
          description:
            "Electrical systems contributed 18 points toward LEED Platinum certification",
        },
      ],
      testimonial: {
        quote:
          "The electrical infrastructure Delta Air designed has made our building a model of sustainability and efficiency in the business district.",
        author: "Michael Chen",
        position: "Property Manager, Green Office Complex",
      },
    },
    {
      id: 3,
      title: "Luxury Resort Plumbing & Fire Safety Systems",
      location: "Coastal Resort Area",
      description:
        "Comprehensive plumbing and fire protection systems for a 300-room luxury resort, including water recycling systems and advanced fire suppression technology.",
      fullDescription: `This prestigious resort project demanded the highest standards of luxury and safety, requiring innovative solutions for water management and fire protection across multiple buildings and amenities. The complex included guest rooms, restaurants, spa facilities, and recreational areas, each with unique requirements.\n\nOur team designed and installed a sophisticated water management system featuring greywater recycling, rainwater harvesting, and advanced filtration systems. The fire protection system incorporates the latest in suppression technology, including mist systems for sensitive areas and foam systems for high-risk zones.`,
      // image:
      // "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      // gallery: [
      // "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
      // ],
      systems: ["Plumbing", "Fire Safety", "Smart Systems"],
      industry: "Hospitality",
      complexity: "Advanced",
      size: "Large",
      duration: "20 months",
      energySavings: "28%",
      costSavings: "$1.2M",
      rating: 5,
      completionYear: "2023",
      technicalSpecs: [
        {
          category: "Plumbing Systems",
          details: [
            "Greywater recycling system processing 10,000 gallons/day",
            "Rainwater harvesting with 50,000-gallon storage",
            "High-efficiency fixtures throughout all facilities",
            "Smart leak detection with automatic shutoff valves",
          ],
        },
        {
          category: "Fire Protection",
          details: [
            "Wet and dry sprinkler systems with zone control",
            "Water mist systems for electronics and art areas",
            "Foam suppression for kitchen and mechanical areas",
            "Advanced fire alarm with voice evacuation",
          ],
        },
      ],
      timeline: [
        {
          phase: "System Design",
          duration: "4 months",
          description:
            "Hydraulic calculations, fire modeling, and system design",
        },
        {
          phase: "Underground Infrastructure",
          duration: "6 months",
          description:
            "Water mains, sewer systems, and fire service installation",
        },
        {
          phase: "Building Systems",
          duration: "8 months",
          description: "In-building plumbing and fire protection installation",
        },
        {
          phase: "Testing & Commissioning",
          duration: "2 months",
          description:
            "Pressure testing, flow testing, and system commissioning",
        },
      ],
      results: [
        {
          metric: "Water Conservation",
          value: "40%",
          description:
            "Reduced water consumption through recycling and efficient fixtures",
        },
        {
          metric: "Fire Safety Rating",
          value: "Class A",
          description:
            "Achieved highest fire safety classification from local authorities",
        },
        {
          metric: "Guest Satisfaction",
          value: "4.9/5",
          description:
            "Water pressure and temperature consistency rated excellent by guests",
        },
      ],
      testimonial: {
        quote:
          "Delta Air delivered exceptional plumbing and fire safety systems that exceed industry standards while supporting our sustainability goals.",
        author: "Amanda Rodriguez",
        position: "General Manager, Coastal Luxury Resort",
      },
    },
    {
      id: 4,
      title: "Smart Manufacturing Facility MEP Integration",
      location: "Industrial Park",
      description:
        "Complete MEP systems design for a state-of-the-art manufacturing facility with integrated automation and energy monitoring systems.",
      fullDescription: `This cutting-edge manufacturing facility required a fully integrated MEP approach to support advanced production processes while maintaining optimal energy efficiency. The 200,000 square foot facility houses precision manufacturing equipment that demands stable environmental conditions and reliable power distribution.\n\nOur integrated approach combined HVAC, electrical, and plumbing systems with advanced automation controls, creating a smart facility that adapts to production demands in real-time. The result is a manufacturing environment that maintains precise conditions while optimizing energy consumption.`,
      // image:
      // "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop",
      // gallery: [
      // "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      // ],
      systems: ["HVAC", "Electrical", "Plumbing", "Smart Systems"],
      industry: "Industrial",
      complexity: "Expert",
      size: "Large",
      duration: "24 months",
      energySavings: "45%",
      costSavings: "$3.2M",
      rating: 5,
      completionYear: "2024",
      technicalSpecs: [
        {
          category: "HVAC Systems",
          details: [
            "Precision temperature control (±1°F) for production areas",
            "Clean room HVAC with HEPA filtration",
            "Heat recovery systems for process cooling",
            "Variable air volume systems with demand control",
          ],
        },
        {
          category: "Electrical Infrastructure",
          details: [
            "5MW electrical service with redundant feeds",
            "Uninterruptible power supply for critical processes",
            "Motor control centers with variable frequency drives",
            "Power quality monitoring and correction systems",
          ],
        },
      ],
      timeline: [
        {
          phase: "Engineering Design",
          duration: "6 months",
          description:
            "Process analysis, load calculations, and integrated system design",
        },
        {
          phase: "Infrastructure Phase",
          duration: "10 months",
          description:
            "Major mechanical and electrical infrastructure installation",
        },
        {
          phase: "Systems Integration",
          duration: "6 months",
          description: "Control system programming and equipment integration",
        },
        {
          phase: "Commissioning",
          duration: "2 months",
          description: "System testing, optimization, and operator training",
        },
      ],
      results: [
        {
          metric: "Production Uptime",
          value: "99.8%",
          description:
            "System reliability ensures minimal production interruptions",
        },
        {
          metric: "Energy Efficiency",
          value: "45%",
          description:
            "Reduced energy consumption compared to conventional facilities",
        },
        {
          metric: "Environmental Control",
          value: "±0.5°F",
          description:
            "Temperature stability exceeds manufacturing requirements",
        },
      ],
      testimonial: {
        quote:
          "Delta Air integrated approach created a manufacturing environment that supports our precision processes while delivering exceptional energy efficiency.",
        author: "David Park",
        position: "Plant Manager, Advanced Manufacturing Corp",
      },
    },
    {
      id: 5,
      title: "University Campus Energy Retrofit",
      location: "State University",
      description:
        "Campus-wide energy efficiency retrofit including HVAC upgrades, LED lighting conversion, and smart building automation across 15 buildings.",
      fullDescription: `This comprehensive campus retrofit project addressed aging infrastructure across 15 academic and residential buildings, totaling over 2 million square feet. The university sought to reduce operational costs while improving comfort and learning environments for students and faculty.\n\nOur phased approach minimized disruption to academic schedules while delivering significant energy savings. The project included complete HVAC system upgrades, campus-wide LED lighting conversion, and implementation of a centralized building automation system that provides real-time monitoring and control.`,
      // image:
      // "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      // gallery: [
      // "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop",
      // ],
      systems: ["HVAC", "Electrical", "Energy Management", "Smart Systems"],
      industry: "Education",
      complexity: "Advanced",
      size: "Large",
      duration: "36 months",
      energySavings: "38%",
      costSavings: "$4.5M",
      rating: 5,
      completionYear: "2023",
      technicalSpecs: [
        {
          category: "HVAC Upgrades",
          details: [
            "High-efficiency boilers and chillers across campus",
            "Variable air volume systems in academic buildings",
            "Energy recovery ventilation in dormitories",
            "Smart thermostats with occupancy sensing",
          ],
        },
        {
          category: "Lighting Systems",
          details: [
            "LED conversion for 50,000+ fixtures campus-wide",
            "Daylight harvesting in classrooms and libraries",
            "Occupancy sensors in all common areas",
            "Emergency lighting with battery backup systems",
          ],
        },
      ],
      timeline: [
        {
          phase: "Energy Audit & Design",
          duration: "6 months",
          description: "Comprehensive energy assessment and retrofit design",
        },
        {
          phase: "Phase 1: Academic Buildings",
          duration: "12 months",
          description: "HVAC and lighting upgrades in 8 academic buildings",
        },
        {
          phase: "Phase 2: Residential Buildings",
          duration: "12 months",
          description: "Dormitory and dining facility improvements",
        },
        {
          phase: "Phase 3: Athletics & Recreation",
          duration: "6 months",
          description: "Sports facilities and recreation center upgrades",
        },
      ],
      results: [
        {
          metric: "Annual Savings",
          value: "$450K",
          description:
            "Yearly operational cost reduction from energy efficiency measures",
        },
        {
          metric: "Carbon Reduction",
          value: "2,500 tons",
          description:
            "Annual CO2 emissions reduction equivalent to removing 500 cars",
        },
        {
          metric: "Student Satisfaction",
          value: "92%",
          description:
            "Improved comfort and learning environment satisfaction scores",
        },
      ],
      testimonial: {
        quote:
          "Delta Air transformed our campus infrastructure while respecting our academic mission. The energy savings allow us to invest more in education.",
        author: "Dr. Jennifer Walsh",
        position: "Vice President of Operations, State University",
      },
    },
    {
      id: 6,
      title: "Data Center Critical Systems Design",
      location: "Technology District",
      description:
        "Mission-critical MEP systems for a Tier III data center, featuring redundant power, precision cooling, and advanced fire suppression systems.",
      fullDescription: `This mission-critical data center project required the highest levels of reliability and redundancy to support 24/7 operations for cloud computing services. The facility houses thousands of servers generating significant heat loads while demanding uninterrupted power and precise environmental control.\n\nOur design incorporates N+1 redundancy across all critical systems, ensuring continuous operation even during maintenance or equipment failures. The precision cooling system maintains strict temperature and humidity controls, while the electrical infrastructure provides multiple levels of backup power protection.`,
      // image:
      // "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      // gallery: [
      // "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      // ],
      systems: ["HVAC", "Electrical", "Fire Safety", "Smart Systems"],
      industry: "Technology",
      complexity: "Expert",
      size: "Medium",
      duration: "16 months",
      energySavings: "25%",
      costSavings: "$2.8M",
      rating: 5,
      completionYear: "2024",
      technicalSpecs: [
        {
          category: "Power Systems",
          details: [
            "Dual utility feeds with automatic transfer switches",
            "N+1 UPS systems with 15-minute battery backup",
            "Diesel generators with 72-hour fuel capacity",
            "Power distribution units with remote monitoring",
          ],
        },
        {
          category: "Cooling Systems",
          details: [
            "Precision air conditioning with hot aisle containment",
            "Chilled water systems with redundant pumps",
            "Free cooling economizers for energy efficiency",
            "Real-time temperature and humidity monitoring",
          ],
        },
      ],
      timeline: [
        {
          phase: "Critical Systems Design",
          duration: "4 months",
          description:
            "Redundancy analysis, load calculations, and system design",
        },
        {
          phase: "Infrastructure Installation",
          duration: "8 months",
          description:
            "Electrical distribution and cooling system installation",
        },
        {
          phase: "Testing & Commissioning",
          duration: "3 months",
          description: "Redundancy testing and performance verification",
        },
        {
          phase: "Certification",
          duration: "1 month",
          description: "Tier III certification and final documentation",
        },
      ],
      results: [
        {
          metric: "Uptime Guarantee",
          value: "99.982%",
          description:
            "Tier III certification ensures maximum 1.6 hours downtime annually",
        },
        {
          metric: "PUE Rating",
          value: "1.25",
          description:
            "Power Usage Effectiveness rating indicates high energy efficiency",
        },
        {
          metric: "Cooling Efficiency",
          value: "30%",
          description:
            "Improved cooling efficiency compared to traditional data centers",
        },
      ],
      testimonial: {
        quote:
          "Delta Air delivered a data center infrastructure that exceeds our reliability requirements while optimizing operational efficiency.",
        author: "Robert Kim",
        position: "CTO, CloudTech Solutions",
      },
    },
  ];

  // Filter configuration
  const filterConfig = {
    industries: [
      "Healthcare",
      "Commercial",
      "Hospitality",
      "Industrial",
      "Education",
      "Technology",
    ],
    systems: [
      "HVAC",
      "Electrical",
      "Plumbing",
      "Fire Safety",
      "Smart Systems",
      "Energy Management",
    ],
    complexities: ["Basic", "Intermediate", "Advanced", "Expert"],
    sizes: ["Small", "Medium", "Large"],
  };

  // Project statistics
  const projectStats = {
    totalProjects: "150+",
    happyClients: "98%",
    energySaved: "40M kWh",
    costSavings: "$25M+",
  };

  // Featured projects (first 2 projects)
  const featuredProjects = projects?.slice(0, 2);

  // Filter projects based on search and filters
  useEffect(() => {
    let filtered = projects;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered?.filter(
        (project) =>
          project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
          project?.location
            ?.toLowerCase()
            ?.includes(searchQuery?.toLowerCase()) ||
          project?.description
            ?.toLowerCase()
            ?.includes(searchQuery?.toLowerCase()) ||
          project?.industry?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    // Apply category filters
    Object.keys(activeFilters)?.forEach((category) => {
      if (activeFilters?.[category]?.length > 0) {
        filtered = filtered?.filter((project) => {
          switch (category) {
            case "industry":
              return activeFilters?.[category]?.includes(project?.industry);
            case "system":
              return project?.systems?.some((system) =>
                activeFilters?.[category]?.includes(system)
              );
            case "complexity":
              return activeFilters?.[category]?.includes(project?.complexity);
            case "size":
              return activeFilters?.[category]?.includes(project?.size);
            default:
              return true;
          }
        });
      }
    });

    setFilteredProjects(filtered);
  }, [searchQuery, activeFilters]);

  const handleFilterChange = (category, filters) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: filters,
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({
      industry: [],
      system: [],
      complexity: [],
      size: [],
    });
    setSearchQuery("");
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Project Portfolio
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Discover our technical expertise through comprehensive case
              studies showcasing innovative MEP solutions across diverse
              industries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                iconName="Filter"
                iconPosition="left"
                iconSize={20}
                className="bg-white text-primary hover:bg-white/90"
                onClick={() =>
                  document
                    .getElementById("filters")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageSquare"
                iconPosition="left"
                iconSize={20}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Project Statistics */}
      <ProjectStats stats={projectStats} />
      {/* Featured Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedProjects
          projects={featuredProjects}
          onViewDetails={handleViewDetails}
        />

        {/* Filters Section */}
        <div id="filters">
          <ProjectFilters
            filters={filterConfig}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Projects Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-2">
                All Projects
              </h2>
              <p className="text-text-secondary">
                {filteredProjects?.length} project
                {filteredProjects?.length !== 1 ? "s" : ""} found
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                <option>Sort by: Latest</option>
                <option>Sort by: Complexity</option>
                <option>Sort by: Industry</option>
                <option>Sort by: Energy Savings</option>
              </select>
            </div>
          </div>

          {filteredProjects?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects?.map((project) => (
                <ProjectCard
                  key={project?.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Icon
                name="Search"
                size={64}
                className="mx-auto text-text-secondary mb-4"
              />
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                No Projects Found
              </h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your search criteria or clearing filters to see
                more projects.
              </p>
              <Button
                variant="outline"
                onClick={handleClearFilters}
                iconName="RotateCcw"
                iconPosition="left"
                iconSize={16}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let our experienced team design and implement MEP solutions that
            exceed your expectations and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
              className="bg-white text-primary hover:bg-white/90"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              iconSize={20}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Call Emergency Line
            </Button>
          </div>
        </section>
      </div>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 21V3h6v18H3zm8-12v12h6V9h-6zm8-6v18h2V3h-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Delta Air</h3>
                  <p className="text-sm opacity-80">Solutions</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Building tomorrow's infrastructure today with innovative MEP
                solutions that prioritize efficiency, sustainability, and
                reliability.
              </p>
              <div className="flex space-x-4">
                <Icon
                  name="Facebook"
                  size={20}
                  className="text-white/60 hover:text-white cursor-pointer transition-brand"
                />
                <Icon
                  name="Twitter"
                  size={20}
                  className="text-white/60 hover:text-white cursor-pointer transition-brand"
                />
                <Icon
                  name="Linkedin"
                  size={20}
                  className="text-white/60 hover:text-white cursor-pointer transition-brand"
                />
                <Icon
                  name="Instagram"
                  size={20}
                  className="text-white/60 hover:text-white cursor-pointer transition-brand"
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/homepage"
                    className="text-white/80 hover:text-white transition-brand"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services-overview"
                    className="text-white/80 hover:text-white transition-brand"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/about-leadership"
                    className="text-white/80 hover:text-white transition-brand"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-consultation"
                    className="text-white/80 hover:text-white transition-brand"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  <span>info@deltair.com</span>
                </div>
                <div className="flex items-start">
                  <Icon name="MapPin" size={16} className="mr-2 mt-1" />
                  <span>
                    123 Engineering Blvd
                    <br />
                    Tech City, TC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>
              &copy; {new Date()?.getFullYear()} Delta Air. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPortfolio;
