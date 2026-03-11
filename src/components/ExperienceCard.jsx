export function ExperienceCard({ exp, index }) {
  return (
    <div className="border border-[#c9a86c]/10 rounded-sm bg-[#c9a86c]/04 mt-4 transition-all duration-400 overflow-hidden">
      <div className="h-0.5 bg-[#c9a86c]" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 px-6 md:px-12 py-8 md:py-9">
        {/* Index */}
        <span className="text-[11px] tracking-[0.2em] text-[#c9a86c]/40 sm:min-w-7 hidden sm:block">
          0{index + 1}
        </span>

        {/* Company + Role */}
        <div className="flex-1">
          <h3 className="text-[18px] md:text-[20px] font-bold tracking-tight text-[#f0ece4]">
            {exp.company}
          </h3>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#c9a86c] mt-1.5">
            {exp.role}
          </p>
        </div>

        {/* Meta tags */}
        <div className="flex flex-wrap gap-2 items-center">
          <span
            className={`px-3 py-1 text-[9px] tracking-[0.2em] uppercase border rounded-sm
            ${exp.type === "Full Time" ? "border-[#c9a86c]/30 text-[#c9a86c]" : "border-[#f0ece4]/10 text-[#f0ece4]/40"}`}
          >
            {exp.type}
          </span>
          <span className="px-3 py-1 text-[9px] tracking-[0.2em] uppercase border border-[#f0ece4]/10 text-[#f0ece4]/35 rounded-sm">
            {exp.location}
          </span>
        </div>

        {/* Date */}
        <div className="text-left sm:text-right sm:min-w-35">
          <span className="text-[11px] tracking-[0.15em] text-[#f0ece4]/35">
            {exp.from} — {exp.to}
          </span>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="px-6 md:px-12 pb-10 md:pl-27">
        <div className="w-full h-px bg-linear-to-r from-[#c9a86c]/30 to-transparent mb-7" />
        <ul className="space-y-4.5 list-none p-0 m-0">
          {exp.responsibilities.map((r, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a86c] shrink-0" />
              <p className="m-0 text-[14px] leading-[1.85] text-[#f0ece4]/55 italic">
                {r}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
