"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchContacts = async () => {
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching contacts:", error.message, error.details);
        setFetchError(error.message || "Failed to fetch data. Ensure your Supabase table 'contacts' exists and RLS policies allow SELECT queries.");
      } else {
        setContacts(data || []);
      }
      setLoading(false);
    };

    fetchContacts();
  }, []);

  const handleLogout = () => {
    document.cookie = "admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/admin/login");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", background: "#ffffff", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", padding: "30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", borderBottom: "2px solid #eaeaec", paddingBottom: "20px" }}>
          <h1 style={{ color: "#000000", fontSize: "28px", fontWeight: "700", margin: 0 }}>Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 20px",
              background: "#e65a11",
              color: "#ffffff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#c24b0f")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#e65a11")}
          >
            Logout
          </button>
        </div>

        <h2 style={{ color: "#0578db", marginBottom: "20px", fontSize: "22px" }}>Contact Submissions</h2>
        
        {fetchError ? (
          <div style={{ padding: "15px", background: "#f8d7da", color: "#721c24", borderRadius: "5px", marginBottom: "20px" }}>
            <strong>Error:</strong> {fetchError}
          </div>
        ) : loading ? (
          <p style={{ textAlign: "center", color: "#b5b5ba", padding: "40px" }}>Loading data...</p>
        ) : contacts.length === 0 ? (
          <p style={{ textAlign: "center", color: "#b5b5ba", padding: "40px", fontSize: "18px" }}>No submissions yet.</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "800px" }}>
              <thead>
                <tr style={{ background: "#0578db", color: "#ffffff", textAlign: "left" }}>
                  <th style={{ padding: "15px", fontWeight: "600", borderTopLeftRadius: "5px" }}>Date</th>
                  <th style={{ padding: "15px", fontWeight: "600" }}>Name</th>
                  <th style={{ padding: "15px", fontWeight: "600" }}>Email</th>
                  <th style={{ padding: "15px", fontWeight: "600" }}>Phone</th>
                  <th style={{ padding: "15px", fontWeight: "600", borderTopRightRadius: "5px" }}>Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr key={contact.id} style={{ background: index % 2 === 0 ? "#ffffff" : "#f9f9f9", borderBottom: "1px solid #eaeaec" }}>
                    <td style={{ padding: "15px", color: "#2a2c38", whiteSpace: "nowrap" }}>
                      {new Date(contact.created_at).toLocaleString()}
                    </td>
                    <td style={{ padding: "15px", color: "#2a2c38", fontWeight: "500" }}>{contact.name}</td>
                    <td style={{ padding: "15px", color: "#0578db" }}><a href={`mailto:${contact.email}`} style={{ color: "inherit", textDecoration: "none" }}>{contact.email}</a></td>
                    <td style={{ padding: "15px", color: "#2a2c38" }}>{contact.phone || "-"}</td>
                    <td style={{ padding: "15px", color: "#2a2c38", maxWidth: "300px" }}>
                      <div style={{ maxHeight: "100px", overflowY: "auto", paddingRight: "10px" }}>
                        {contact.message}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
