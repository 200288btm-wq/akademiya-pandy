import { Link, useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useModal } from "./ModalContext";
import { phoneHref, useContent } from "../content/ContentContext";
import svgPaths from "../../imports/svg-sfs6t7friq";
import { Phone, ArrowLeft, ArrowUp } from "lucide-react";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0EDD8] relative">
      <ScrollToTop />
      <Header scrolled={scrolled} />
      <main>{children}</main>
      <Footer />

      {/* Кнопка "Наверх" */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#7BAF8E] hover:bg-[#6a9e7d] text-white rounded-full shadow-lg flex items-center justify-center transition-all border-none cursor-pointer"
          aria-label="Наверх"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

function Header({ scrolled }: { scrolled: boolean }) {
  const { openModal } = useModal();
  const { home, reviews, faq, workshops } = useContent();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  // Пункты меню. Якорные ссылки показываются только если соответствующая
  // секция включена и не пуста — иначе клик уводил бы в никуда.
  const menu = [
    { label: "О центре", anchor: "about", show: home.about.enabled },
    { label: "Направления", to: "/programs", show: true },
    { label: "Мастер-классы", to: "/workshops", show: workshops.enabled && workshops.items.length > 0 },
    { label: "Отзывы", anchor: "reviews", show: reviews.length > 0 },
    { label: "Вопросы", to: "/faq", show: faq.length > 0 },
    { label: "Контакты", to: "/contacts", show: true },
  ].filter((item) => item.show);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${scrolled ? "py-1" : "py-2"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {!isHome && (
                <button
                  onClick={() => navigate(-1)}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#F0EDD8] transition-colors border-none cursor-pointer bg-transparent mr-1"
                  aria-label="Назад"
                >
                  <ArrowLeft size={20} className="text-[#3D3D3D]" />
                </button>
              )}
              <Link to="/">
                <img
                  src="/logo.svg"
                  alt="Академия Панды"
                  className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-[40px]" : "h-[55px]"}`}
                />
              </Link>
            </div>

            {/* Десктоп меню — не трогаем */}
            <nav className="hidden md:flex items-center gap-8">
              {menu.map((item) =>
                item.to ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] hover:text-[#7BAF8E] transition-colors text-lg"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.anchor!)}
                    className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] hover:text-[#7BAF8E] transition-colors text-lg bg-transparent border-none cursor-pointer p-0"
                  >
                    {item.label}
                  </button>
                )
              )}
            </nav>

            <div className="flex items-center gap-2">
              {/* Кнопка записаться — только десктоп */}
              <button onClick={() => openModal()} className="hidden md:flex items-center gap-2 bg-[#F2A65A] hover:bg-[#e89542] text-white px-6 py-3 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold transition-colors border-none cursor-pointer">
                <Phone size={20} />
                Записаться
              </button>
              {/* Гамбургер — только мобильный */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border-none cursor-pointer bg-transparent"
                aria-label="Меню"
              >
                <span className="w-6 h-0.5 bg-[#3D3D3D] block rounded"></span>
                <span className="w-6 h-0.5 bg-[#3D3D3D] block rounded"></span>
                <span className="w-6 h-0.5 bg-[#3D3D3D] block rounded"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Мобильное меню — выезжает справа */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Затемнение */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          {/* Панель */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col">
            {/* Шапка панели */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <img src="/logo.svg" alt="Академия Панды" className="h-10 w-auto object-contain" />
              <button onClick={() => setMobileOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#F0EDD8] border-none cursor-pointer bg-transparent">
                <span className="text-2xl text-[#3D3D3D] leading-none">×</span>
              </button>
            </div>
            {/* Ссылки */}
            <nav className="flex flex-col px-6 py-6 gap-5 flex-1">
              {menu.map((item) =>
                item.to ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] text-xl hover:text-[#7BAF8E] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.anchor!)}
                    className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] text-xl text-left bg-transparent border-none cursor-pointer p-0 hover:text-[#7BAF8E] transition-colors"
                  >
                    {item.label}
                  </button>
                )
              )}
            </nav>
            {/* Кнопка записаться */}
            <div className="px-6 pb-8">
              <button
                onClick={() => { setMobileOpen(false); openModal(); }}
                className="w-full flex items-center justify-center gap-2 bg-[#F2A65A] hover:bg-[#e89542] text-white px-6 py-4 rounded-xl font-['Nunito_Sans',sans-serif] font-semibold text-lg transition-colors border-none cursor-pointer"
              >
                <Phone size={20} />
                Записаться
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Footer() {
  const { openModal } = useModal();
  const { contacts, faq, workshops } = useContent();
  const footer = contacts.footer;

  const links = [
    { label: "Главная", to: "/", show: true },
    { label: "Программы", to: "/programs", show: true },
    { label: "Мастер-классы", to: "/workshops", show: workshops.enabled && workshops.items.length > 0 },
    { label: "Контакты", to: "/contacts", show: true },
    { label: "Вопросы и ответы", to: "/faq", show: faq.length > 0 },
  ].filter((item) => item.show);
  return (
    <footer className="bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и слоган */}
          <div className="col-span-1">
            <img src="/logo.svg" alt="Академия Панды" className="h-[60px] w-auto object-contain mb-4" />
            <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] text-sm leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="font-['Nunito',sans-serif] font-bold text-[#3D3D3D] mb-4">
              Меню
            </h4>
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] hover:text-[#7BAF8E] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-['Nunito',sans-serif] font-bold text-[#3D3D3D] mb-4">
              Контакты
            </h4>
            <ul className="space-y-2">
              {contacts.phone && (
                <li className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D]">
                  <a href={phoneHref(contacts.phone)} className="hover:text-[#7BAF8E] transition-colors">
                    {contacts.phone}
                  </a>
                </li>
              )}
              <li className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] text-sm">
                {contacts.address}
              </li>
              {contacts.addressExtra && (
                <li className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] text-sm">
                  {contacts.addressExtra}
                </li>
              )}
            </ul>
          </div>

          {/* Соцсети */}
          <div>
            <h4 className="font-['Nunito',sans-serif] font-bold text-[#3D3D3D] mb-4">
              Мы в соцсетях
            </h4>
            <div className="flex gap-3">
              {contacts.vkPublic && (
                <a
                  href={contacts.vkPublic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#7BAF8E] hover:bg-[#6a9e7d] rounded-full flex items-center justify-center text-white transition-colors font-bold text-sm"
                  aria-label="VK"
                >
                  VK
                </a>
              )}
              {contacts.telegramPublic && (
                <a
                  href={contacts.telegramPublic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#7BAF8E] hover:bg-[#6a9e7d] rounded-full flex items-center justify-center text-white transition-colors font-bold text-sm"
                  aria-label="Telegram"
                >
                  TG
                </a>
              )}
              <button
                onClick={() => openModal()}
                className="w-10 h-10 bg-[#F2A65A] hover:bg-[#e89542] rounded-full flex items-center justify-center text-white transition-colors border-none cursor-pointer"
                aria-label="Phone"
              >
                <Phone size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
          <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] text-sm text-center">
            {footer.copyright}
          </p>
          {footer.requisites && (
            <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] text-sm opacity-60 mt-2">
              {footer.requisites}
            </p>
          )}
          <Link
            to="/privacy"
            className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] text-sm hover:text-[#7BAF8E] transition-colors text-center"
          >
            Политика обработки персональных данных
          </Link>
        </div>
      </div>
    </footer>
  );
}
