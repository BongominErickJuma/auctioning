// App.jsx
import React, { useState } from "react";
import Header from "./components/layouts/header/Header";
import Sidebar from "./components/layouts/sidebar/Sidebar";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/layouts/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodaySchedule from "./pages/schedule/Today/TodaySchedule";
import Timetable from "./pages/schedule/timetable/Timetable";
import Students from "./pages/members/Students";
import Teachers from "./pages/members/Teachers";

const App = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
    if (!isSidebarToggled) {
      setIsSidebarHovered(false);
    }
  };

  const handleMouseOverSidebar = () => {
    if (isSidebarToggled) {
      setIsSidebarHovered(true);
    }
  };

  const handleMouseOutSidebar = () => {
    if (isSidebarToggled) {
      setIsSidebarHovered(false);
    }
  };

  return (
    <Router>
      <div
        className={`${
          isSidebarToggled && !isSidebarHovered ? "toggle-sidebar" : ""
        } ${isSidebarHovered ? "hover-sidebar" : ""}`}
      >
        <Header handleToggleSidebar={handleToggleSidebar} />
        <Sidebar
          handleMouseOverSidebar={handleMouseOverSidebar}
          handleMouseOutSidebar={handleMouseOutSidebar}
          isSidebarHovered={isSidebarHovered}
        />
        <div className="min-vh-100 main" id="main">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/todayschedule" element={<TodaySchedule />} />
            <Route exact path="/timetable" element={<Timetable />} />
            <Route exact path="/students" element={<Students />} />
            <Route exact path="/teachers" element={<Teachers />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
