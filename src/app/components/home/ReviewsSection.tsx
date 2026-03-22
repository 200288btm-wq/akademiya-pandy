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
      name: "Наталья",
      child: "Дамир, 4 года",
      program: "Смышлёная Панда",
      text: "Занятия нравятся, видно, что всегда готовятся к ним — благодаря этому у детей много активностей и частая смена видов деятельности, что важно для дошкольников. В занятие включены физические, творческие, развивающие и нейропсихологические задания, детки развиваются всесторонне. Меня как маму и педагога всё устраивает 🌸",
      avatar: "https://images.unsplash.com/photo-1663045281813-c7407a6ec613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjaGlsZCUyMGhhcHB5JTIwZmFtaWx5fGVufDF8fHx8MTc3MzU5MDQxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Джемма",
      child: "Манэ, 5 лет",
      program: "Смышлёная Панда",
      text: "Занятия очень понравились, ребёнок довольный, чувствуется прогресс в развитии и усидчивости. Благодарю! ❤️",
      avatar: "https://images.unsplash.com/photo-1663045281813-c7407a6ec613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjaGlsZCUyMGhhcHB5JTIwZmFtaWx5fGVufDF8fHx8MTc3MzU5MDQxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#3D3D3D] mb-4">
            Что говорят родители
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#3D3D3D] max-w-2xl mx-auto">
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
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#F2A65A" stroke="#F2A65A" />
                ))}
              </div>
              <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#7BAF8E]">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-['Nunito',sans-serif] font-bold text-[#3D3D3D]">{review.name}</p>
                  <p className="font-['Nunito_Sans',sans-serif] text-sm text-[#3D3D3D] opacity-60">{review.child} • {review.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
