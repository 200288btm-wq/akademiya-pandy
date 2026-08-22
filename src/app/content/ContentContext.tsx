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
// Снимок контента с сайта. Обновляется автоматически раз в неделю
// (см. .github/workflows/sync-content.yml) и попадает в сборку.
// Нужен на случай, если content.json на сервере недоступен.
import contentSnapshot from "../../../content.snapshot.json";
import type {
  About,
  AgeFilter,
  Badge,
  CardsBlock,
  Contacts,
  ContactsPage,
  Footer,
  FormField,
  LeadForm,
  Way,
  Workshop,
  WorkshopsBlock,
  Cta,
  HomeGallery,
  IconCard,
  Point,
  ProgramsBlock,
  Benefit,
  FaqItem,
  HomeContent,
  Program,
  PromoCard,
  Review,
  Section,
  SectionItem,
  SiteContent,
} from "../data/defaults";

const ContentContext = createContext<SiteContent>(defaultContent);

export function useContent(): SiteContent {
  return useContext(ContentContext);
}

function isText(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function cleanBenefits(raw: unknown): Benefit[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .filter((item) => isText(item.title))
    .map((item) => ({
      title: String(item.title),
      description: isText(item.description) ? item.description : "",
    }));
}

function cleanPoints(raw: unknown): Point[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .filter((item) => isText(item.title))
    .map((item) => ({
      title: String(item.title),
      text: isText(item.text) ? item.text : "",
    }));
}

function cleanIconCards(raw: unknown): IconCard[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .filter((item) => isText(item.title))
    .map((item) => ({
      image: isText(item.image) ? item.image : "",
      title: String(item.title),
      text: isText(item.text) ? item.text : "",
    }));
}

function cleanFilters(raw: unknown): AgeFilter[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .filter((item) => isText(item.label))
    .map((item) => ({
      label: String(item.label),
      min: Number(item.min) || 0,
      max: Number(item.max) || 99,
    }));
}

function cleanCardsBlock(raw: unknown, base: CardsBlock): CardsBlock {
  const data = (raw || {}) as Record<string, unknown>;
  const items = cleanIconCards(data.items);
  return {
    enabled: data.enabled !== false,
    title: isText(data.title) ? data.title : base.title,
    subtitle: isText(data.subtitle) ? data.subtitle : "",
    items: items.length > 0 ? items : base.items,
  };
}

function cleanAbout(raw: unknown, base: About): About {
  const data = (raw || {}) as Record<string, unknown>;
  const points = cleanPoints(data.points);
  return {
    enabled: data.enabled !== false,
    title: isText(data.title) ? data.title : base.title,
    subtitle: isText(data.subtitle) ? data.subtitle : "",
    paragraphs: isText(data.paragraphs) ? data.paragraphs : base.paragraphs,
    points: points.length > 0 ? points : base.points,
    footnote: isText(data.footnote) ? data.footnote : "",
    image: isText(data.image) ? data.image : base.image,
  };
}

function cleanProgramsBlock(raw: unknown, base: ProgramsBlock): ProgramsBlock {
  const data = (raw || {}) as Record<string, unknown>;
  const filters = cleanFilters(data.filters);
  return {
    enabled: data.enabled !== false,
    title: isText(data.title) ? data.title : base.title,
    subtitle: isText(data.subtitle) ? data.subtitle : "",
    filters: filters.length > 0 ? filters : base.filters,
  };
}

function cleanHomeGallery(raw: unknown, base: HomeGallery): HomeGallery {
  const data = (raw || {}) as Record<string, unknown>;
  const images = cleanStrings(data.images);
  return {
    enabled: data.enabled !== false,
    title: isText(data.title) ? data.title : base.title,
    subtitle: isText(data.subtitle) ? data.subtitle : "",
    images: images.length > 0 ? images : base.images,
  };
}

function cleanCta(raw: unknown, base: Cta): Cta {
  const data = (raw || {}) as Record<string, unknown>;
  return {
    enabled: data.enabled !== false,
    title: isText(data.title) ? data.title : base.title,
    text: isText(data.text) ? data.text : base.text,
    buttonText: isText(data.buttonText) ? data.buttonText : base.buttonText,
    socialText: isText(data.socialText) ? data.socialText : "",
  };
}

function cleanWorkshops(raw: unknown): WorkshopsBlock {
  const base = defaultContent.workshops;
  const data = (raw || {}) as Record<string, unknown>;
  const styles = ["accent", "green", "purple", "gray"];

  const items: Workshop[] = Array.isArray(data.items)
    ? data.items
        .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
        .filter((item) => isText(item.name))
        .filter((item) => item.enabled !== false)
        .map((item, index) => ({
          id: isText(item.id) ? item.id : `workshop-${index}`,
          name: String(item.name),
          description: isText(item.description) ? item.description : "",
          price: isText(item.price) ? item.price : "",
          duration: isText(item.duration) ? item.duration : "",
          age: isText(item.age) ? item.age : "",
          maxParticipants: isText(item.maxParticipants) ? item.maxParticipants : "",
          badge: isText(item.badge) ? item.badge : "",
          badgeStyle:
            typeof item.badgeStyle === "string" && styles.includes(item.badgeStyle)
              ? item.badgeStyle
              : "accent",
          images: cleanStrings(item.images),
          enabled: true,
        }))
    : [];

  return {
    enabled: data.enabled !== false,
    title: isText(data.title) ? data.title : base.title,
    subtitle: isText(data.subtitle) ? data.subtitle : "",
    pageTitle: isText(data.pageTitle) ? data.pageTitle : base.pageTitle,
    pageSubtitle: isText(data.pageSubtitle) ? data.pageSubtitle : "",
    buttonText: isText(data.buttonText) ? data.buttonText : base.buttonText,
    items,
  };
}

function cleanFormFields(raw: unknown): FormField[] {
  if (!Array.isArray(raw)) return [];
  const types = ["text", "tel", "select", "textarea"];

  return raw
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .filter((item) => isText(item.label))
    .map((item, index) => ({
      id: isText(item.id) ? item.id : `field-${index}`,
      // Стандартные поля уходят в свои колонки заявки, остальные — в комментарий.
      target: isText(item.target) ? item.target : "extra",
      type:
        typeof item.type === "string" && types.includes(item.type)
          ? (item.type as FormField["type"])
          : "text",
      label: String(item.label),
      placeholder: isText(item.placeholder) ? item.placeholder : "",
      options: cleanStrings(item.options),
      required: item.required === true,
      enabled: item.enabled !== false,
    }));
}

function cleanForm(raw: unknown): LeadForm {
  const base = defaultContent.form;
  const data = (raw || {}) as Record<string, unknown>;
  const fields = cleanFormFields(data.fields);

  return {
    title: isText(data.title) ? data.title : base.title,
    subtitle: isText(data.subtitle) ? data.subtitle : "",
    buttonText: isText(data.buttonText) ? data.buttonText : base.buttonText,
    privacyText: isText(data.privacyText) ? data.privacyText : base.privacyText,
    privacyLinkText: isText(data.privacyLinkText) ? data.privacyLinkText : base.privacyLinkText,
    successTitle: isText(data.successTitle) ? data.successTitle : base.successTitle,
    successText: isText(data.successText) ? data.successText : base.successText,
    fields: fields.length > 0 ? fields : base.fields,
  };
}

function cleanWays(raw: unknown): Way[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .filter((item) => isText(item.title))
    .map((item) => ({
      icon: isText(item.icon) ? item.icon : "",
      title: String(item.title),
      text: isText(item.text) ? item.text : "",
    }));
}

function cleanContactsPage(raw: unknown, base: ContactsPage): ContactsPage {
  const data = (raw || {}) as Record<string, unknown>;
  const ways = cleanWays(data.ways);
  return {
    title: isText(data.title) ? data.title : base.title,
    subtitle: isText(data.subtitle) ? data.subtitle : base.subtitle,
    addressTitle: isText(data.addressTitle) ? data.addressTitle : base.addressTitle,
    phoneTitle: isText(data.phoneTitle) ? data.phoneTitle : base.phoneTitle,
    hoursTitle: isText(data.hoursTitle) ? data.hoursTitle : base.hoursTitle,
    mapTitle: isText(data.mapTitle) ? data.mapTitle : base.mapTitle,
    ways: ways.length > 0 ? ways : base.ways,
    socialTitle: isText(data.socialTitle) ? data.socialTitle : "",
    socialSubtitle: isText(data.socialSubtitle) ? data.socialSubtitle : "",
    buttonText: isText(data.buttonText) ? data.buttonText : base.buttonText,
    socialText: isText(data.socialText) ? data.socialText : "",
  };
}

function cleanFooter(raw: unknown, base: Footer): Footer {
  const data = (raw || {}) as Record<string, unknown>;
  return {
    tagline: isText(data.tagline) ? data.tagline : base.tagline,
    copyright: isText(data.copyright) ? data.copyright : base.copyright,
  };
}

function cleanContacts(raw: unknown): Contacts {
  const base = defaultContent.contacts;
  const data = (raw || {}) as Record<string, unknown>;
  return {
    address: isText(data.address) ? data.address : base.address,
    addressExtra: isText(data.addressExtra) ? data.addressExtra : "",
    phone: isText(data.phone) ? data.phone : base.phone,
    workHours: isText(data.workHours) ? data.workHours : "",
    mapLink: isText(data.mapLink) ? data.mapLink : "",
    mapEmbed: isText(data.mapEmbed) ? data.mapEmbed : "",
    telegram: isText(data.telegram) ? data.telegram : "",
    vk: isText(data.vk) ? data.vk : "",
    whatsapp: isText(data.whatsapp) ? data.whatsapp : "",
    vkPublic: isText(data.vkPublic) ? data.vkPublic : "",
    telegramPublic: isText(data.telegramPublic) ? data.telegramPublic : "",
    page: cleanContactsPage(data.page, base.page),
    footer: cleanFooter(data.footer, base.footer),
  };
}

// Телефон для ссылки tel: — оставляем только цифры и плюс.
export function phoneHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : "";
}

