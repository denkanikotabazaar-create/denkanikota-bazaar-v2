import React from "react";

export default function Home() {
  return (
    <div>
      <h2>🏠 Home</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button>🥬 Vegetables</button>

        <button>🍎 Fruits</button>

        <button>🌹 Flowers</button>

        <button>🛒 Grocery</button>

        <button>📱 Mobile Shops</button>

        <button>💡 Electronics</button>

        <button>💄 Beauty Parlour</button>

        <button>✂️ Salon</button>

        <button>🚚 Transport</button>

        <button>🏥 Medical Shop</button>
      </div>
    </div>
  );
}
