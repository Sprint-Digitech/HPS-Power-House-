"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (id === "Admin" && password === "HPS@123") {
      // Set a simple cookie for authentication
      document.cookie = "admin_auth=true; path=/; max-age=86400";
      router.push("/admin");
    } else {
      setError("Invalid ID or Password");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5" }}>
      <div style={{ background: "#ffffff", padding: "40px", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", width: "100%", maxWidth: "400px" }}>
        <h1 style={{ color: "#000000", marginBottom: "20px", fontSize: "24px", fontWeight: "700", textAlign: "center" }}>Admin Login</h1>
        {error && (
          <div style={{ padding: "10px", background: "#f8d7da", color: "#721c24", borderRadius: "5px", marginBottom: "20px", textAlign: "center" }}>
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#2a2c38" }}>ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              style={{ width: "100%", padding: "12px", border: "1px solid #eaeaec", borderRadius: "5px", fontSize: "16px" }}
              placeholder="Enter Admin ID"
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#2a2c38" }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "12px", border: "1px solid #eaeaec", borderRadius: "5px", fontSize: "16px" }}
              placeholder="Enter Password"
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "15px",
              background: "linear-gradient(135deg, #0578db 0%, #045a99 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: "5px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(5, 120, 219, 0.3)"
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #f77600 0%, #d56600 100%)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #0578db 0%, #045a99 100%)")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