function cleanBadges(raw: unknown): Badge[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .filter((item) => isText(item.text))
    .map((item) => ({
      icon: isText(item.icon) ? item.icon : "",
      text: String(item.text),
    }));
}

function cleanPromoCards(raw: unknown): PromoCard[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .filter((item) => isText(item.title))
    .map((item) => ({
      badge: isText(item.badge) ? item.badge : "",
      title: String(item.title),
      text: isText(item.text) ? item.text : "",
    }));
}

function color(value: unknown, fallback: string): string {
  return typeof value === "string" && /^#[0-9A-Fa-f]{6}$/.test(value) ? value : fallback;
}

// Список секций главной. Неизвестные имена отбрасываем, недостающие
// дописываем в конец — так добавление новой секции не ломает старый файл.
function cleanOrder(raw: unknown, base: string[]): string[] {
  const known = new Set(base);
  const seen = new Set<string>();
  const result: string[] = [];

  if (Array.isArray(raw)) {
    raw.forEach((name) => {
      if (typeof name === "string" && known.has(name) && !seen.has(name)) {
        seen.add(name);
        result.push(name);
      }
    });
  }

  base.forEach((name) => {
    if (!seen.has(name)) result.push(name);
  });

  return result;
}

function cleanHome(raw: unknown): HomeContent {
  const base = defaultContent.home;
  if (!raw || typeof raw !== "object") return base;
  const data = raw as Record<string, unknown>;

  const heroRaw = (data.hero || {}) as Record<string, unknown>;
  const promoRaw = (data.promo || {}) as Record<string, unknown>;

  const badges = cleanBadges(heroRaw.badges);
  const features = cleanBadges(promoRaw.features);
  const cards = cleanPromoCards(promoRaw.cards);

  return {
    order: cleanOrder(data.order, base.order),
    hero: {
      title: isText(heroRaw.title) ? heroRaw.title : base.hero.title,
      text: isText(heroRaw.text) ? heroRaw.text : base.hero.text,
      badges: badges.length > 0 ? badges : base.hero.badges,
      primaryButton: isText(heroRaw.primaryButton) ? heroRaw.primaryButton : base.hero.primaryButton,
      secondaryButton: isText(heroRaw.secondaryButton) ? heroRaw.secondaryButton : "",
      secondaryLink: isText(heroRaw.secondaryLink) ? heroRaw.secondaryLink : "/programs",
      image: isText(heroRaw.image) ? heroRaw.image : base.hero.image,
    },
    promo: {
      enabled: promoRaw.enabled === true,
      label: isText(promoRaw.label) ? promoRaw.label : "",
      title: isText(promoRaw.title) ? promoRaw.title : "",
      titleAccent: isText(promoRaw.titleAccent) ? promoRaw.titleAccent : "",
      text: isText(promoRaw.text) ? promoRaw.text : "",
      link: isText(promoRaw.link) ? promoRaw.link : "",
      buttonText: isText(promoRaw.buttonText) ? promoRaw.buttonText : "",
      features,
      cards,
      images: cleanStrings(promoRaw.images),
      bgColor: color(promoRaw.bgColor, "#1E3A6E"),
      accentColor: color(promoRaw.accentColor, "#F5C842"),
    },
    about: cleanAbout(data.about, base.about),
    programsBlock: cleanProgramsBlock(data.programsBlock, base.programsBlock),
    whyUs: cleanCardsBlock(data.whyUs, base.whyUs),
    howItWorks: cleanCardsBlock(data.howItWorks, base.howItWorks),
    gallery: cleanHomeGallery(data.gallery, base.gallery),
    cta: cleanCta(data.cta, base.cta),
  };
}

