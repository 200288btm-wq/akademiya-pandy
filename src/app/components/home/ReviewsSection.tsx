import { Star } from "lucide-react";
import { useContent } from "../../content/ContentContext";

export function ReviewsSection() {
  const { reviews } = useContent();

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-['Nunito',sans-serif] font-bold text-4xl md:text-5xl text-[#3D3D3D] mb-4">
            Что говорят родители
          </h2>
          <p className="font-['Nunito_Sans',sans-serif] text-lg text-[#3D3D3D] max-w-2xl mx-auto">
            Реальные отзывы мам, которые доверили нам своих детей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#F0EDD8] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 flex gap-5"
            >
              {/* Аватар слева */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-[#7BAF8E]">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Контент справа */}
              <div className="flex flex-col">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F2A65A" stroke="#F2A65A" />
                  ))}
                </div>
                <p className="font-['Nunito',sans-serif] font-bold text-[#3D3D3D]">{review.name}</p>
                <p className="font-['Nunito_Sans',sans-serif] text-sm text-[#3D3D3D] opacity-60 mb-3">
                  {review.child} • {review.program}
                </p>
                <p className="font-['Nunito_Sans',sans-serif] text-[#3D3D3D] leading-relaxed italic text-sm">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
