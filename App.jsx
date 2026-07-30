import React, { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const sellers = [
    {
      id: 1,
      name: "Ravi Vegetables",
      phone: "9876543210",
      category: "Vegetables",
    },
    {
      id: 2,
      name: "Kumar Fruits",
      phone: "9876543211",
      category: "Fruits",
    },
    {
      id: 3,
      name: "Selvam Hardware",
      phone: "9876543212",
      category: "Hardware",
    },
  ];

  const filtered = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>தென்கணிக்கோட்டை பஜார்</h1>

      <p>Your local market, in your pocket</p>

      <input
        type="text"
        placeholder="Search shops..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
        }}
      />

      {filtered.map((seller) => (
        <div
          key={seller.id}
          style={{
            border: "1px solid #cccccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{seller.name}</h3>

          <p>{seller.category}</p>

          <a href={`tel:${seller.phone}`}>
            📞 {seller.phone}
          </a>
        </div>
      ))}
    </div>
  );
}