function cleanStrings(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter(isText).map((value) => String(value));
}

function cleanSectionItems(raw: unknown): SectionItem[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .map((item) => ({
      icon: isText(item.icon) ? item.icon : "",
      title: isText(item.title) ? item.title : "",
      text: isText(item.text) ? item.text : "",
      list: cleanStrings(item.list),
      label: isText(item.label) ? item.label : "",
      value: isText(item.value) ? item.value : "",
    }));
}

function cleanSections(raw: unknown): Section[] {
  if (!Array.isArray(raw)) return [];
  const types = ["text", "cards", "facts", "gallery"];
  const styles = ["emoji", "number", "plain", "badge"];
  const backgrounds = ["tint", "white", "none"];

  return raw
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .filter((item) => typeof item.type === "string" && types.includes(item.type))
    .map((item, index) => ({
      id: isText(item.id) ? item.id : `section-${index}`,
      type: item.type as Section["type"],
      enabled: item.enabled !== false,
      title: isText(item.title) ? item.title : "",
      subtitle: isText(item.subtitle) ? item.subtitle : "",
      body: isText(item.body) ? item.body : "",
      style:
        typeof item.style === "string" && styles.includes(item.style)
          ? (item.style as Section["style"])
          : "plain",
      columns: Number(item.columns) === 3 ? 3 : Number(item.columns) === 4 ? 4 : 2,
      background:
        typeof item.background === "string" && backgrounds.includes(item.background)
          ? (item.background as Section["background"])
          : "tint",
      images: cleanStrings(item.images),
      items: cleanSectionItems(item.items),
    }));
}

