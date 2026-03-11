"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SocialLink } from "./SocialLink";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

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
    url: "https://www.linkedin.com/in/sai-charish",
  },
  {
    label: "Email",
    handle: "ananthojisaicharish@email.com",
    icon: "https://cdn.simpleicons.org/gmail",
    url: "mailto:ananthojisaicharish@email.com",
  },
];

const EMPTY_FORM = { name: "", email: "", message: "", subject: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputBorder = (field) =>
    errors[field]
      ? "border-b-[rgba(220,80,80,0.6)]"
      : focused === field
        ? "border-b-[#c9a86c]"
        : "border-b-[rgba(240,236,228,0.12)]";

  const labelColor = (field) =>
    errors[field]
      ? "text-[rgba(220,80,80,0.8)]"
      : focused === field || form[field]
        ? "text-[#c9a86c]"
        : "text-[#f0ece4]/30";

  const sharedInputClass =
    "w-full bg-transparent border-0 border-b pb-3.5 pt-3.5 text-[14px] text-[#f0ece4] outline-none transition-colors duration-300 resize-none placeholder:text-[#f0ece4]/15 placeholder:italic caret-[#c9a86c]";

  return (
    <div className="font-serif bg-[#0a0a0a] min-h-screen text-[#f0ece4] py-28 md:py-30 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute -bottom-48 -right-48 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,108,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-300 mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-5 mb-18">
          <div className="w-10 h-px bg-[#c9a86c]" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#c9a86c]">
            Contact
          </span>
          <div className="flex-1 h-px bg-[#c9a86c]/10" />
        </div>

        <h2 className="text-[clamp(32px,4vw,52px)] font-bold tracking-tight leading-[1.1] mb-4 text-[#f0ece4]">
          Let's work
          <br />
          <span className="text-[#c9a86c]">together.</span>
        </h2>
        <p className="text-[14px] leading-[1.8] italic text-[#f0ece4]/40 max-w-110 mb-18">
          Open to full-time roles, freelance projects, or just a good
          conversation about tech.
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Form */}
          <div>
            {status === "success" ? (
              <div className="p-12 border border-[#c9a86c]/30 rounded-sm text-center">
                <div className="w-12 h-12 rounded-full border border-[#c9a86c]/40 flex items-center justify-center mx-auto mb-6">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <polyline
                      points="3,10 8,15 17,5"
                      stroke="#c9a86c"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-[#c9a86c] mb-3">
                  Message Sent
                </p>
                <p className="text-[14px] italic text-[#f0ece4]/50">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 px-8 py-3 text-[10px] tracking-[0.25em] uppercase border border-[#c9a86c]/30 text-[#c9a86c]/60 rounded-sm hover:border-[#c9a86c] hover:text-[#c9a86c] transition-all duration-300"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-7">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label
                      className={`text-[9px] tracking-[0.3em] uppercase block mb-1 transition-colors duration-300 ${labelColor("name")}`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={`${sharedInputClass} ${inputBorder("name")}`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-[11px] text-[rgba(220,80,80,0.8)] italic">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className={`text-[9px] tracking-[0.3em] uppercase block mb-1 transition-colors duration-300 ${labelColor("email")}`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={`${sharedInputClass} ${inputBorder("email")}`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-[11px] text-[rgba(220,80,80,0.8)] italic">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    className={`text-[9px] tracking-[0.3em] uppercase block mb-1 transition-colors duration-300 ${labelColor("subject")}`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    className={`${sharedInputClass} ${inputBorder("subject")}`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-[11px] text-[rgba(220,80,80,0.8)] italic">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    className={`text-[9px] tracking-[0.3em] uppercase block mb-1 transition-colors duration-300 ${labelColor("message")}`}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`${sharedInputClass} ${inputBorder("message")}`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-[11px] text-[rgba(220,80,80,0.8)] italic">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* API error */}
                {status === "error" && (
                  <p className="text-[11px] italic text-[rgba(220,80,80,0.8)] border border-[rgba(220,80,80,0.2)] px-3.5 py-2.5 rounded-sm">
                    Something went wrong. Please try again or reach out directly
                    via email.
                  </p>
                )}

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className={`self-start px-9 py-3.5 text-[10px] tracking-[0.25em] uppercase rounded-sm border transition-all duration-300
                    ${
                      status === "loading"
                        ? "bg-transparent text-[#c9a86c]/50 border-[#c9a86c]/30 cursor-default"
                        : "bg-[#c9a86c] text-[#0a0a0a] border-[#c9a86c] hover:bg-transparent hover:text-[#c9a86c] cursor-pointer"
                    }`}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </div>
            )}
          </div>

          {/* Right: Socials */}
          <div className="flex flex-col gap-12">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2.5 border border-[#78b48c]/30 rounded-sm self-start bg-[#78b48c]/04">
              <span className="w-1.5 h-1.5 rounded-full bg-[#78b48c] shadow-[0_0_8px_rgba(120,180,140,0.8)] animate-[pulse_2s_ease-in-out_infinite]" />
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#78b48c]/80">
                Available for opportunities
              </span>
            </div>

            {/* Socials list */}
            <div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-[#f0ece4]/25 mb-4">
                Find me on
              </div>
              <div className="flex flex-col gap-2.5">
                {socials.map((s) => (
                  <SocialLink key={s.label} social={s} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-[#f0ece4]/05 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="text-[18px] font-bold tracking-widest text-[#f0ece4]">
            A<span className="text-[#c9a86c]">S</span>C
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#f0ece4]/20">
            Designed &amp; Built by Ananthoji Sai Charish using{" "}
            <img
              className="w-4 h-4 inline align-middle mx-1"
              src="https://cdn.simpleicons.org/nextdotjs/white"
              alt="Next.js"
            />
            &nbsp;·&nbsp;{new Date().getFullYear()}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
