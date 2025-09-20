import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ProjectPortfolio from "./pages/project-portfolio";
import ContactConsultation from "./pages/contact-consultation";
import AboutLeadership from "./pages/about-leadership";
import ServicesOverview from "./pages/services-overview";
import IndividualServicePages from "./pages/individual-service-pages";
import Homepage from "./pages/homepage";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<AboutLeadership />} />
          <Route path="/project-portfolio" element={<ProjectPortfolio />} />
          <Route
            path="/contact-consultation"
            element={<ContactConsultation />}
          />
          <Route path="/about-leadership" element={<AboutLeadership />} />
          <Route path="/services-overview" element={<ServicesOverview />} />
          <Route
            path="/individual-service-pages"
            element={<IndividualServicePages />}
          />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