function cleanPrograms(raw: unknown): Program[] | null {
  if (!Array.isArray(raw)) return null;
  const items = raw
    .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
    .filter((item) => isText(item.name) && isText(item.slug))
    .filter((item) => item.status !== "hidden")
    .map((item, index) => {
      const status = item.status;
      return {
        id: isText(item.id) ? item.id : `program-${index}`,
        slug: String(item.slug),
        name: String(item.name),
        shortName: isText(item.shortName) ? item.shortName : "",
        age: isText(item.age) ? item.age : "",
        ageMin: Number(item.ageMin) || 0,
        ageMax: Number(item.ageMax) || 99,
        description: isText(item.description) ? item.description : "",
        color: isText(item.color) ? item.color : "#7BAF8E",
        status:
          status === "active" || status === "launching" || status === "soon"
            ? status
            : ("active" as const),
        statusText: isText(item.statusText) ? item.statusText : "Идёт набор",
        duration: isText(item.duration) ? item.duration : "",
        groupSize: isText(item.groupSize) ? item.groupSize : "",
        image: isText(item.image) ? item.image : "",
        benefits: cleanBenefits(item.benefits),
        sections: cleanSections(item.sections),
      } as Program;
    });
  return items.length > 0 ? items : null;
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
    home: cleanHome(data.home),
    contacts: cleanContacts(data.contacts),
    form: cleanForm(data.form),
    workshops: cleanWorkshops(data.workshops),
    programs: cleanPrograms(data.programs) ?? defaultContent.programs,
    reviews: cleanReviews(data.reviews) ?? defaultContent.reviews,
    faq: cleanFaq(data.faq) ?? defaultContent.faq,
  };
}

// Порядок источников: файл на сервере → снимок из сборки → данные в коде.
const fallbackContent: SiteContent = mergeContent(contentSnapshot);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(fallbackContent);

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
