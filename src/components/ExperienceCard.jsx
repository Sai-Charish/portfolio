export function ExperienceCard({ exp, index }) {
  return (
    <div
      style={{
        border: "1px solid rgba(201,168,108,0.1)",
        borderRadius: "4px",

        transition: "all 0.4s ease",
        background: "rgba(201,168,108,0.04)",
        marginTop: "1rem",
      }}
    >
      <div style={{ border: "2px solid #c9a86c" }}></div>
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          padding: "36px 48px",
        }}
      >
        {/* Index */}
        <span
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "rgba(201,168,108,0.4)",
            minWidth: "28px",
            fontFamily: "'Georgia', serif",
          }}
        >
          0{index + 1}
        </span>

        {/* Company + Role */}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              letterSpacing: "-0.01em",
              color: "#f0ece4",
              margin: 0,
              fontFamily: "'Georgia', serif",
              transition: "color 0.3s ease",
            }}
          >
            {exp.company}
          </h3>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#c9a86c",
              margin: "6px 0 0",
              fontFamily: "'Georgia', serif",
              opacity: 1,
              transition: "opacity 0.3s ease",
            }}
          >
            {exp.role}
          </p>
        </div>

        {/* Meta tags */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span
            style={{
              padding: "4px 12px",
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              border: "1px solid rgba(201,168,108,0.3)",
              color:
                exp.type === "Full Time" ? "#c9a86c" : "rgba(240,236,228,0.4)",
              borderRadius: "2px",
              fontFamily: "'Georgia', serif",
            }}
          >
            {exp.type}
          </span>
          <span
            style={{
              padding: "4px 12px",
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              border: "1px solid rgba(240,236,228,0.1)",
              color: "rgba(240,236,228,0.35)",
              borderRadius: "2px",
              fontFamily: "'Georgia', serif",
            }}
          >
            {exp.location}
          </span>
        </div>

        {/* Date range */}
        <div style={{ textAlign: "right", minWidth: "140px" }}>
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: "rgba(240,236,228,0.35)",
              fontFamily: "'Georgia', serif",
            }}
          >
            {exp.from} — {exp.to}
          </span>
        </div>

        {/* Expand chevron */}
      </div>

      {/* Expandable responsibilities */}
      <div
        style={{
          maxHeight: "400px",
          overflow: "hidden",
          transition: "max-height 0.5s ease",
        }}
      >
        <div style={{ padding: "0 48px 40px 108px" }}>
          <div
            style={{
              width: "100%",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(201,168,108,0.3), transparent)",
              marginBottom: "28px",
            }}
          />
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {exp.responsibilities.map((r, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    marginTop: "7px",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#c9a86c",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    lineHeight: "1.85",
                    color: "rgba(240,236,228,0.55)",
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                  }}
                >
                  {r}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
