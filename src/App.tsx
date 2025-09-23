import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UnboundPivot from "./pages/UnboundPivot";
import ConsciousCreatorCircle from "./pages/ConsciousCreatorCircle";
import BusinessWealthBuilding from "./pages/BusinessWealthBuilding";
import Podcast from "./pages/Podcast";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Copyrights from "./pages/Copyrights";
import RefundsPolicy from "./pages/RefundsPolicy";
import Disclaimer from "./pages/Disclaimer";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/unbound-pivot" element={<UnboundPivot />} />
          <Route path="/conscious-creator-circle" element={<ConsciousCreatorCircle />} />
          <Route path="/business-wealth-building" element={<BusinessWealthBuilding />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/copyrights" element={<Copyrights />} />
          <Route path="/refunds-policy" element={<RefundsPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
