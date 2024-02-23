import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <main className="flex">
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
}

export default App;
