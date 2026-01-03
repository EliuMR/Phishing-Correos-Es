import { Global } from './components/GlobalStyles';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from './components/Layout';
import { AnimatePresence } from "framer-motion";


import CorreoCheck from './components/CorreoCheck'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route path="/phishing-correos-es/deteccion" element={<CorreoCheck />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}


export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
