import { SectionLabel } from "shared/ui";

export function About() {
  const { ref, visible } = useInView();
  return (
    <section
      id="about"
      style={{ backgroundColor: "#FAF8F5", padding: "100px 40px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "64px 80px",
            alignItems: "center",
          }}
        >
          {/* Text */}
          <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
            <SectionLabel>О нас</SectionLabel>
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 400,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                lineHeight: 1.12,
                color: "#1C1A18",
                marginBottom: 24,
                letterSpacing: "-0.02em",
              }}
            >
              Пространство,
              <br />
              <em style={{ fontStyle: "italic", color: "#C4613A" }}>
                созданное для вас
              </em>
            </h2>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#8A8278",
                marginBottom: 20,
              }}
            >
              Lumière — это больше чем салон красоты. Мы создаём пространство,
              где каждый клиент чувствует себя особенным. Наша команда следит за
              мировыми трендами и использует только сертифицированные
              профессиональные средства.
            </p>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#8A8278",
                marginBottom: 40,
              }}
            >
              Мы убеждены: красота — это инвестиция в себя. Именно поэтому мы
              предлагаем честные цены, индивидуальный подход и результат,
              который радует долгое время.
            </p>
            <button
              className="btn-outline-dark"
              onClick={() =>
                document
                  .getElementById("masters")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Познакомиться с мастерами
            </button>
          </div>

          {/* Image */}
          <div
            className={`reveal reveal-d2 ${visible ? "visible" : ""}`}
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                backgroundColor: "#E8E2DA",
                aspectRatio: "4/5",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&h=1000&fit=crop&auto=format"
                alt="Интерьер салона Lumière"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            {/* Floating card */}
            <div
              style={{
                position: "absolute",
                bottom: -20,
                left: -20,
                backgroundColor: "#FAF8F5",
                borderRadius: 16,
                padding: "20px 24px",
                boxShadow: "0 8px 32px rgba(28,26,24,0.12)",
                border: "1px solid #E2DAD0",
                minWidth: 200,
              }}
            >
              <div
                style={{
                  fontFamily: "Fraunces, serif",
                  fontSize: "2rem",
                  fontWeight: 400,
                  color: "#C4613A",
                  lineHeight: 1,
                }}
              >
                5.0
              </div>
              <Stars />
              <div
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.8rem",
                  color: "#8A8278",
                  marginTop: 6,
                }}
              >
                Средняя оценка
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 32,
            marginTop: 80,
          }}
        >
          {[
            {
              icon: <IconLeaf />,
              title: "Натуральные составы",
              text: "Используем только экологичные, сертифицированные средства ведущих брендов.",
              delay: "",
            },
            {
              icon: <IconSparkle />,
              title: "Индивидуальный подход",
              text: "Каждый клиент уникален — мы подбираем технику и стиль специально для вас.",
              delay: "reveal-d2",
            },
            {
              icon: <IconHeart />,
              title: "Забота и внимание",
              text: "Комфорт и безопасность — наш абсолютный приоритет в каждой процедуре.",
              delay: "reveal-d3",
            },
          ].map(({ icon, title, text, delay }) => {
            const pillar = useInView();
            return (
              <div
                key={title}
                ref={pillar.ref}
                className={`reveal ${delay} ${pillar.visible ? "visible" : ""}`}
                style={{
                  backgroundColor: "#F0EBE3",
                  borderRadius: 16,
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    backgroundColor: "#FAF8F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  {icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 400,
                    fontSize: "1.2rem",
                    color: "#1C1A18",
                    marginBottom: 10,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "#8A8278",
                  }}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
