import React, { useState } from "react";
import "./App.css";

function App() {
  const allServices = [
    { name: "Women's Salon & Spa", icon: "👧" },
    { name: "Men's Salon & Massage", icon: "👨" },
    { name: "AC & Appliance Repair", icon: "🌬️" },
    { name: "Cleaning & Pest Control", icon: "🧹" },
    { name: "Electrician, Plumber & Carpenter", icon: "🔌" },
    { name: "Native Water Purifier", icon: "💧" },
    { name: "Native Smart Locks", icon: "🔒" },
    { name: "Painting & Waterproofing", icon: "🎨" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredServices = allServices.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {}
      <nav className="navbar">
        <div className="left-section">
          <img
            src="https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?cb=iwp2&w=3840&h=2160&rs=1&pid=ImgDetMain"
            alt="Urban Company"
            className="logo"
          />
          <a href="#">Urban Company</a>
          <a href="#">Beauty</a>
          <a href="#">Homes</a>
          <a href="#">Native</a>
        </div>

        <input
          type="search"
          className="search-bar"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="icon">🛒 👤</span>
      </nav>

      
      <div className="main-section">
        
        <div className="left-container">
          <h1>Home services at your doorstep</h1>
          <div className="card">
            <h2>What are you looking for?</h2>
            <div className="services-grid">
              {filteredServices.map((service, index) => (
                <div
                  className="service-item"
                  key={index}
                  onClick={() => setSelected(service.name)}
                  style={{
                    border:
                      selected === service.name
                        ? "2px solid #4e6ef2"
                        : "2px solid transparent",
                    backgroundColor:
                      selected === service.name ? "#eef3ff" : "#f9f9f9",
                  }}
                >
                  <span className="emoji">{service.icon}</span>
                  <p>{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="right-gallery">
          <div className="gallery-grid">
            <img src="https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?cb=iwp2&w=3840&h=2160&rs=1&pid=ImgDetMain" alt="Service 1" />
            <img src="https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?cb=iwp2&w=3840&h=2160&rs=1&pid=ImgDetMain" alt="Service 2" />
            <img src="https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?cb=iwp2&w=3840&h=2160&rs=1&pid=ImgDetMain" alt="Service 3" />
            <img src="https://th.bing.com/th/id/OIP.0iqvqUM-_MntTZp4CMBaigHaEK?cb=iwp2&w=3840&h=2160&rs=1&pid=ImgDetMain" alt="Service 4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
