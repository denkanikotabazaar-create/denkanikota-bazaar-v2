import React, { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const sellers = [
    {
      id: 1,
      name: "Ravi Vegetables",
      category: "Vegetables",
      phone: "9876543210",
      whatsapp: "9876543210",
      location: "Denkanikota",
    },
    {
      id: 2,
      name: "Kumar Fruits",
      category: "Fruits",
      phone: "9876543211",
      whatsapp: "9876543211",
      location: "Denkanikota",
    },
    {
      id: 3,
      name: "Selvam Hardware",
      category: "Hardware",
      phone: "9876543212",
      whatsapp: "9876543212",
      location: "Denkanikota",
    },
  ];

  const filteredSellers = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        fontFamily: "Arial",
      }}
    >
      <h1>தேன்கனிகோட்டை பஜார்</h1>

      <p>Denkanikota Bazaar</p>

      <p>உங்கள் உள்ளூர் சந்தை, உங்கள் கையில்</p>

      <input
        type="text"
        placeholder="கடைகளைத் தேடுங்கள்..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #cccccc",
          marginBottom: "20px",
        }}
      />

      {filteredSellers.map((seller) => (
        <div
          key={seller.id}
          style={{
            border: "1px solid #dddddd",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <h3>{seller.name}</h3>

          <p>{seller.category}</p>

          <p>📞 {seller.phone}</p>

          <p>
            <a href={`tel:${seller.phone}`}>📞 Call</a>
          </p>

          <p>
            <a href={`https://wa.me/${seller.whatsapp}`}>
              💬 WhatsApp
            </a>
          </p>

          <p>📍 {seller.location}</p>
        </div>
      ))}
    </div>
  );
}
