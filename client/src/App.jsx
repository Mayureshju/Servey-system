import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Servey from "./components/Servey";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
        <Routes>
          <Route path="/" element={<Servey />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
