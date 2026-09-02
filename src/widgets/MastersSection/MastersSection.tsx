export function Masters() {
  const { ref, visible } = useInView();
  return (
    <section
      id="masters"
      style={{
        backgroundColor: "#1C1A18",
        padding: "100px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
          style={{
            marginBottom: 64,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
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
                Наши мастера
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 400,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                lineHeight: 1.12,
                color: "#FAF8F5",
                letterSpacing: "-0.02em",
              }}
            >
              Команда профессионалов
            </h2>
          </div>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: "rgba(250,248,245,0.5)",
              maxWidth: 360,
            }}
          >
            Каждый мастер — специалист с многолетним опытом и постоянным
            обучением у лучших.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 28,
          }}
        >
          {MASTERS.map((master, i) => {
            const card = useInView();
            return (
              <div
                key={master.name}
                ref={card.ref}
                className={`reveal reveal-d${i + 1} card-hover ${card.visible ? "visible" : ""}`}
                style={{
                  backgroundColor: "#242220",
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid rgba(226,218,208,0.08)",
                }}
              >
                <div
                  style={{
                    aspectRatio: "4/5",
                    backgroundColor: "#2E2A28",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={master.photo}
                    alt={master.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <h3
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontWeight: 400,
                      fontSize: "1.2rem",
                      color: "#FAF8F5",
                      marginBottom: 4,
                    }}
                  >
                    {master.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.72rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#C4613A",
                      marginBottom: 10,
                    }}
                  >
                    {master.role}
                  </div>
                  <p
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "0.82rem",
                      color: "rgba(250,248,245,0.45)",
                      lineHeight: 1.6,
                      marginBottom: 20,
                    }}
                  >
                    {master.specialty}
                  </p>
                  <button
                    className="btn-primary"
                    style={{
                      fontSize: "0.78rem",
                      padding: "0.55rem 1.25rem",
                      width: "100%",
                    }}
                    onClick={() =>
                      document
                        .getElementById("contacts")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Записаться
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
