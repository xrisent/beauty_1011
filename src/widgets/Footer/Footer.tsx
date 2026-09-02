function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer
      style={{
        backgroundColor: "#1C1A18",
        color: "#FAF8F5",
        padding: "64px 40px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "48px 64px",
          marginBottom: 56,
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "Fraunces, serif",
              fontSize: "1.5rem",
              fontWeight: 400,
              marginBottom: 16,
              letterSpacing: "-0.01em",
            }}
          >
            Lumière
          </div>
          <p
            style={{
              color: "rgba(250,248,245,0.55)",
              fontSize: "0.875rem",
              lineHeight: 1.7,
              maxWidth: 220,
            }}
          >
            Салон красоты, где каждая деталь создана для вашего удовольствия.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
            {[
              { icon: <IconInstagram />, label: "Instagram" },
              { icon: <IconTelegram />, label: "Telegram" },
              { icon: <IconVK />, label: "VK" },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                style={{
                  color: "rgba(250,248,245,0.5)",
                  transition: "color 0.2s ease",
                  display: "flex",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#C4613A")}
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "rgba(250,248,245,0.5)")
                }
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "rgba(250,248,245,0.4)",
              marginBottom: 20,
            }}
          >
            Навигация
          </div>
          {[
            {
              label: "Главная",
              action: () => {
                onNavigate("home");
                window.scrollTo(0, 0);
              },
            },
            {
              label: "Услуги",
              action: () => {
                onNavigate("services");
                window.scrollTo(0, 0);
              },
            },
            {
              label: "Мастера",
              action: () => {
                onNavigate("home");
                setTimeout(
                  () =>
                    document
                      .getElementById("masters")
                      ?.scrollIntoView({ behavior: "smooth" }),
                  100,
                );
              },
            },
            {
              label: "Отзывы",
              action: () => {
                onNavigate("home");
                setTimeout(
                  () =>
                    document
                      .getElementById("testimonials")
                      ?.scrollIntoView({ behavior: "smooth" }),
                  100,
                );
              },
            },
            {
              label: "Контакты",
              action: () => {
                onNavigate("home");
                setTimeout(
                  () =>
                    document
                      .getElementById("contacts")
                      ?.scrollIntoView({ behavior: "smooth" }),
                  100,
                );
              },
            },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              style={{
                display: "block",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.9rem",
                color: "rgba(250,248,245,0.65)",
                padding: "5px 0",
                textAlign: "left",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#C4613A")}
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "rgba(250,248,245,0.65)")
              }
            >
              {label}
            </button>
          ))}
        </div>

        {/* Contacts */}
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "rgba(250,248,245,0.4)",
              marginBottom: 20,
            }}
          >
            Контакты
          </div>
          {[
            { icon: <IconPin />, text: "ул. Пречистенка, 12, Москва" },
            { icon: <IconPhone />, text: "+7 (495) 123-45-67" },
            { icon: <IconMail />, text: "hello@lumiere-salon.ru" },
            { icon: <IconClock />, text: "Пн–Вс: 09:00 – 21:00" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <span style={{ marginTop: 1, flexShrink: 0, opacity: 0.7 }}>
                {icon}
              </span>
              <span
                style={{
                  color: "rgba(250,248,245,0.65)",
                  fontSize: "0.875rem",
                  lineHeight: 1.5,
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(226,218,208,0.15)",
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ color: "rgba(250,248,245,0.3)", fontSize: "0.8rem" }}>
          © 2026 Lumière Beauty Studio. Все права защищены.
        </span>
        <span style={{ color: "rgba(250,248,245,0.3)", fontSize: "0.8rem" }}>
          Москва, Пречистенка 12
        </span>
      </div>
    </footer>
  );
}
