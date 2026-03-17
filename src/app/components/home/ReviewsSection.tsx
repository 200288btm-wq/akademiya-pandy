import { Star } from "lucide-react";

export function ReviewsSection() {
  const reviews = [
    {
      name: "Екатерина",
      child: "Маша, 5 лет",
      program: "Смышлёная Панда",
      text: "Дочка ходит с удовольствием! Впервые вижу, чтобы она сама просила пойти на занятие. Педагог находит подход к каждому ребёнку, и это действительно чувствуется.",
      avatar: "https://images.unsplash.com/photo-1663045281813-c7407a6ec613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjaGlsZCUyMGhhcHB5JTIwZmFtaWx5fGVufDF8fHx8MTc3MzU5MDQxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Анна",
      child: "Лёва, 8 лет",
      program: "Пушистые художники",
      text: "Сын раскрылся с другой стороны! Оказывается, он любит рисовать, просто раньше стеснялся. Здесь его никто не критикует, и это помогло обрести уверенность.",
      avatar: "https://images.unsplash.com/photo-1663045281813-c7407a6ec613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjaGlsZCUyMGhhcHB5JTIwZmFtaWx5fGVufDF8fHx8MTc3MzU5MDQxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Мария",
      child: "Саша, 6 лет",
      program: "Смышлёная Панда",
      text: "Очень переживала за адаптацию перед школой. Здесь нет давления, но при этом ребёнок научился концентрироваться и стал увереннее. Спасибо за тёплый подход!",
      avatar: "https://images.unsplash.com/photo-1663045281813-c7407a6ec613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjaGlsZCUyMGhhcHB5JTIwZmFtaWx5fGVufDF8fHx8MTc3MzU5MDQxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#0c0805] mb-4">
            Что говорят родители
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#0c0805] max-w-2xl mx-auto">
            Реальные отзывы мам, которые доверили нам своих детей
          </p>
        </div>

        {/* Карточки отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#F0EDD8] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              {/* Звёзды */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#F2A65A" stroke="#F2A65A" />
                ))}
              </div>

              {/* Текст отзыва */}
              <p className="font-['Nunito_Sans',sans-serif] text-[#0c0805] leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Автор */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#7BAF8E]">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-['Nunito',sans-serif] font-bold text-[#0c0805]">
                    {review.name}
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] text-sm text-[#0c0805] opacity-60">
                    {review.child} • {review.program}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
