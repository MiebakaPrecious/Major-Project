import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Auth pages (no layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard pages (with layout) */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />

      </Routes>
    </Router>
  );
}
