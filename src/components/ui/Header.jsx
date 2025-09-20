import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", path: "/homepage", icon: "Home" },
    { name: "Services", path: "/services-overview", icon: "Settings" },
    { name: "Portfolio", path: "/project-portfolio", icon: "FolderOpen" },
    { name: "About", path: "/about-leadership", icon: "Users" },
    { name: "Contact", path: "/contact-consultation", icon: "MessageSquare" },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-brand ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-brand border-b border-border"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/homepage" className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 lg:w-7 lg:h-7 text-white"
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
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold text-primary">
                  Delta Air
                </h1>
                <p className="text-xs lg:text-sm text-text-secondary font-medium">
                  Solutions
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <a
                key={item?.path}
                href={item?.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-brand flex items-center space-x-2 ${
                  isActivePath(item?.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-text-primary hover:bg-muted hover:text-primary"
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </a>
            ))}
          </nav>

          {/* Emergency Contact & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Emergency Contact Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex bg-accent/10 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              iconName="Phone"
              iconPosition="left"
              iconSize={16}
            >
              Emergency
            </Button>

            {/* Mobile Emergency Button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-accent/10 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              iconName="Phone"
              iconSize={18}
            />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMobileMenu}
              iconName={isMobileMenuOpen ? "X" : "Menu"}
              iconSize={20}
            />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <a
                  key={item?.path}
                  href={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-brand ${
                    isActivePath(item?.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-text-primary hover:bg-muted hover:text-primary"
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </a>
              ))}

              {/* Mobile Emergency Contact */}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="default"
                  fullWidth
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={closeMobileMenu}
                >
                  Emergency Services - Call Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      {/* Emergency Services Floating Button */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <Button
          variant="default"
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-brand-xl animate-pulse-subtle rounded-full"
          iconName="Phone"
          iconSize={20}
        >
          24/7
        </Button>
      </div>
    </header>
  );
};

export default Header;
