// Разметка текстов, которые приходят из админки.
//
// Правило одно на весь сайт:
//   пустая строка     — новый абзац
//   одиночный перенос — перенос строки внутри абзаца
//
// Именно так тексты и набирают: абзацы отделяют пустой строкой, а списки
// («🖌 Рисуем портрет», «✅ Питание») пишут строка за строкой. До этого
// одно и то же поле вело себя по-разному: в блоках направлений каждая
// строка становилась отдельным абзацем с отбивкой, а в мастер-классах
// переносы пропадали вовсе и текст склеивался в один кусок.
//
// HTML из контента здесь не используется намеренно. Текстовые поля в админке
// чистятся только trim() — теги из них не вырезаются, и любой тег попал бы
// прямо в страницу. Поэтому текст разбирается как обычный текст, а узлы
// страницы строятся руками.

import { useEffect, useRef, useState } from "react";

export type TextAlign = "left" | "center";

export const ALIGN_CLASS: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
};

export function alignClass(value: unknown): string {
  return value === "left" ? ALIGN_CLASS.left : ALIGN_CLASS.center;
}

// Текст → абзацы → строки внутри абзаца.
export function toParagraphs(text: string): string[][] {
  return String(text || "")
    .replace(/\r\n?/g, "\n")
    .split(/\n{2,}/)
    .map((block) =>
      block
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line !== ""),
    )
    .filter((lines) => lines.length > 0);
}

export function RichText({
  text,
  className = "",
  spacing = "mt-4",
}: {
  text: string;
  className?: string;
  spacing?: string;
}) {
  const paragraphs = toParagraphs(text);
  if (paragraphs.length === 0) return null;

  return (
    <>
      {paragraphs.map((lines, i) => (
        <p key={i} className={`${className} ${i === 0 ? "" : spacing}`.trim()}>
          {lines.map((line, j) => (
            <span key={j}>
              {j > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
      ))}
    </>
  );
}

/**
 * Текст, обрезанный по высоте, с кнопкой «подробнее...».
 *
 * Обрезаем по ВЫСОТЕ, а не по числу символов: короткое описание из одного
 * длинного слова и длинное из коротких строк занимают разное место, и считать
 * символы значит то ставить кнопку там, где всё влезло, то не ставить там,
 * где текст уехал за карточку.
 *
 * Кнопка появляется только если текст действительно не влез — это видно
 * по разнице scrollHeight и clientHeight. Мерим не один раз: шрифты
 * догружаются позже, а ширина карточки меняется при повороте телефона.
 */
export function ClampedText({
  text,
  lines = 5,
  className = "",
  spacing = "mt-2",
  moreLabel = "подробнее...",
  onMore,
}: {
  text: string;
  lines?: number;
  className?: string;
  spacing?: string;
  moreLabel?: string;
  onMore?: (event: React.MouseEvent) => void;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [cut, setCut] = useState(false);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const measure = () => setCut(box.scrollHeight - box.clientHeight > 2);
    measure();

    const observer =
      typeof ResizeObserver === "function" ? new ResizeObserver(measure) : null;
    if (observer) observer.observe(box);
    window.addEventListener("resize", measure);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [text, lines]);

  if (!text) return null;

  return (
    <div className={className}>
      <div
        ref={boxRef}
        className="relative overflow-hidden"
        // Высота в em считается от размера шрифта этого блока, а множитель
        // совпадает с leading-relaxed — поэтому обрезка попадает по строкам.
        style={{ maxHeight: `${(lines * 1.625).toFixed(3)}em` }}
      >
        <RichText text={text} spacing={spacing} />
        {cut && (
          // Затемнение снизу: срез приходится на строку, и без него
          // обрезанная строка выглядит как опечатка, а не как «есть ещё».
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>
      {cut && onMore && (
        <button
          type="button"
          onClick={onMore}
          className="mt-1 bg-transparent border-none p-0 cursor-pointer text-[#7BAF8E] hover:text-[#6a9e7d] font-semibold underline"
        >
          {moreLabel}
        </button>
      )}
    </div>
  );
}
