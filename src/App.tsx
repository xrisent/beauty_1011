import { useState, useEffect, useRef, useCallback } from "react";

type Page = "home" | "services";

// ─── hooks ────────────────────────────────────────────────────────────────────

function useScrolled(threshold = 64) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── data ─────────────────────────────────────────────────────────────────────

const MASTERS = [
  {
    name: "Анна Соколова",
    role: "Стилист-колорист",
    specialty: "Окрашивание, балаяж, омбре",
    photo:
      "https://images.unsplash.com/photo-1611451444023-7fe9d86fe1d0?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Мария Иванова",
    role: "Парикмахер-стилист",
    specialty: "Стрижки, укладки, свадебные причёски",
    photo:
      "https://images.unsplash.com/photo-1636153279424-cb5d1e00f5a2?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Елена Петрова",
    role: "Мастер маникюра",
    specialty: "Маникюр, педикюр, наращивание",
    photo:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "София Николаева",
    role: "Визажист",
    specialty: "Макияж, коррекция бровей, ресницы",
    photo:
      "https://images.unsplash.com/photo-1581841064838-a470c740e8ee?w=400&h=500&fit=crop&auto=format",
  },
];

const TESTIMONIALS = [
  {
    name: "Ольга Смирнова",
    rating: 5,
    text: "Невероятно уютная атмосфера и профессиональный подход. Анна сделала мне балаяж мечты — я в абсолютном восторге!",
    date: "Август 2026",
  },
  {
    name: "Екатерина Морозова",
    rating: 5,
    text: "Давно ищу своего мастера по маникюру, и наконец нашла. Елена — настоящий профессионал, работает аккуратно и с душой.",
    date: "Июль 2026",
  },
  {
    name: "Диана Козлова",
    rating: 5,
    text: "Делала макияж на свадьбу у Софии. Результат превзошёл все ожидания — держался весь день, выглядел натурально и нежно.",
    date: "Июнь 2026",
  },
  {
    name: "Алиса Воронова",
    rating: 5,
    text: "Салон с безупречным вкусом во всём: от интерьера до качества услуг. Стрижку делала Мария — просто великолепно!",
    date: "Август 2026",
  },
  {
    name: "Наталья Сергеева",
    rating: 5,
    text: "Приятные цены, отличный сервис, кофе в подарок. Записываюсь уже третий раз подряд — рекомендую всем подругам!",
    date: "Сентябрь 2026",
  },
  {
    name: "Виктория Романова",
    rating: 5,
    text: "Кератиновое выпрямление — лучшее, что я делала со своими волосами. Волосы как шёлк уже три месяца!",
    date: "Июль 2026",
  },
];

const SERVICES = [
  {
    category: "Стрижки",
    items: [
      { name: "Женская стрижка", price: "от 2 500 ₽" },
      { name: "Мужская стрижка", price: "от 1 500 ₽" },
      { name: "Детская стрижка", price: "от 1 000 ₽" },
      { name: "Стрижка + укладка", price: "от 3 500 ₽" },
    ],
  },
  {
    category: "Окрашивание",
    items: [
      { name: "Однотонное окрашивание", price: "от 4 000 ₽" },
      { name: "Мелирование", price: "от 5 500 ₽" },
      { name: "Балаяж", price: "от 7 000 ₽" },
      { name: "Омбре", price: "от 6 500 ₽" },
      { name: "Тонирование", price: "от 2 500 ₽" },
    ],
  },
  {
    category: "Укладка и уход",
    items: [
      { name: "Укладка феном", price: "от 1 500 ₽" },
      { name: "Вечерняя причёска", price: "от 3 500 ₽" },
      { name: "Кератиновое выпрямление", price: "от 8 000 ₽" },
      { name: "Ботокс для волос", price: "от 6 000 ₽" },
      { name: "Маска / уход", price: "от 1 200 ₽" },
    ],
  },
  {
    category: "Маникюр и педикюр",
    items: [
      { name: "Маникюр классический", price: "от 1 200 ₽" },
      { name: "Маникюр с гель-лаком", price: "от 2 000 ₽" },
      { name: "Педикюр классический", price: "от 1 800 ₽" },
      { name: "Педикюр с покрытием", price: "от 2 500 ₽" },
      { name: "Наращивание ногтей", price: "от 3 500 ₽" },
    ],
  },
  {
    category: "Макияж",
    items: [
      { name: "Дневной макияж", price: "от 2 500 ₽" },
      { name: "Вечерний макияж", price: "от 3 500 ₽" },
      { name: "Свадебный макияж", price: "от 5 000 ₽" },
    ],
  },
  {
    category: "Брови и ресницы",
    items: [
      { name: "Коррекция бровей", price: "от 800 ₽" },
      { name: "Окраска бровей", price: "от 600 ₽" },
      { name: "Ламинирование ресниц", price: "от 2 500 ₽" },
      { name: "Наращивание ресниц", price: "от 3 500 ₽" },
    ],
  },
];

