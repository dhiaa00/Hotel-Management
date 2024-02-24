import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Dashboard from "./pages/dashboard/Dashboard";
import { reservationData } from "./data";
import { useState } from "react";

function App() {
  const [formattedData, setFormattedData] = useState({
    labels: reservationData.map((e) => e.month),
    datasets: [
      {
        label: "Total Reservations",
        data: reservationData.map((e) => e.totalReservations),
        backgroundColor: ["#376EFB"],
      },
      {
        label: "Completed Reservations",
        data: reservationData.map((e) => e.completedReservations),
        backgroundColor: ["#2D2B40"],
      },
    ],
  });
  return (
    <main className="grid justify-end">
      <NavBar />
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard reservationData={formattedData} />}
        />
      </Routes>
    </main>
  );
}

export default App;
