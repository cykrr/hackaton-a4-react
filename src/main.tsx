import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App';
import PreparatePage from './preparate/Page';
import AgentesPage from './preparate/agentes/Page';
import LlmPage from './preparate/llm/Page';
import ApiTokensPage from './preparate/api-y-tokens/Page';
import StackPage from './preparate/stack/Page';
import LimitacionesPage from './preparate/limitaciones/Page';
import './styles.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/preparate" element={<PreparatePage />} />
        <Route path="/preparate/agentes" element={<AgentesPage />} />
        <Route path="/preparate/llm" element={<LlmPage />} />
        <Route path="/preparate/api-y-tokens" element={<ApiTokensPage />} />
        <Route path="/preparate/stack" element={<StackPage />} />
        <Route path="/preparate/limitaciones" element={<LimitacionesPage />} />
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);
