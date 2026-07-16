"use client";
import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ClientWrapper({
  bodyClass,
  headContent,
  bodyContent,
}: {
  bodyClass?: string;
  headContent?: string;
  bodyContent?: string;
}) {
  useEffect(() => {
    if (bodyClass) {
      document.body.className = bodyClass;
    }

    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
      if (form.getAttribute("data-hijacked") === "true") return;
      form.setAttribute("data-hijacked", "true");

      form.addEventListener("submit", async (e) => {
        const formData = new FormData(form);
        const name = formData.get("mf-text") || formData.get("your-name") || formData.get("name") || "";
        const email = formData.get("mf-email") || formData.get("your-email") || formData.get("email") || "";
        const phone = formData.get("mf-telephone") || formData.get("your-phone") || formData.get("phone") || "";
        const message = formData.get("mf-textarea") || formData.get("your-message") || formData.get("message") || "";
        
        if (name || email) {
          e.preventDefault();
          e.stopImmediatePropagation();
          
          try {
            const { error } = await supabase.from("contacts").insert([{
              name: name.toString(),
              email: email.toString(),
              phone: phone.toString(),
              message: message.toString(),
            }]);
            
            if (error) throw error;
            
            alert("Thank you! Your message has been sent successfully.");
            form.reset();
          } catch (err: any) {
            console.error("Form submission error:", err);
            alert("There was an error sending your message. Please try again later.");
          }
        }
      }, { capture: true });
    });
  }, [bodyClass, bodyContent]);

  return (
    <div suppressHydrationWarning>
      {headContent && <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: headContent }} />}
      {bodyContent && <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: bodyContent }} />}
    </div>
  );
}
