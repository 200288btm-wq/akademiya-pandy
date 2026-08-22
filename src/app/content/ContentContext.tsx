// Загрузка редактируемого контента сайта.
//
// Контент лежит на сервере в файле /content.json и правится через админку.
// Здесь он загружается один раз при открытии сайта и раздаётся компонентам
// через хук useContent().
//
// Главный принцип: любая проблема с файлом (нет файла, битый JSON, пустые
// списки, неверные поля) не должна ломать сайт. В таком случае берутся
// данные из defaults.ts.

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { defaultContent } from "../data/defaults";
import type { FaqItem, Review, SiteContent } from "../data/defaults";

const ContentContext = createContext<SiteContent>(defaultContent);

export function useContent(): SiteContent {
  return useContext(ContentContext);
}

function isText(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function cleanReviews(raw: unknown): Review[] | null {
  if (!Array.isArray(raw)) return null;
  const items = raw
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .filter((item) => isText(item.name) && isText(item.text))
    .map((item, index) => ({
      id: isText(item.id) ? item.id : `review-${index}`,
      name: String(item.name),
      child: isText(item.child) ? item.child : "",
      program: isText(item.program) ? item.program : "",
      text: String(item.text),
      avatar: isText(item.avatar) ? item.avatar : "",
    }));
  return items.length > 0 ? items : null;
}

function cleanFaq(raw: unknown): FaqItem[] | null {
  if (!Array.isArray(raw)) return null;
  const items = raw
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .filter((item) => isText(item.question) && isText(item.answer))
    .map((item, index) => ({
      id: isText(item.id) ? item.id : `faq-${index}`,
      question: String(item.question),
      answer: String(item.answer),
      showOnHome: item.showOnHome === true,
    }));
  return items.length > 0 ? items : null;
}

function mergeContent(raw: unknown): SiteContent {
  if (!raw || typeof raw !== "object") return defaultContent;
  const data = raw as Record<string, unknown>;
  return {
    reviews: cleanReviews(data.reviews) ?? defaultContent.reviews,
    faq: cleanFaq(data.faq) ?? defaultContent.faq,
  };
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);

  useEffect(() => {
    let cancelled = false;

    fetch("/content.json", { cache: "no-cache" })
      .then((response) => {
        if (!response.ok) throw new Error("content.json unavailable");
        return response.json();
      })
      .then((data) => {
        if (!cancelled) setContent(mergeContent(data));
      })
      .catch(() => {
        // Тихо остаёмся на резервных данных — сайт продолжает работать.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}
