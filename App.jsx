import React, { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("ta");
  const [search, setSearch] = useState("");

  const text = {
    ta: {
      title: "தேன்கனிகோட்டை பஜார்",
      subtitle: "உங்கள் உள்ளூர் சந்தை, உங்கள் கையில்",
      search: "கடைகளைத் தேடுங்கள்...",
      call: "அழைப்பு",
      whatsapp: "வாட்ஸ்அப்",
      location: "இடம்",
    },
    en: {
      title: "Denkanikota Bazaar",
      subtitle: "Your local market, in your pocket",
      search: "Search shops...",
      call: "Call",
      whatsapp: "WhatsApp",
      location: "Location",
    },
  };

  const sellers = [
    {
      id: 1,
      name: "Ravi Vegetables",
      category: "Vegetables",
      phone: "9876543210",
      location: "Denkanikota",
    },
    {
      id: 2,
      name: "Kumar Fruits",
      category: "Fruits",
      phone: "9876543211",
      location: "Denkanikota",
    },
    {
      id: 3,
      name: "Selvam Hardware",
      category: "Hardware",
      phone: "9876543212",
      location: "Denkanikota",
    },
  ];

  const filtered = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0fff4",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          backgroundColor: "#16a34a",
          color: "white",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h1>🛒 {text[language].title}</h1>

        <p>{text[language].subtitle}</p>

        <button onClick={() => setLanguage("ta")}>தமிழ்</button>

        <button
          onClick={() => setLanguage("en")}
          style={{ marginLeft: "10px" }}
        >
          English
        </button>
      </div>

      <br />

      <input
        type="text"
        placeholder={text[language].search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid gray",
        }}
      />

      <br />
      <br />

      {filtered.map((seller) => (
        <div
          key={seller.id}
          style={{
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>{seller.name}</h2>

          <p>{seller.category}</p>

          <p>📞 {seller.phone}</p>

          <p>
            <a href={`tel:${seller.phone}`}>
              📞 {text[language].call}
            </a>
          </p>

          <p>
            <a href={`https://wa.me/${seller.phone}`}>
              💬 {text[language].whatsapp}
            </a>
          </p>

          <p>
            📍 {text[language].location}: {seller.location}
          </p>
        </div>
      ))}
    </div>
  );
}
