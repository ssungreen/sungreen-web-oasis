
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Company from "./pages/Company";
import Greeting from "./pages/Greeting";
import History from "./pages/History";
import Certifications from "./pages/Certifications";
import Location from "./pages/Location";
import Business from "./pages/Business";
import OpportunityIncome from "./pages/OpportunityIncome";
import LeadingBusiness from "./pages/LeadingBusiness";
import BusinessRPS from "./pages/BusinessRPS";
import BusinessRE100 from "./pages/BusinessRE100";
import Cases from "./pages/Cases";
import RE100 from "./pages/RE100";
import Government from "./pages/Government";
import HousingSupport from "./pages/HousingSupport";
import BuildingSupport from "./pages/BuildingSupport";
import FusionSupport from "./pages/FusionSupport";
import EcoVillageSupport from "./pages/EcoVillageSupport";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/company" element={<Company />} />
          <Route path="/greeting" element={<Greeting />} />
          <Route path="/history" element={<History />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/location" element={<Location />} />
          <Route path="/business" element={<Business />} />
          <Route path="/business/opportunity-income" element={<OpportunityIncome />} />
          <Route path="/business/leading" element={<LeadingBusiness />} />
          <Route path="/business/rps" element={<BusinessRPS />} />
          <Route path="/business/re100" element={<BusinessRE100 />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/re100" element={<RE100 />} />
          <Route path="/government" element={<Government />} />
          <Route path="/government/housing" element={<HousingSupport />} />
          <Route path="/government/building" element={<BuildingSupport />} />
          <Route path="/government/fusion" element={<FusionSupport />} />
          <Route path="/government/eco-village" element={<EcoVillageSupport />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
