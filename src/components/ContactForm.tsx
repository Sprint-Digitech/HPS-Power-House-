"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("contacts").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
    ]);

    if (error) {
      console.error(error);
      setStatus("error");
    } else {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "30px", background: "#f5f5f5", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
      <h2 style={{ color: "#000000", marginBottom: "20px", fontSize: "28px", fontWeight: "700" }}>Get In Touch</h2>
      {status === "success" && (
        <div style={{ padding: "15px", background: "#d4edda", color: "#155724", borderRadius: "5px", marginBottom: "20px" }}>
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {status === "error" && (
        <div style={{ padding: "15px", background: "#f8d7da", color: "#721c24", borderRadius: "5px", marginBottom: "20px" }}>
          Oops! Something went wrong. Please try again later.
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#2a2c38" }}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "12px", border: "1px solid #eaeaec", borderRadius: "5px", fontSize: "16px" }}
            placeholder="Your Name"
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#2a2c38" }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "12px", border: "1px solid #eaeaec", borderRadius: "5px", fontSize: "16px" }}
            placeholder="Your Email"
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#2a2c38" }}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: "12px", border: "1px solid #eaeaec", borderRadius: "5px", fontSize: "16px" }}
            placeholder="Your Phone Number"
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#2a2c38" }}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            style={{ width: "100%", padding: "12px", border: "1px solid #eaeaec", borderRadius: "5px", fontSize: "16px", resize: "vertical" }}
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            padding: "15px 30px",
            background: "linear-gradient(135deg, #0578db 0%, #045a99 100%)",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            fontWeight: "600",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(5, 120, 219, 0.3)"
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #f77600 0%, #d56600 100%)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #0578db 0%, #045a99 100%)")}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
