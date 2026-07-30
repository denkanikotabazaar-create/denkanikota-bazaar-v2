import React from "react";

export default function Categories() {
  const categories = [
    "🥬 Vegetables",
    "🍎 Fruits",
    "🌹 Flowers",
    "🛒 Grocery",
    "📱 Mobile Shops",
    "💡 Electronics",
    "💄 Beauty Parlour",
    "✂️ Salon",
    "🚚 Transport",
    "🏥 Medical Shop",
    "🏠 Real Estate",
    "🌾 Agriculture",
  ];

  return (
    <div>
      <h2>🛒 Categories</h2>

      {categories.map((category, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#ffffff",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px",
            border: "1px solid #dddddd",
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
}
