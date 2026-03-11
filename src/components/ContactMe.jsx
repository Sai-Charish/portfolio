"use client";
import { useState } from "react";
import { SocialLink } from "./SocialLink";

const socials = [
  {
    label: "GitHub",
    handle: "Sai-Charish",
    icon: "https://cdn.simpleicons.org/github/white",
    url: "https://github.com/Sai-Charish",
  },
  {
    label: "LinkedIn",
    handle: "Sai-charish",
    icon: "https://skillicons.dev/icons?i=linkedin&theme=dark&perline=15",
    url: "www.linkedin.com/in/sai-charish",
  },
  {
    label: "Email",
    handle: "ananthojisaicharish@email.com",
    icon: "https://cdn.simpleicons.org/gmail",
    url: "mailto:ananthojisaicharish@email.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1800);
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused === field ? "#c9a86c" : "rgba(240,236,228,0.12)"}`,
    padding: "14px 0",
    fontSize: "14px",
    color: "#f0ece4",
    fontFamily: "'Georgia', serif",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.3s ease",
    resize: "none",
  });

  const labelStyle = (field) => ({
    fontSize: "9px",
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color:
      focused === field || form[field] ? "#c9a86c" : "rgba(240,236,228,0.3)",
    fontFamily: "'Georgia', serif",
    display: "block",
    marginBottom: "4px",
    transition: "color 0.3s",
  });

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: "#0a0a0a",
        minHeight: "100vh",
        color: "#f0ece4",
        padding: "120px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grain */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          opacity: 0.035,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,108,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "72px",
          }}
        >
          <div
            style={{ width: "40px", height: "1px", background: "#c9a86c" }}
          />
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c9a86c",
            }}
          >
            Contact
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(201,168,108,0.1)",
            }}
          />
        </div>

        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: "700",
            letterSpacing: "-0.02em",
            margin: "0 0 16px",
            color: "#f0ece4",
            lineHeight: 1.1,
          }}
        >
          Let's work
          <br />
          <span style={{ color: "#c9a86c" }}>together.</span>
        </h2>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.8",
            fontStyle: "italic",
            color: "rgba(240,236,228,0.4)",
            maxWidth: "440px",
            margin: "0 0 72px",
          }}
        >
          Open to full-time roles, freelance projects, or just a good
          conversation about tech.
        </p>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left: Form */}
          <div>
            {submitted ? (
              <div
                style={{
                  padding: "48px",
                  border: "1px solid rgba(201,168,108,0.3)",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "1px solid #c9a86c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <polyline
                      points="4,10 8,14 16,6"
                      stroke="#c9a86c"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: "20px",
                    color: "#f0ece4",
                    fontWeight: "700",
                  }}
                >
                  Message sent.
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    color: "rgba(240,236,228,0.4)",
                    fontStyle: "italic",
                  }}
                >
                  I'll get back to you soon.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "36px",
                }}
              >
                {/* Name */}
                <div>
                  <label style={labelStyle("name")}>Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("name"), caretColor: "#c9a86c" }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle("email")}>Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("email"), caretColor: "#c9a86c" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle("message")}>Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), caretColor: "#c9a86c" }}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={sending}
                  style={{
                    alignSelf: "flex-start",
                    padding: "14px 36px",
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    cursor: sending ? "default" : "pointer",
                    fontFamily: "'Georgia', serif",
                    color: sending ? "rgba(201,168,108,0.5)" : "#0a0a0a",
                    background: sending ? "transparent" : "#c9a86c",
                    border: "1px solid rgba(201,168,108,0.6)",
                    borderRadius: "2px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#c9a86c";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!sending) {
                      e.currentTarget.style.background = "#c9a86c";
                      e.currentTarget.style.color = "#0a0a0a";
                    }
                  }}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>
            )}
          </div>

          {/* Right: Socials + info */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "48px" }}
          >
            {/* Availability badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 18px",
                border: "1px solid rgba(120,180,140,0.3)",
                borderRadius: "2px",
                alignSelf: "flex-start",
                background: "rgba(120,180,140,0.04)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#78b48c",
                  boxShadow: "0 0 8px rgba(120,180,140,0.8)",
                  animation: "pulse 2s ease-in-out infinite",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(120,180,140,0.8)",
                  fontFamily: "'Georgia', serif",
                }}
              >
                Available for opportunities
              </span>
            </div>

            {/* Socials */}
            <div>
              <div
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(240,236,228,0.25)",
                  marginBottom: "16px",
                  fontFamily: "'Georgia', serif",
                }}
              >
                Find me on
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {socials.map((s) => (
                  <SocialLink key={s.label} social={s} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "100px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(240,236,228,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: "700",
              letterSpacing: "0.1em",
              color: "#f0ece4",
            }}
          >
            A<span style={{ color: "#c9a86c" }}>S</span>C
          </span>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(240,236,228,0.2)",
            }}
          >
            Designed & Built by Ananthoji Sai Charish using{" "}
            <span>
              {" "}
              <img
                className="w-6 inline"
                src={`https://cdn.simpleicons.org/nextdotjs/white`}
              />
            </span>
            &nbsp;·&nbsp; {new Date().getFullYear()}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(240,236,228,0.15);
          font-family: 'Georgia', serif;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
