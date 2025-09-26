
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./lib/LanguageContext";
import Index from "./pages/Index";
import DoctorDetails from "./pages/DoctorDetails";
import NotFound from "./pages/NotFound";
import AppointmentForm from "./pages/AppointmentForm";
import ServicesTable from "./pages/ServicesTable";
import Promo from "./pages/Promo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/doctor/:id" element={<DoctorDetails />} />
            <Route path="/contacts" element={<AppointmentForm />} />
            <Route path="/services" element={<ServicesTable />} />
            <Route path="/promo" element={<Promo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
