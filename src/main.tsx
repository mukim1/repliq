import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ToastProvider } from "./hooks/useToast";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Contexts/Auth_context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
    <ToastProvider />
  </React.Fragment>,
  document.getElementById("root")
);
