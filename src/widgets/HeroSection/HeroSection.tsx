export function Hero({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#2A221E",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&h=1080&fit=crop&auto=format)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          opacity: 0.55,
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(28,26,24,0.80) 38%, rgba(28,26,24,0.25) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 40px 80px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 640 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 28,
              opacity: 0.9,
            }}
          >
            <span
              style={{
                display: "block",
                width: 32,
                height: 1.5,
                backgroundColor: "#C4613A",
              }}
            />
            <span
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#E8846A",
              }}
            >
              Салон красоты в Москве
            </span>
          </div>

          <h1
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 300,
              fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
              lineHeight: 1.08,
              color: "#FAF8F5",
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            Красота, которая
            <br />
            <em style={{ fontStyle: "italic", color: "#F3D5C4" }}>
              говорит за себя
            </em>
          </h1>

          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 300,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "rgba(250,248,245,0.75)",
              marginBottom: 40,
              maxWidth: 460,
            }}
          >
            Профессиональные мастера, атмосфера спокойствия и результат, который
            превосходит ожидания.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              className="btn-primary"
              style={{ fontSize: "0.85rem", padding: "0.85rem 2rem" }}
              onClick={() =>
                document
                  .getElementById("contacts")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Записаться на приём
            </button>
            <button
              className="btn-outline"
              style={{ fontSize: "0.85rem", padding: "0.85rem 2rem" }}
              onClick={() => {
                onNavigate("services");
                window.scrollTo(0, 0);
              }}
            >
              Все услуги и цены
            </button>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 64,
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "8+", label: "лет на рынке" },
              { num: "4", label: "мастера" },
              { num: "2 000+", label: "довольных клиентов" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 400,
                    fontSize: "2rem",
                    color: "#FAF8F5",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(250,248,245,0.5)",
                    marginTop: 6,
                    letterSpacing: "0.03em",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.5,
        }}
      >
        <span
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#FAF8F5",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background:
              "linear-gradient(to bottom, rgba(250,248,245,0.6), transparent)",
          }}
        />
      </div>
    </section>
  );
}
