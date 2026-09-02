function Header({
  page,
  onNavigate,
}: {
  page: Page;
  onNavigate: (p: Page) => void;
}) {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = useCallback(
    (id: string) => {
      setMobileOpen(false);
      if (page !== "home") {
        onNavigate("home");
        setTimeout(() => {
          document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [page, onNavigate],
  );

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 40px",
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: scrolled ? "rgba(250,248,245,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(226,218,208,0.8)" : "none",
      }}
    >
      {/* Logo */}
      <button
        onClick={() => onNavigate("home")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <span
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 400,
            fontSize: "1.35rem",
            color: scrolled ? "#1C1A18" : "#FAF8F5",
            letterSpacing: "-0.01em",
            transition: "color 0.3s ease",
          }}
        >
          Lumière
        </span>
      </button>

      {/* Desktop nav */}
      <nav
        style={{ display: "flex", alignItems: "center", gap: 36 }}
        className="hidden md:flex"
      >
        {[
          { label: "Главная", action: () => scrollTo("hero") },
          {
            label: "Услуги",
            action: () => {
              onNavigate("services");
              window.scrollTo(0, 0);
            },
          },
          { label: "Мастера", action: () => scrollTo("masters") },
          { label: "Отзывы", action: () => scrollTo("testimonials") },
          { label: "Контакты", action: () => scrollTo("contacts") },
        ].map(({ label, action }) => (
          <button
            key={label}
            onClick={action}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 500,
              fontSize: "0.875rem",
              color: scrolled ? "#1C1A18" : "rgba(250,248,245,0.9)",
              transition: "color 0.2s ease",
              padding: "4px 0",
              letterSpacing: "0.01em",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#C4613A")}
            onMouseOut={(e) =>
              (e.currentTarget.style.color = scrolled
                ? "#1C1A18"
                : "rgba(250,248,245,0.9)")
            }
          >
            {label}
          </button>
        ))}
        <button
          className="btn-primary"
          style={{ fontSize: "0.8rem", padding: "0.6rem 1.25rem" }}
          onClick={() => scrollTo("contacts")}
        >
          Записаться онлайн
        </button>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="flex md:hidden"
        onClick={() => setMobileOpen((v) => !v)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          padding: 4,
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: 24,
              height: 1.5,
              backgroundColor: scrolled ? "#1C1A18" : "#FAF8F5",
              transition: "background 0.3s",
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 72,
            left: 0,
            right: 0,
            backgroundColor: "#FAF8F5",
            borderBottom: "1px solid #E2DAD0",
            padding: "24px 24px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {[
            { label: "Главная", action: () => scrollTo("hero") },
            {
              label: "Услуги",
              action: () => {
                setMobileOpen(false);
                onNavigate("services");
                window.scrollTo(0, 0);
              },
            },
            { label: "Мастера", action: () => scrollTo("masters") },
            { label: "Отзывы", action: () => scrollTo("testimonials") },
            { label: "Контакты", action: () => scrollTo("contacts") },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 500,
                fontSize: "1rem",
                color: "#1C1A18",
                padding: "10px 0",
                textAlign: "left",
                borderBottom: "1px solid #E2DAD0",
              }}
            >
              {label}
            </button>
          ))}
          <button
            className="btn-primary"
            style={{ marginTop: 16, width: "100%" }}
            onClick={() => scrollTo("contacts")}
          >
            Записаться онлайн
          </button>
        </div>
      )}
    </header>
  );
}
