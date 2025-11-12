// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Layout } from "./page/Layout";
import { Home } from "./layout/Home";
import { Term } from "./layout/Term";
import { Privacy } from "./layout/Privacy";
import { LegalNotice } from "./layout/LegalNotice";

function App() {
  return (
    <HelmetProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="term" element={<Term />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="legalnotice" element={<LegalNotice />} />
          </Route>
        </Routes>
    </HelmetProvider>
  );
}

export default App;

