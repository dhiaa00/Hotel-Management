import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Dashboard from "./pages/dashboard/Dashboard";
import { reservationData } from "./data";
import { useState } from "react";
import Booking from "./pages/Booking";
import Rooms from "./pages/Rooms";
import Clients from "./pages/Clients";

function App() {
  const [formattedData, setFormattedData] = useState({
    labels: reservationData.map((e) => e.month),
    datasets: [
      {
        label: "Completed Reservations",
        data: reservationData.map((e) => e.completedReservations),
        backgroundColor: ["#2D2B40"],
        stack: "Reservations",
      },
      {
        label: "Canceled Reservations",
        data: reservationData.map((e) => e.CanceledReservations),
        backgroundColor: ["#376EFB"],
        stack: "Reservations",
      },
    ],
  });

  return (
    <main className="grid justify-end max-[920px]:flex max-[920px]:flex-col max-[920px]:items-center">
      <NavBar />
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard reservationData={formattedData} />}
        />
        <Route path="/booking" element={<Booking />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </main>
  );
}

export default App;
