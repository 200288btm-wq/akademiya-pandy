import { Star } from "lucide-react";

export function ReviewsSection() {
  const reviews = [
    {
      name: "Наталья",
      child: "Дамир, 4 года",
      program: "Смышлёная Панда",
      text: "Занятия нравятся, видно, что всегда готовятся к ним — благодаря этому у детей много активностей и частая смена видов деятельности, что важно для дошкольников. В занятие включены физические, творческие, развивающие и нейропсихологические задания, детки развиваются всесторонне. Меня как маму и педагога всё устраивает 🌸",
      avatar: "https://i.ibb.co/gZk3BwPP/photo-2026-03-22-15-51-16.jpg",
    },
    {
      name: "Ольга",
      child: "Маша, 5 лет",
      program: "Смышлёная Панда",
      text: "Хочу выразить огромную благодарность Ольге Михайловне и студии Академия Панды! Для нас это место стало настоящей находкой. Ребёнок бежит на занятия с горящими глазами, а возвращается всегда с новыми знаниями и отличным настроением. Заметно подтянулись моторика и память, дочь стала лучше считать. Самое главное — здесь умеют увлечь детей, каждое занятие это что-то новое и забавное. Спасибо за ваш труд и индивидуальный подход!",
      avatar: "https://i.ibb.co/dJfknY9S/photo-2026-03-22-17-16-31.jpg",
    },
    {
      name: "Светлана",
      child: "Есения, 4 года",
      program: "Смышлёная Панда",
      text: "Посещаем Академию Панды с открытия, ребёнок всегда с большим желанием идёт на занятия и даже ждёт их с нетерпением. Занятия красочные, содержательные, каждое занятие новая поделка. Ольга Михайловна отлично ладит с детьми и очевидно, что это дело ей по душе. Ценим за вклад в развитие ребёнка. Советую посещать развивающие занятия!",
      avatar: "https://i.ibb.co/GbwZDG9/photo-2026-03-22-19-31-14.jpg",
    },
    {
      name: "Джемма",
      child: "Манэ, 5 лет",
      program: "Смышлёная Панда",
      text: "Занятия очень понравились, ребёнок довольный, чувствуется прогресс в развитии и усидчивости. Благодарю! ❤️",
      avatar: "https://i.ibb.co/TMYzFC12/photo-2026-03-22-15-51-39.jpg",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="w-16 h-16 rounded-full overflow-hidden bg-[#7BAF8E] flex-shrink-0">
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
