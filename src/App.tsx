import { Route, Routes } from "react-router-dom";

import { HomePage } from "pages/HomePage/HomePage";
import { ServicesPage } from "pages/ServicesPage/ServicesPage";
import { Header, Footer } from "widgets";

export default function App() {
  return (
    <div style={{ minHeight: "100%" }}>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ServicesPage />} path="/services" />
      </Routes>
      <Footer />
    </div>
  );
}
