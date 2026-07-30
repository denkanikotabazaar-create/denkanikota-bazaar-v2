import React from "react";

export default function BottomNavigation() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: "#ffffff",
        borderTop: "1px solid #dddddd",
        display: "flex",
        justifyContent: "space-around",
        padding: "12px",
      }}
    >
      <div>🏠 Home</div>

      <div>🛒 Categories</div>

      <div>➕ Sell</div>

      <div>👤 Profile</div>

      <div>🛡️ Admin</div>
    </div>
  );
}
