import { SERVICES } from "entities/service/model/mock";
import { useInView } from "shared/hooks";
import { SectionLabel } from "shared/ui";

export function ServicesPage() {
  return (
    <div style={{ backgroundColor: "#FAF8F5", paddingTop: 72 }}>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#1C1A18",
          padding: "80px 40px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1633681926019-03bd9325ec20?w=1600&h=600&fit=crop&auto=format)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
          }}
        />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Прайс-лист</SectionLabel>
          <h1
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 300,
              fontSize: "clamp(2.4rem, 4vw, 4rem)",
              lineHeight: 1.1,
              color: "#FAF8F5",
              letterSpacing: "-0.02em",
              maxWidth: 600,
            }}
          >
            Услуги и цены
          </h1>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "1rem",
              color: "rgba(250,248,245,0.55)",
              marginTop: 16,
              lineHeight: 1.7,
            }}
          >
            Точная стоимость рассчитывается на консультации — цены могут
            варьироваться в зависимости от длины волос и сложности работы.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 40,
          }}
        >
          {SERVICES.map((cat, ci) => {
            const card = useInView(0.1);
            return (
              <div
                key={cat.category}
                ref={card.ref}
                className={`reveal reveal-d${(ci % 3) + 1} ${card.visible ? "visible" : ""}`}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 20,
                  border: "1px solid #E2DAD0",
                  overflow: "hidden",
                  boxShadow: "0 2px 16px rgba(28,26,24,0.04)",
                }}
              >
                {/* Category header */}
                <div
                  style={{
                    backgroundColor: "#F0EBE3",
                    padding: "24px 28px 20px",
                    borderBottom: "1px solid #E2DAD0",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontWeight: 400,
                      fontSize: "1.4rem",
                      color: "#1C1A18",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cat.category}
                  </h2>
                </div>
                {/* Items */}
                <div style={{ padding: "8px 28px 28px" }}>
                  {cat.items.map((item, ii) => (
                    <div
                      key={item.name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        padding: "14px 0",
                        borderBottom:
                          ii < cat.items.length - 1
                            ? "1px dashed #E2DAD0"
                            : "none",
                        gap: 16,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Manrope, sans-serif",
                          fontSize: "0.9rem",
                          color: "#3A3632",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "Manrope, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          color: "#C4613A",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div
          style={{
            marginTop: 64,
            backgroundColor: "#1C1A18",
            borderRadius: 24,
            padding: "48px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 32,
            backgroundImage:
              "linear-gradient(110deg, #1C1A18 55%, #2E1C14 100%)",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                color: "#FAF8F5",
                letterSpacing: "-0.02em",
                marginBottom: 10,
              }}
            >
              Готовы преобразиться?
            </h3>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.9rem",
                color: "rgba(250,248,245,0.55)",
                lineHeight: 1.6,
              }}
            >
              Запишитесь онлайн — мы подберём удобное время.
            </p>
          </div>
          <button
            className="btn-primary"
            style={{ fontSize: "0.85rem", padding: "0.9rem 2.2rem" }}
          >
            Записаться на приём
          </button>
        </div>
      </div>
    </div>
  );
}