// ─── SVG icons ────────────────────────────────────────────────────────────────

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTelegram({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.5 3.5L2.5 10.5l6.5 2 2 6.5 3-4 5 4 2.5-15.5z" />
      <path d="M9 12.5l8.5-7" />
    </svg>
  );
}

function IconVK({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.585-1.496c.598-.19 1.365 1.26 2.179 1.818.615.422 1.082.33 1.082.33l2.172-.03s1.136-.07.597-..965c-.044-.073-.314-.664-1.618-1.878-1.366-1.271-1.183-1.065.462-3.263.999-1.333 1.398-2.147 1.273-2.494-.12-.332-.855-.244-.855-.244l-2.444.015s-.181-.025-.316.056c-.132.078-.216.264-.216.264s-.387 1.043-.903 1.93c-1.088 1.85-1.524 1.948-1.702 1.832-.413-.267-.31-1.075-.31-1.649 0-1.793.272-2.54-.528-2.733-.265-.064-.46-.106-1.138-.113-.87-.009-1.607.003-2.023.207-.277.138-.491.447-.361.464.161.022.527.099.72.363.249.341.24 1.107.24 1.107s.143 2.11-.333 2.371c-.327.18-.775-.187-1.737-1.861-.494-.855-.867-1.8-.867-1.8s-.072-.18-.202-.276c-.157-.117-.378-.153-.378-.153l-2.322.015s-.349.01-.477.162c-.114.135-.009.414-.009.414s1.819 4.259 3.876 6.403c1.888 1.97 4.03 1.84 4.03 1.84h.972z" />
    </svg>
  );
}

function IconStar({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "#C4613A" : "none"}
      stroke="#C4613A"
      strokeWidth="1.5"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4613A"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 22c1.25-1.25 2.59-2.43 4.08-3.22C8.57 17.37 11.24 17 12 17c3 0 6-1 8-4 0 0-1 5-5 7H6" />
      <path d="M6 17C4 15 3 12 3 9c0-4 3-7 9-7 3 0 6.5 2 9 5" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4613A"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M5.64 18.36l1.41-1.41M16.95 7.05l1.41-1.41" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4613A"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4613A"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4613A"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.62 5c-.03-1.1.77-2.03 1.87-2.07H6.5a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 6.06 6.06l1.75-1.75a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4613A"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4613A"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

// ─── components ───────────────────────────────────────────────────────────────

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} filled={i < count} />
      ))}
    </div>
  );
}

// ─── app ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = useCallback((p: Page) => {
    setPage(p);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  return (
    <div style={{ minHeight: "100%" }}>
      <Header page={page} onNavigate={navigate} />
      {page === "home" ? <HomePage onNavigate={navigate} /> : <ServicesPage />}
      <Footer onNavigate={navigate} />
    </div>
  );
}
