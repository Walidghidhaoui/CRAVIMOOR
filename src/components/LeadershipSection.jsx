import React from "react";

// Leadership & Project Management section for Cravimoor
// Import this into App.js and place <LeadershipSection /> where you want it to appear
// (e.g. right after your Portfolio/Featured Projects section).

export default function LeadershipSection() {
  const competencies = [
    {
      title: "Project & Program Leadership",
      desc: "20+ years leading industrial teams (up to 55 staff) from concept design to full plant execution, including cross-functional coordination across engineering, production, and maintenance.",
    },
    {
      title: "PMP® Certified",
      desc: "Project Management Professional (PMI), 2026 scope, schedule, risk, and stakeholder management applied to real industrial projects, not just theory.",
    },
    {
      title: "Process & Cost Optimization",
      desc: "Led capital projects (cooling tower design, ball sorting systems, alternative fuel intake systems) delivering measurable efficiency and cost gains.",
    },
    {
      title: "Cross-Functional Coordination",
      desc: "Bridging design, manufacturing, and maintenance teams translating technical constraints into clear project decisions for stakeholders.",
    },
  ];

  return (
    <section
      id="leadership"
      style={{
        width: "100%",
        padding: "4rem 1.5rem",
        backgroundColor: "#0d0d0d",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                <h2
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            textAlign: "center", // إضافة جديدة
            background: "linear-gradient(90deg, #D4AF37, #B22222)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Leadership &amp; Project Management
        </h2>

        <p style={{ 
          color: "#a3a3a3", 
          maxWidth: "640px", 
          marginBottom: "2.5rem", 
          fontSize: "0.95rem",
          textAlign: "center", // إضافة جديدة
          marginLeft: "auto",  // إضافة جديدة
          marginRight: "auto"  // إضافة جديدة
        }}>
          Beyond design and modeling, Cravimoor is built on 20+ years of leading
          real industrial teams and projects now formalized through PMP® certification.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {competencies.map((item, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #2a2a2a",
                borderRadius: "12px",
                padding: "1.5rem",
                transition: "border-color 0.3s",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#D4AF37" }}>
                {item.title}
              </h3>
              <p style={{ color: "#d4d4d4", fontSize: "0.9rem", lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

                <div style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
          <span
            style={{
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(212,175,55,0.15)",
              color: "#D4AF37",
              fontSize: "0.8rem",
              fontWeight: 600,
              border: "1px solid rgba(212,175,55,0.4)",
            }}
          >
            PMP®
          </span>
          <span
            style={{
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              backgroundColor: "#1a1a1a",
              color: "#d4d4d4",
              fontSize: "0.8rem",
              fontWeight: 600,
              border: "1px solid #333",
            }}
          >
            MSc — Industrial Maintenance Systems Management
          </span>
          <span
            style={{
              padding: "0.4rem 1rem",
              borderRadius: "9999px",
              backgroundColor: "#1a1a1a",
              color: "#d4d4d4",
              fontSize: "0.8rem",
              fontWeight: 600,
              border: "1px solid #333",
            }}
          >
            20+ Years Industrial &amp; Automotive
          </span>
        </div>
        <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          
          {/* 1. صورة الشهادة */}
          <div style={{ position: "relative" }}>
            <img 
              src="/images/pmp-certificate.jpg"  /* ضع هنا مسار الصورة الخاصة بك */
              alt="PMP Certificate" 
              style={{ 
                maxWidth: "300px", /* تحكم في الحجم حسب رغبتك */
                width: "100%", 
                borderRadius: "8px", 
                boxShadow: "0 4px 15px rgba(212, 175, 55, 0.2)" /* إضاءة ذهبية خفيفة حول الصورة */
              }} 
            />
          </div>
          
      </div>
    </section>
  );
}
