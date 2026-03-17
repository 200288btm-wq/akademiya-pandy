import { Link, useNavigate, useLocation } from "react-router";
import svgPaths from "../../imports/svg-sfs6t7friq";
import { MessageCircle, Phone } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F0EDD8] relative overflow-hidden">
      {/* Декоративные элементы - следы лапок панды */}
      <div className="absolute top-20 right-10 opacity-10 pointer-events-none">
        <PawPrint size={60} rotation={15} />
      </div>
      <div className="absolute top-[500px] left-20 opacity-10 pointer-events-none">
        <PawPrint size={50} rotation={-20} />
      </div>
      <div className="absolute bottom-[400px] right-40 opacity-10 pointer-events-none">
        <PawPrint size={45} rotation={30} />
      </div>
      
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
            <img src="/src/assets/Лого.svg" alt="Академия Панды" className="h-[60px] w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("about")}
              className="font-['Nunito_Sans',sans-serif] text-[#0c0805] hover:text-[#7BAF8E] transition-colors text-lg bg-transparent border-none cursor-pointer p-0"
            >
              О центре
            </button>
            <Link
              to="/programs"
              className="font-['Nunito_Sans',sans-serif] text-[#0c0805] hover:text-[#7BAF8E] transition-colors text-lg"
            >
              Направления
            </Link>
            <button
              onClick={() => scrollTo("reviews")}
              className="font-['Nunito_Sans',sans-serif] text-[#0c0805] hover:text-[#7BAF8E] transition-colors text-lg bg-transparent border-none cursor-pointer p-0"
            >
              Отзывы
            </button>
            <Link
              to="/faq"
              className="font-['Nunito_Sans',sans-serif] text-[#0c0805] hover:text-[#7BAF8E] transition-colors text-lg"
            >
              Вопросы
            </Link>
            <Link
              to="/contacts"
              className="font-['Nunito_Sans',sans-serif] text-[#0c0805] hover:text-[#7BAF8E] transition-colors text-lg"
            >
              Контакты
            </Link>
          </nav>

          <a
            href="tel:+79000000000"
            className="hidden md:flex items-center gap-2 bg-[#F2A65A] hover:bg-[#e89542] text-white px-6 py-3 rounded-lg font-['Nunito_Sans',sans-serif] font-semibold transition-colors"
          >
            <Phone size={20} />
            Записаться
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и слоган */}
          <div className="col-span-1">
           <img
  src="/src/assets/Лого.svg"
  alt="Академия Панды"
  className="h-[60px] w-auto object-contain mb-4"
/>
            <p className="font-['Nunito_Sans',sans-serif] text-[#0c0805] text-sm leading-relaxed">
              Тёплое место рядом с домом, куда дети хотят возвращаться
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="font-['Nunito',sans-serif] font-bold text-[#0c0805] mb-4">
              Меню
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="font-['Nunito_Sans',sans-serif] text-[#0c0805] hover:text-[#7BAF8E] transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="font-['Nunito_Sans',sans-serif] text-[#0c0805] hover:text-[#7BAF8E] transition-colors"
                >
                  Программы
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="font-['Nunito_Sans',sans-serif] text-[#0c0805] hover:text-[#7BAF8E] transition-colors"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="font-['Nunito_Sans',sans-serif] text-[#0c0805] hover:text-[#7BAF8E] transition-colors"
                >
                  Вопросы и ответы
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-['Nunito',sans-serif] font-bold text-[#0c0805] mb-4">
              Контакты
            </h4>
            <ul className="space-y-2">
              <li className="font-['Nunito_Sans',sans-serif] text-[#0c0805]">
                <a href="tel:+79000000000" className="hover:text-[#7BAF8E] transition-colors">
                  +7 (900) 000-00-00
                </a>
              </li>
              <li className="font-['Nunito_Sans',sans-serif] text-[#0c0805] text-sm">
                Екатеринбург, Ботанический район
              </li>
              <li className="font-['Nunito_Sans',sans-serif] text-[#0c0805] text-sm">
                рядом с ТЦ «Дирижабль»
              </li>
            </ul>
          </div>

          {/* Соцсети */}
          <div>
            <h4 className="font-['Nunito',sans-serif] font-bold text-[#0c0805] mb-4">
              Мы в соцсетях
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#7BAF8E] hover:bg-[#6a9e7d] rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="VK"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#7BAF8E] hover:bg-[#6a9e7d] rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#7BAF8E] hover:bg-[#6a9e7d] rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="font-['Nunito_Sans',sans-serif] text-[#0c0805] text-sm text-center">
            © 2026 Академия Панды. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
