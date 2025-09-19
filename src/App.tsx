import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/components/LanguageProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HealthcareManagement from "./pages/programs/HealthcareManagement";
import BusinessAdministration from "./pages/programs/BusinessAdministration";
import FinanceBanking from "./pages/programs/FinanceBanking";
import Marketing from "./pages/programs/Marketing";
import ProjectManagement from "./pages/programs/ProjectManagement";
import Law from "./pages/programs/Law";
import EnglishGlobalCommunication from "./pages/programs/EnglishGlobalCommunication";
import MscHealthcare from "./pages/programs/MscHealthcare";
import ContentManagement from "./pages/ContentManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/healthcare-management" element={<HealthcareManagement />} />
            <Route path="/business-administration" element={<BusinessAdministration />} />
            <Route path="/finance-banking" element={<FinanceBanking />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/project-management" element={<ProjectManagement />} />
            <Route path="/law" element={<Law />} />
            <Route path="/english-global-communication" element={<EnglishGlobalCommunication />} />
            <Route path="/msc-healthcare" element={<MscHealthcare />} />
            <Route path="/content-management" element={<ContentManagement />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
