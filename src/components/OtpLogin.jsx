import React, { useState } from "react";

export default function OtpLogin() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  function sendOtp() {
    alert("OTP sent successfully");
  }

  function verifyOtp() {
    alert("OTP verified successfully");
  }

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      <h2>🔐 OTP Login</h2>

      <input
        type="text"
        placeholder="Mobile Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br />
      <br />

      <button onClick={sendOtp}>
        Send OTP
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <br />
      <br />

      <button onClick={verifyOtp}>
        Verify OTP
      </button>
    </div>
  );
}
