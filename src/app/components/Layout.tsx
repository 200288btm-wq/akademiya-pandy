import { Link, useNavigate, useLocation } from "react-router";
import { useEffect } from "react";
import { useModal } from "./ModalContext";
import svgPaths from "../../imports/svg-sfs6t7friq";
import { MessageCircle, Phone } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-[#F0EDD8] relative">
      <ScrollToTop />
      {/* Навигация */}
      <Header />
      
      {/* Основной контент */}
      <main>{children}</main>
      
      {/* Футер */}
      <Footer />
    </div>
  );
}

function PawPrint({ size, rotation }: { size: number; rotation: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className="text-[#7BAF8E]"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <ellipse cx="50" cy="70" rx="20" ry="25" />
      <ellipse cx="30" cy="40" rx="12" ry="15" />
      <ellipse cx="50" cy="35" rx="12" ry="15" />
      <ellipse cx="70" cy="40" rx="12" ry="15" />
      <ellipse cx="85" cy="55" rx="10" ry="12" />
    </svg>
  );
}



function Header() {
  const { openModal } = useModal();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Академия Панды" className="h-[60px] w-auto object-contain" />
            <div className="hidden">
              <svg className="h-full w-full" viewBox="0 0 226 76" fill="none">
                <g clipPath="url(#clip0_1_832)">
                  <path d={svgPaths.p38a13b00} fill="#F3F3F7" fillOpacity="0.0117647" />
                  <path d={svgPaths.pb181f00} fill="#F3F3F7" fillOpacity="0.0117647" />
                  <path d={svgPaths.p230cad00} fill="#080808" />
                  <path d={svgPaths.p37293700} fill="#080808" />
                  <path d={svgPaths.pe256300} fill="#080808" />
                  <path d={svgPaths.p12470f80} fill="#080808" />
                  <path d={svgPaths.p2293a000} fill="#080808" />
                  <path d={svgPaths.p35bb4800} fill="#080808" />
                  <path d={svgPaths.p88cf880} fill="#080808" />
                  <path d={svgPaths.pa5c14f0} fill="#080808" />
                  <path d={svgPaths.p129d6200} fill="#080808" />
                  <path d={svgPaths.p7c15380} fill="#080808" />
                  <path d={svgPaths.p2f072200} fill="#080808" />
                  <path d={svgPaths.p35ee200} fill="#080808" />
                  <path d={svgPaths.p1d22080} fill="#080808" />
                  <path d={svgPaths.p3d261b00} fill="#080808" />
                  <path d={svgPaths.p1fa8fd00} fill="#080808" />
                  <path d={svgPaths.p14c7ac00} fill="#080808" />
                  <path d={svgPaths.p22bdb400} fill="#82C4A0" />
                  <path d={svgPaths.p46880} fill="#080808" />
                  <path d={svgPaths.pdf0a900} fill="#82C4A0" />
                  <path d={svgPaths.p3f545c80} fill="#080808" />
                  <path d={svgPaths.p24623680} fill="#FCFBFA" />
                  <path d={svgPaths.p22264800} fill="#3A3A3A" />
                  <path d={svgPaths.pc895900} fill="#080808" />
                  <path d={svgPaths.p193cb600} fill="#FCFBFA" />
                  <path d={svgPaths.p30cbf780} fill="#FCFBFA" />
                  <path d={svgPaths.p12ad4600} fill="#3A3A3A" />
                  <path d={svgPaths.p3580c100} fill="#080808" />
                  <path d={svgPaths.p15866d00} fill="#FCFBFA" />
                  <path d={svgPaths.p2000e700} fill="#FCFBFA" />
                  <path d={svgPaths.p13bfad80} fill="#080808" />
                  <path d={svgPaths.p3d632f80} fill="#080808" />
                  <path d={svgPaths.pa2c5600} fill="#FCFBFA" />
                  <path d={svgPaths.p2fca6900} fill="#DEDDDC" />
                  <path d={svgPaths.p23f5ce80} fill="#DEDDDC" />
                  <path d={svgPaths.p1a4fdd00} fill="#DEDDDC" />
                  <path d={svgPaths.p2f223300} fill="#DEDDDC" />
                  <path d={svgPaths.p11316f80} fill="#FCFBFA" />
                  <path d={svgPaths.p2333dd00} fill="#080808" />
                  <path d={svgPaths.p3a19ff80} fill="#3A3A3A" />
                  <path d={svgPaths.p3350000} fill="#82C4A0" />
                  <path d={svgPaths.pee78f00} fill="#FCFBFA" />
                  <path d={svgPaths.peb8e00} fill="#FCFBFA" />
                  <path d={svgPaths.p3f075270} fill="#FCFBFA" />
                  <path d={svgPaths.p37a0e500} fill="#FCFBFA" />
                  <path d={svgPaths.p37e510b0} fill="#FCFBFA" />
                  <path d={svgPaths.p2165d400} fill="#FCFBFA" />
                  <path d={svgPaths.p6d56a80} fill="#FCFBFA" />
                  <path d={svgPaths.p88e2e80} fill="#FCFBFA" />
                  <path d={svgPaths.p38a71780} fill="#FCFBFA" />
                  <path d={svgPaths.p39377600} fill="#FCFBFA" />
                </g>
                <defs>
                  <clipPath id="clip0_1_832">
                    <rect fill="white" height="76" width="226" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("about")}
              className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] hover:text-[#7BAF8E] transition-colors text-lg bg-transparent border-none cursor-pointer p-0"
            >
              О центре
            </button>
            <Link
              to="/programs"
              className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] hover:text-[#7BAF8E] transition-colors text-lg"
            >
              Направления
            </Link>
            <button
              onClick={() => scrollTo("reviews")}
              className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] hover:text-[#7BAF8E] transition-colors text-lg bg-transparent border-none cursor-pointer p-0"
            >
              Отзывы
            </button>
            <Link
              to="/faq"
              className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] hover:text-[#7BAF8E] transition-colors text-lg"
            >
              Вопросы
            </Link>
            <Link
              to="/contacts"
              className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] hover:text-[#7BAF8E] transition-colors text-lg"
            >
              Контакты
            </Link>
          </nav>

          <button
            onClick={() => openModal()}
            className="hidden md:flex items-center gap-2 bg-[#F2A65A] hover:bg-[#e89542] text-white px-6 py-3 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold transition-colors border-none cursor-pointer"
          >
            <Phone size={20} />
            Записаться
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const { openModal } = useModal();
  return (
    <footer className="bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и слоган */}
          <div className="col-span-1">
            <img src="/logo.svg" alt="Академия Панды" className="h-[60px] w-auto object-contain mb-4" />
            <div className="hidden">
              <svg className="h-full w-full" viewBox="0 0 226 76" fill="none">
                <g clipPath="url(#clip0_footer)">
                  <path d={svgPaths.p38a13b00} fill="#F3F3F7" fillOpacity="0.0117647" />
                  <path d={svgPaths.p230cad00} fill="#080808" />
                  <path d={svgPaths.p22bdb400} fill="#82C4A0" />
                  <path d={svgPaths.p3350000} fill="#82C4A0" />
                </g>
                <defs>
                  <clipPath id="clip0_footer">
                    <rect fill="white" height="76" width="226" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] text-sm leading-relaxed">
              Тёплое место рядом с домом, куда дети хотят возвращаться
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="font-['Nunito',sans-serif] font-bold text-[#3D3D3D] mb-4">
              Меню
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] hover:text-[#7BAF8E] transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] hover:text-[#7BAF8E] transition-colors"
                >
                  Программы
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] hover:text-[#7BAF8E] transition-colors"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] hover:text-[#7BAF8E] transition-colors"
                >
                  Вопросы и ответы
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-['Nunito',sans-serif] font-bold text-[#3D3D3D] mb-4">
              Контакты
            </h4>
            <ul className="space-y-2">
              <li className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D]">
                <a href="tel:+79226570142" className="hover:text-[#7BAF8E] transition-colors">
                  +7 (922) 657-01-42
                </a>
              </li>
              <li className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] text-sm">
                г. Екатеринбург, ул. Хуторская 1
              </li>
              <li className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] text-sm">
                Ботанический район
              </li>
            </ul>
          </div>

          {/* Соцсети */}
          <div>
            <h4 className="font-['Nunito',sans-serif] font-bold text-[#3D3D3D] mb-4">
              Мы в соцсетях
            </h4>
            <div className="flex gap-3">
              <a
                href="https://vk.com/akademypanda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#7BAF8E] hover:bg-[#6a9e7d] rounded-full flex items-center justify-center text-white transition-colors font-bold text-sm"
                aria-label="VK"
              >
                VK
              </a>
              <a
                href="https://t.me/AcPanda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#7BAF8E] hover:bg-[#6a9e7d] rounded-full flex items-center justify-center text-white transition-colors font-bold text-sm"
                aria-label="Telegram"
              >
                TG
              </a>
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

        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] text-sm text-center">
            © 2026 Академия Панды. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
