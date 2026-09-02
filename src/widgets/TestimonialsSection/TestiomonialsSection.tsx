import { SectionLabel } from "shared/ui";

export function Testimonials() {
  const { ref, visible } = useInView();
  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: "#F0EBE3",
        padding: "100px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <SectionLabel>Отзывы</SectionLabel>
          <h2
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1.12,
              color: "#1C1A18",
              letterSpacing: "-0.02em",
            }}
          >
            Наши клиенты о нас
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((t, i) => {
            const card = useInView(0.08);
            return (
              <div
                key={t.name}
                ref={card.ref}
                className={`reveal reveal-d${(i % 3) + 1} card-hover ${card.visible ? "visible" : ""}`}
                style={{
                  backgroundColor: "#FAF8F5",
                  borderRadius: 18,
                  padding: "32px 28px",
                  border: "1px solid #E2DAD0",
                  boxShadow: "0 2px 12px rgba(28,26,24,0.05)",
                }}
              >
                <Stars count={t.rating} />
                <p
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.925rem",
                    lineHeight: 1.75,
                    color: "#3A3632",
                    margin: "18px 0 24px",
                  }}
                >
                  "{t.text}"
                </p>
                <div
                  style={{
                    borderTop: "1px solid #E2DAD0",
                    paddingTop: 18,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "#1C1A18",
                      }}
                    >
                      {t.name}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "0.75rem",
                      color: "#8A8278",
                    }}
                  >
                    {t.date}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
