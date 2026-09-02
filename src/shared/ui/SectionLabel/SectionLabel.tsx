export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 16,
      }}
    >
      <span
        style={{
          display: "block",
          width: 28,
          height: 1.5,
          backgroundColor: "#C4613A",
        }}
      />
      <span
        style={{
          fontFamily: "Manrope, sans-serif",
          fontWeight: 600,
          fontSize: "0.7rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#C4613A",
        }}
      >
        {children}
      </span>
    </div>
  );
}
