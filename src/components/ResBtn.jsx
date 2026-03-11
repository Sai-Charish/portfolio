"use client";

export default function ResBtn() {
  return (
    <a
      href="/resume.pdf"
      download="resume.pdf"
      className="inline-block px-5.5 py-2.25 text-[10px] tracking-[0.25em] uppercase
        text-[#c9a86c] bg-transparent border border-[#c9a86c]/50 rounded-sm
        transition-all duration-300 hover:bg-[#c9a86c] hover:text-[#0a0a0a] hover:border-[#c9a86c]
        font-serif"
    >
      Résumé
    </a>
  );
}
