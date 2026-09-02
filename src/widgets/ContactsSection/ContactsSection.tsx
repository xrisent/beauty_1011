import { SectionLabel } from "shared/ui";

export function Contacts() {
  const { ref, visible } = useInView();
  return (
    <section
      id="contacts"
      style={{
        backgroundColor: "#FAF8F5",
        padding: "100px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
          style={{ marginBottom: 64 }}
        >
          <SectionLabel>Контакты</SectionLabel>
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
            Найдите нас
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Info */}
          <div className={`reveal ${visible ? "visible" : ""}`}>
            {[
              {
                icon: <IconPin />,
                label: "Адрес",
                text: "ул. Пречистенка, 12\nМосква, 119034",
              },
              {
                icon: <IconPhone />,
                label: "Телефон",
                text: "+7 (495) 123-45-67",
              },
              {
                icon: <IconMail />,
                label: "Email",
                text: "hello@lumiere-salon.ru",
              },
              {
                icon: <IconClock />,
                label: "Режим работы",
                text: "Понедельник – Воскресенье\n09:00 – 21:00",
              },
            ].map(({ icon, label, text }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: 16,
                  marginBottom: 32,
                  paddingBottom: 32,
                  borderBottom: "1px solid #E2DAD0",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: "#F3D5C4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.72rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#C4613A",
                      marginBottom: 6,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "0.925rem",
                      lineHeight: 1.6,
                      color: "#3A3632",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {text}
                  </div>
                </div>
              </div>
            ))}

            {/* Booking prompt */}
            <div
              style={{
                backgroundColor: "#C4613A",
                borderRadius: 16,
                padding: "28px 24px",
                backgroundImage:
                  "linear-gradient(135deg, #C4613A 0%, #AD5030 100%)",
              }}
            >
              <h3
                style={{
                  fontFamily: "Fraunces, serif",
                  fontWeight: 400,
                  fontSize: "1.4rem",
                  color: "#FAF8F5",
                  marginBottom: 10,
                }}
              >
                Запишитесь онлайн
              </h3>
              <p
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(250,248,245,0.75)",
                  marginBottom: 20,
                  lineHeight: 1.6,
                }}
              >
                Оставьте заявку — мы свяжемся с вами в течение 15 минут.
              </p>
              <button
                style={{
                  background: "rgba(250,248,245,0.15)",
                  border: "1.5px solid rgba(250,248,245,0.5)",
                  borderRadius: 10,
                  color: "#FAF8F5",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  padding: "0.65rem 1.5rem",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                  width: "100%",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "rgba(250,248,245,0.25)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "rgba(250,248,245,0.15)")
                }
              >
                Написать в Telegram
              </button>
            </div>
          </div>

          {/* Map */}
          <div
            className={`reveal reveal-d2 ${visible ? "visible" : ""}`}
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid #E2DAD0",
              height: 520,
              position: "relative",
              backgroundColor: "#E8E2DA",
            }}
          >
            <iframe
              title="Карта салона Lumière"
              src="https://www.openstreetmap.org/export/embed.html?bbox=37.56%2C55.73%2C37.65%2C55.78&amp;layer=mapnik&amp;marker=55.7494%2C37.6020"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
              }}
              loading="lazy"
            />
            {/* Overlay label */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                backgroundColor: "#FAF8F5",
                borderRadius: 12,
                padding: "12px 16px",
                boxShadow: "0 4px 20px rgba(28,26,24,0.12)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <IconPin />
              <div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#1C1A18",
                  }}
                >
                  Lumière Beauty Studio
                </div>
                <div
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.75rem",
                    color: "#8A8278",
                  }}
                >
                  ул. Пречистенка, 12
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
