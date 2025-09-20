import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

import React, { useState } from 'react';
function MyApp(){

  const [count, setCount] = useState(0); // state variable

  const handleIncrement = () => {
    setCount(count + 1); // update state
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button 

      style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s ease'
        }}

      onClick={handleIncrement}>Increment</button>
    </div>
  );
}






export default App;
//export default MyApp;

