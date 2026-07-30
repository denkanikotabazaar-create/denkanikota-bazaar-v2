import React, { useState } from "react";

export default function SellerForm() {
  const [shopName, setShopName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");

  function saveSeller() {
    alert("Seller saved successfully");
  }

  return (
    <div>
      <h2>Seller Registration</h2>

      <input
        placeholder="Shop name"
        value={shopName}
        onChange={(e) => setShopName(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Owner name"
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br />
      <br />

      <button onClick={saveSeller}>Save</button>
    </div>
  );
}
