import { useState, useEffect, useCallback } from "react";

import { HomePage } from "pages/HomePage/HomePage";
import { ServicesPage } from "pages/ServicesPage/ServicesPage";
import { Header, Footer } from "widgets";
import type { Page } from "shared/types";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = useCallback((p: Page) => {
    setPage(p);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  return (
    <div style={{ minHeight: "100%" }}>
      <Header page={page} onNavigate={navigate} />
      {page === "home" ? <HomePage onNavigate={navigate} /> : <ServicesPage />}
      <Footer onNavigate={navigate} />
    </div>
  );
}
