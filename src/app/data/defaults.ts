// Резервная копия контента сайта.
//
// Сайт берёт контент из файла /content.json на сервере (его редактирует
// администратор). Если этот файл недоступен, повреждён или пуст —
// используются данные отсюда. Благодаря этому сайт не может «опустеть»
// из-за ошибки в админке.
//
// Эти данные менять не обязательно: они нужны как страховка.

export interface Review {
  id: string;
  name: string;
  child: string;
  program: string;
  text: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  showOnHome: boolean;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface SectionItem {
  icon: string;
  title: string;
  text: string;
  list: string[];
  label: string;
  value: string;
}

export interface Section {
  id: string;
  type: "text" | "cards" | "facts" | "gallery";
  enabled: boolean;
  title: string;
  subtitle: string;
  body: string;
  style: "emoji" | "number" | "plain" | "badge";
  columns: number;
  background: "tint" | "white" | "none";
  images: string[];
  items: SectionItem[];
}

export interface Program {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  age: string;
  ageMin: number;
  ageMax: number;
  description: string;
  color: string;
  status: "active" | "launching" | "soon" | "hidden";
  statusText: string;
  duration: string;
  groupSize: string;
  image: string;
  formatTitle: string;
  formatExtraLabel: string;
  formatExtraValue: string;
  benefits: Benefit[];
  sections: Section[];
}

export interface Badge {
  icon: string;
  text: string;
}

export interface PromoCard {
  badge: string;
  title: string;
  text: string;
}

export interface Hero {
  title: string;
  text: string;
  badges: Badge[];
  primaryButton: string;
  secondaryButton: string;
  secondaryLink: string;
  image: string;
}

export interface Promo {
  enabled: boolean;
  label: string;
  title: string;
  titleAccent: string;
  text: string;
  link: string;
  buttonText: string;
  features: Badge[];
  cards: PromoCard[];
  images: string[];
  bgColor: string;
  accentColor: string;
  titleColor: string;
  textColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
}

export interface Point {
  title: string;
  text: string;
}

export interface IconCard {
  image: string;
  title: string;
  text: string;
}

export interface AgeFilter {
  label: string;
  min: number;
  max: number;
}

export interface About {
  enabled: boolean;
  title: string;
  subtitle: string;
  paragraphs: string;
  points: Point[];
  footnote: string;
  image: string;
}

export interface CardsBlock {
  enabled: boolean;
  title: string;
  subtitle: string;
  items: IconCard[];
}

export interface ProgramsBlock {
  enabled: boolean;
  title: string;
  subtitle: string;
  filters: AgeFilter[];
}

export interface HomeGallery {
  enabled: boolean;
  title: string;
  subtitle: string;
  images: string[];
}

export interface Cta {
  enabled: boolean;
  title: string;
  text: string;
  buttonText: string;
  socialText: string;
}

export interface Way {
  icon: string;
  title: string;
  text: string;
}

export interface ContactsPage {
  title: string;
  subtitle: string;
  addressTitle: string;
  phoneTitle: string;
  hoursTitle: string;
  mapTitle: string;
  ways: Way[];
  socialTitle: string;
  socialSubtitle: string;
  buttonText: string;
  socialText: string;
}

export interface Footer {
  tagline: string;
  copyright: string;
  requisites: string;
}

export interface Contacts {
  address: string;
  addressExtra: string;
  phone: string;
  workHours: string;
  mapLink: string;
  mapEmbed: string;
  telegram: string;
  vk: string;
  whatsapp: string;
  vkPublic: string;
  telegramPublic: string;
  page: ContactsPage;
  footer: Footer;
}

export interface HomeContent {
  // Порядок секций на главной. Первый экран всегда сверху и в список не входит.
  order: string[];
  hero: Hero;
  promo: Promo;
  about: About;
  programsBlock: ProgramsBlock;
  whyUs: CardsBlock;
  howItWorks: CardsBlock;
  gallery: HomeGallery;
  cta: Cta;
}

export interface FormField {
  id: string;
  target: string;
  type: "text" | "tel" | "select" | "textarea";
  label: string;
  placeholder: string;
  options: string[];
  required: boolean;
  enabled: boolean;
}

export interface LeadForm {
  title: string;
  subtitle: string;
  buttonText: string;
  privacyText: string;
  privacyLinkText: string;
  successTitle: string;
  successText: string;
  fields: FormField[];
}

export interface Workshop {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  age: string;
  maxParticipants: string;
  badge: string;
  badgeStyle: string;
  images: string[];
  enabled: boolean;
}

export interface WorkshopsBlock {
  enabled: boolean;
  title: string;
  subtitle: string;
  pageTitle: string;
  pageSubtitle: string;
  buttonText: string;
  items: Workshop[];
}

export interface SiteContent {
  home: HomeContent;
  contacts: Contacts;
  form: LeadForm;
  workshops: WorkshopsBlock;
  programs: Program[];
  reviews: Review[];
  faq: FaqItem[];
}

export const defaultContent: SiteContent = {
  home: {
    order: [
      "promo",
      "about",
      "programsBlock",
      "workshops",
      "whyUs",
      "howItWorks",
      "gallery",
      "reviews",
      "faq",
      "cta",
    ],
    hero: {
      title: "Тёплое место рядом с домом, куда дети хотят возвращаться",
      text: "Рисование, английский, развитие, настольные игры и не только. С нами дети пробуют, ищут своё и увлекаются. Всё это рядом с домом, в Ботаническом районе.",
      badges: [
        { icon: "📍", text: "Ботанический район" },
        { icon: "👥", text: "Группы до 10 детей" },
        { icon: "⭐", text: "Первое занятие бесплатно (при покупке абонемента)" },
      ],
      primaryButton: "Записаться на пробное занятие",
      secondaryButton: "Смотреть направления",
      secondaryLink: "/programs",
      image: "https://i.ibb.co/mCY4BGhr/photo-2025-10-10-19-59-34.jpg",
    },
    promo: {
      enabled: true,
      label: "Летний лагерь",
      title: "Лето",
      titleAccent: "в вашем ритме",
      text: "Творческий лагерь от Академии Панды в Екатеринбурге — без фиксированных смен, приходите когда удобно вам",
      link: "https://akademiya-kanikul.ru",
      buttonText: "Узнать подробнее",
      features: [
        { icon: "🍽", text: "Питание включено" },
        { icon: "🗓", text: "Запись за 2 дня" },
        { icon: "📉", text: "Больше дней — выгоднее" },
      ],
      cards: [
        { badge: "от 7 лет", title: "Зелёная мастерская", text: "Нейрогимнастика и развивающие занятия" },
        { badge: "от 9 лет", title: "Городские художники", text: "Городской скетчинг, прогулки по Екатеринбургу" },
      ],
      images: [],
      bgColor: "#1E3A6E",
      accentColor: "#F5C842",
      titleColor: "#FFFFFF",
      textColor: "#FFFFFF",
      buttonBgColor: "#F5C842",
      buttonTextColor: "#1E3A6E",
    },
    about: {
      enabled: true,
      title: "Академия Панды,",
      subtitle: "больше чем просто занятия",
      paragraphs: "К нам дети приходят с интересом, а уходят с новыми навыками и счастливыми глазами.\n\nМы создаём тёплую атмосферу, где каждый ребёнок чувствует себя важным и принятым, со своим темпом, своими интересами и своими маленькими победами.",
      points: [
        {
          title: "Нейроподход и бережное развитие",
          text: "Занятия построены с учётом того, как работает мозг ребёнка, через движение, игру и творчество включается внимание, мышление и желание учиться.",
        },
        {
          title: "Каждый ребёнок в своём темпе",
          text: "Сравниваем ребёнка только с ним самим. Здесь ценят усилие и попытку, а результат приходит сам.",
        },
        {
          title: "Маленькие группы до 10 детей",
          text: "Педагог видит каждого ребёнка, знает его особенности и вовремя поддерживает.",
        },
        {
          title: "Рядом с домом",
          text: "г. Екатеринбург, ул. Онежская, 4. Ботанический район. Рядом с домом, удобно и спокойно.",
        },
      ],
      footnote: "Мы рады видеть каждого ребёнка таким, какой он есть.",
      image: "https://i.ibb.co/Jw1ZxgYP/photo-2025-10-10-19-59-29.jpg",
    },
    programsBlock: {
      enabled: true,
      title: "Найдите занятие для вашего ребёнка",
      subtitle: "",
      filters: [
        { label: "4-6 лет", min: 4, max: 6 },
        { label: "7-8 лет", min: 7, max: 8 },
        { label: "9+ лет", min: 9, max: 14 },
      ],
    },
    whyUs: {
      enabled: true,
      title: "Почему дети хотят возвращаться?",
      subtitle: "Мы создали место, где каждый ребёнок чувствует себя важным и принятым",
      items: [
        {
          image: "https://i.ibb.co/XrZPGN68/a-cute-minimal-watercolor-house-sticker-kin9-Ua-JRQj-WCK1-My-Vv-Pow-B4-U-Zf8c-QK2j-ZZ-OOh-G0-VA-removeb.png",
          title: "Рядом с домом",
          text: "В Ботаническом районе, рядом с ТЦ «Дирижабль» — удобно добираться пешком или на машине",
        },
        {
          image: "https://i.ibb.co/cc8Xtkgm/a-simple-watercolor-heart-sticker-render-h4-Hu24-OSjm-G2-Onoros7h-A-nm-Lt-C0-Mv-Rniu-QOBj-ND5-D1-A-remove.png",
          title: "Без давления",
          text: "Мы не требуем быть идеальными. Каждый ребёнок развивается в своём темпе, и это нормально",
        },
        {
          image: "https://i.ibb.co/tTsthPMF/Gemini-Generated-Image-68jmvd68jmvd68jm-removebg-preview-1.png",
          title: "Маленькие группы",
          text: "До 10 детей в группе — педагог видит каждого ребёнка и может уделить внимание всем",
        },
        {
          image: "https://i.ibb.co/k2dSZvh3/a-cute-minimal-watercolor-sticker-featur-Amh-KYV-TRy8f-Z7tr-ZCBg-Yr-2h-Rq6-RV-vx33g-Mf60rg-removebg-p.png",
          title: "Педагоги с душой",
          text: "Наши преподаватели любят детей и своё дело. Они создают атмосферу, куда хочется возвращаться",
        },
      ],
    },
    howItWorks: {
      enabled: true,
      title: "Как это работает?",
      subtitle: "Три простых шага до первого занятия",
      items: [
        {
          image: "https://i.ibb.co/4wjS96ks/Gemini-Generated-Image-95p8bf95p8bf95p8-removebg-preview-1.png",
          title: "Выберите направление",
          text: "Посмотрите наши программы и выберите то, что интересно вашему ребёнку. Не уверены? Мы поможем!",
        },
        {
          image: "https://i.ibb.co/rf3CV4Sm/Gemini-Generated-Image-st7kqqst7kqqst7k-removebg-preview-1.png",
          title: "Придите на пробное",
          text: "Первое занятие бесплатно (при покупке абонемента) — приходите, познакомьтесь с педагогом и почувствуйте атмосферу.",
        },
        {
          image: "https://i.ibb.co/6R5wHQbW/Gemini-Generated-Image-sipu2ssipu2ssipu-removebg-preview-1.png",
          title: "Решите сами",
          text: "Никакого давления. Если ребёнку понравилось — отлично! Если нет — тоже нормально.",
        },
      ],
    },
    gallery: {
      enabled: true,
      title: "Атмосфера Академии Панды",
      subtitle: "Реальные моменты из жизни центра — дети в процессе, эмоции и творчество",
      images: [
        "https://i.ibb.co/mCY4BGhr/photo-2025-10-10-19-59-34.jpg",
        "https://i.ibb.co/Jw1ZxgYP/photo-2025-10-10-19-59-29.jpg",
        "https://i.ibb.co/8LVrsk4h/photo-2025-10-05-12-15-22.jpg",
        "https://i.ibb.co/NgWSkwSY/photo-2025-09-28-16-57-04.jpg",
        "https://i.ibb.co/KjxTQKj7/photo-2025-10-10-19-59-26.jpg",
        "https://i.ibb.co/ymJpLyzW/photo-2025-12-16-13-46-13.jpg",
      ],
    },
    cta: {
      enabled: true,
      title: "Приходите познакомиться",
      text: "Первое занятие бесплатно (при покупке абонемента) — без давления и обязательств.\nПросто приходите и посмотрите, как всё устроено.",
      buttonText: "Заказать звонок",
      socialText: "Или напишите нам:",
    },
  },
  workshops: {
    enabled: true,
    title: "Мастер-классы",
    subtitle: "Разовые занятия, на которые можно прийти без абонемента",
    pageTitle: "Мастер-классы в Академии Панды",
    pageSubtitle: "Приходите попробовать что-то новое — одно занятие, без обязательств",
    buttonText: "Записаться",
    items: [],
  },
  form: {
    title: "Заказать звонок",
    subtitle: "Оставьте номер — перезвоним в течение часа в рабочее время",
    buttonText: "Отправить заявку",
    privacyText: "Я согласен(а) на обработку",
    privacyLinkText: "персональных данных",
    successTitle: "Заявка отправлена!",
    successText: "Перезвоним вам в удобное время. Спасибо!",
    fields: [
      {
        id: "name",
        target: "name",
        type: "text",
        label: "Ваше имя",
        placeholder: "Как вас зовут?",
        options: [],
        required: true,
        enabled: true,
      },
      {
        id: "phone",
        target: "phone",
        type: "tel",
        label: "Телефон",
        placeholder: "+7 (___) ___-__-__",
        options: [],
        required: true,
        enabled: true,
      },
      {
        id: "time",
        target: "time",
        type: "select",
        label: "Удобное время для звонка",
        placeholder: "Выберите время",
        options: ["Утром (9:00 - 12:00)", "Днём (12:00 - 17:00)", "Вечером (17:00 - 20:00)"],
        required: false,
        enabled: true,
      },
      {
        id: "childName",
        target: "childName",
        type: "text",
        label: "Имя ребёнка",
        placeholder: "",
        options: [],
        required: false,
        enabled: false,
      },
      {
        id: "childAge",
        target: "childAge",
        type: "text",
        label: "Возраст ребёнка",
        placeholder: "Например, 5 лет",
        options: [],
        required: false,
        enabled: false,
      },
      {
        id: "comment",
        target: "comment",
        type: "textarea",
        label: "Комментарий",
        placeholder: "Что важно знать?",
        options: [],
        required: false,
        enabled: false,
      },
    ],
  },
  contacts: {
    address: "г. Екатеринбург, ул. Онежская, 4",
    addressExtra: "Ботанический район",
    phone: "+7 (922) 657-01-42",
    workHours: "Пн-Вс: 9:00 - 20:00",
    mapLink: "https://yandex.ru/maps/?text=Екатеринбург+Онежская+4",
    mapEmbed: "https://yandex.ru/map-widget/v1/?ll=60.636497%2C56.799586&z=17&pt=60.636497%2C56.799586%2Cpm2rdm",
    telegram: "https://t.me/olechkamom",
    vk: "https://vk.com/im/convo/-231900253?entrypoint=community_page&tab=all",
    whatsapp: "",
    vkPublic: "https://vk.com/akademypanda",
    telegramPublic: "https://t.me/AcPanda",
    page: {
      title: "Приходите познакомиться",
      subtitle: "Мы в Екатеринбурге, ул. Онежская, 4, рядом с домом, в Ботаническом районе.\nБудем рады вас видеть!",
      addressTitle: "Адрес",
      phoneTitle: "Телефон",
      hoursTitle: "Часы работы",
      mapTitle: "Как нас найти",
      ways: [
        { icon: "🚗", title: "На машине", text: "Удобная парковка рядом с центром" },
        { icon: "🚌", title: "На автобусе", text: "От остановки «Саввы Белых» спокойным шагом с ребёнком 10 минут" },
        { icon: "👟", title: "Пешком", text: "Безопасный район для прогулок" },
      ],
      socialTitle: "Чтобы познакомиться,",
      socialSubtitle: "просто приходите на пробное занятие",
      buttonText: "Записаться",
      socialText: "Или напишите нам:",
    },
    footer: {
      tagline: "Тёплое место рядом с домом, куда дети хотят возвращаться",
      copyright: "© 2026 Академия Панды. Все права защищены",
      requisites: "",
    },
  },
  programs: [
    {
      id: "1",
      slug: "smyshlennaya-panda",
      name: "Смышлёная Панда",
      shortName: "Развивающие занятия",
      age: "4-6 лет",
      ageMin: 4,
      ageMax: 6,
      description: "Мягкая подготовка к школе через игру, нейрогимнастику и движение — без давления, стресса и завышенных ожиданий",
      color: "#7BAF8E",
      status: "active",
      statusText: "Идёт набор",
      duration: "60 минут",
      groupSize: "до 10 детей",
      image: "https://i.ibb.co/G4BTpQck/951b69af-3773-d9d1-addd-61b200c988f6.jpg",
      formatTitle: "Формат занятий",
      formatExtraLabel: "Пробное",
      formatExtraValue: "Бесплатно",
      benefits: [
        { title: "Концентрация внимания", description: "Ребёнок учится удерживать внимание на задаче дольше" },
        { title: "Мелкая моторика", description: "Развиваем через игру и творческие задания" },
        { title: "Познание мира", description: "Узнаём новое через наблюдение и эксперименты" },
        { title: "Эмоциональная устойчивость", description: "Учимся понимать и выражать свои эмоции" },
      ],
      sections: [
        {
          id: "s1",
          type: "cards",
          enabled: true,
          title: "Каждое занятие включает четыре блока",
          subtitle: "Смена деятельности каждые 10–15 минут — так детям не скучно и всё усваивается легче",
          body: "",
          style: "emoji",
          columns: 2,
          background: "tint",
          images: [],
          items: [
            {
              icon: "🧠",
              title: "Познавательный блок",
              text: "",
              list: [
                "Формирование математических понятий (ФЭМП)",
                "Развитие речи",
                "Логические задачи",
                "Представления об окружающем мире",
                "Знакомство с физическими понятиями через опыты",
              ],
              label: "",
              value: "",
            },
            {
              icon: "🏃",
              title: "Крупная моторика",
              text: "",
              list: [
                "Баланс тела",
                "Развитие межполушарных взаимодействий",
                "Нейрогимнастика",
                "Ортопедические упражнения",
              ],
              label: "",
              value: "",
            },
            {
              icon: "✋",
              title: "Мелкая моторика",
              text: "",
              list: [
                "Нейроупражнения",
                "Сенсорное восприятие",
                "Пальчиковая гимнастика",
              ],
              label: "",
              value: "",
            },
            {
              icon: "🎨",
              title: "Творческий блок",
              text: "",
              list: [
                "Рисование",
                "Аппликация",
                "Объёмные поделки",
                "Лепка",
              ],
              label: "",
              value: "",
            },
          ],
        },
        {
          id: "s2",
          type: "text",
          enabled: true,
          title: "Каждая неделя — одна тема",
          subtitle: "",
          body: "Все занятия объединены через игру с героями — умной пандочкой Звёздочкой и обезьянкой Пружинкой. Через их приключения дети ненавязчиво погружаются в обучающую среду.\n\nЕдиная тема недели связывает все четыре блока в целостную историю — так знания усваиваются глубже и остаются надолго.",
          style: "plain",
          columns: 2,
          background: "white",
          images: [
            "https://i.ibb.co/twhKXxHJ/Generated-Image-March-19-2026-11-19-PM-removebg-preview.png",
            "https://i.ibb.co/Q7dTC7wt/Generated-Image-March-19-2026-11-26-PM-removebg-preview.png",
          ],
          items: [],
        },
      ],
    },
    {
      id: "2",
      slug: "pushistye-hudozhniki",
      name: "Пушистые художники",
      shortName: "Рисование",
      age: "9+ лет",
      ageMin: 9,
      ageMax: 14,
      description: "Построение рисунка, теория цвета и разные техники — в тёплой творческой атмосфере без оценок и сравнений",
      color: "#F2A65A",
      status: "active",
      statusText: "Идёт набор",
      duration: "60 минут",
      groupSize: "до 10 детей",
      image: "https://i.ibb.co/cKK28JvZ/Generated-Image-March-22-2026-3-47-PM.png",
      formatTitle: "Формат занятий",
      formatExtraLabel: "Пробное",
      formatExtraValue: "Бесплатно",
      benefits: [
        { title: "Построение композиции", description: "Основы композиции и пространственного мышления" },
        { title: "Теория цвета", description: "Как работать с цветом и создавать гармонию" },
        { title: "Разные техники, жанры, направления", description: "От реализма до абстракции, от живописи до графики" },
        { title: "Уверенность в себе", description: "Творчество без оценок и сравнений" },
      ],
      sections: [
        {
          id: "s1",
          type: "cards",
          enabled: true,
          title: "Как устроена программа",
          subtitle: "Программа построена на принципе творческой гостиной. Ребёнок сам выбирает что рисовать — педагог мягко направляет. Теория гармонично включена в творческий процесс.",
          body: "",
          style: "badge",
          columns: 2,
          background: "tint",
          images: [],
          items: [
            {
              icon: "",
              title: "9–12 лет",
              text: "Осознанное построение формы, светотень, материалы",
              list: [],
              label: "",
              value: "",
            },
            {
              icon: "",
              title: "Подростки и взрослые",
              text: "Глубокая проработка техники, объёма, композиции",
              list: [],
              label: "",
              value: "",
            },
          ],
        },
        {
          id: "s2",
          type: "cards",
          enabled: true,
          title: "Структура занятия",
          subtitle: "",
          body: "",
          style: "number",
          columns: 2,
          background: "tint",
          images: [],
          items: [
            {
              icon: "",
              title: "Вводная часть (5–7 мин)",
              text: "",
              list: [
                "Обсуждение проекта",
                "Выбор референса",
                "Постановка художественной задачи",
              ],
              label: "",
              value: "",
            },
            {
              icon: "",
              title: "Теоретический микро-блок (5–10 мин)",
              text: "",
              list: [
                "Как построить форму",
                "Где свет и тень",
                "Как смешать нужный цвет",
                "Как работать кистью",
              ],
              label: "",
              value: "",
            },
            {
              icon: "",
              title: "Практическая работа (30–40 мин)",
              text: "",
              list: [
                "Работа над индивидуальным проектом",
                "Персональные комментарии",
                "Корректировка через показ, а не критику",
              ],
              label: "",
              value: "",
            },
            {
              icon: "",
              title: "Рефлексия (5 мин)",
              text: "",
              list: [
                "Что получилось",
                "Что было сложным",
                "Какой следующий шаг",
              ],
              label: "",
              value: "",
            },
          ],
        },
        {
          id: "s3",
          type: "cards",
          enabled: true,
          title: "Материалы и техники",
          subtitle: "",
          body: "",
          style: "plain",
          columns: 4,
          background: "tint",
          images: [],
          items: [
            {
              icon: "",
              title: "Акварель",
              text: "",
              list: [
                "Прозрачность и слои",
                "Работа по сырому",
                "Цветовые переходы",
              ],
              label: "",
              value: "",
            },
            {
              icon: "",
              title: "Гуашь",
              text: "",
              list: [
                "Плотность",
                "Перекрытие цвета",
                "Декоративность",
              ],
              label: "",
              value: "",
            },
            {
              icon: "",
              title: "Акрил",
              text: "",
              list: [
                "Работа плотным слоем",
                "Фактура",
                "Основы на холсте",
              ],
              label: "",
              value: "",
            },
            {
              icon: "",
              title: "Графика",
              text: "",
              list: [
                "Карандаш и штрих",
                "Линия",
                "Тональные градации",
              ],
              label: "",
              value: "",
            },
          ],
        },
      ],
    },
    {
      id: "3",
      slug: "sekrety-miniatyurista",
      name: "Секреты миниатюриста",
      shortName: "Архитектурное моделирование",
      age: "9-10+ лет",
      ageMin: 9,
      ageMax: 14,
      description: "Проектируем и строим настоящие архитектурные макеты из бумаги — от идеи до готовой модели",
      color: "#7B9FBA",
      status: "active",
      statusText: "Идёт набор",
      duration: "60 минут",
      groupSize: "до 10 детей",
      image: "https://i.ibb.co/W43Gwb1z/3bab08d3-e731-40d7-954f-a066580388f6.jpg",
      formatTitle: "Формат занятий",
      formatExtraLabel: "Пробное",
      formatExtraValue: "Бесплатно",
      benefits: [
        { title: "Пространственное мышление", description: "Учимся видеть объёмные формы и планировать конструкцию" },
        { title: "Планирование", description: "От идеи до реализации — полный цикл создания макета" },
        { title: "Инженерное мышление", description: "Прочность, материалы, оптимальные решения, работа с ошибками" },
        { title: "Усидчивость", description: "Внимание к деталям и терпение в работе" },
        { title: "Гордость за результат", description: "Настоящий макет, созданный своими руками" },
      ],
      sections: [
        {
          id: "s1",
          type: "text",
          enabled: true,
          title: "Архитектурное моделирование",
          subtitle: "Уникальная творческая мастерская, где бумага и картон превращаются в здания, мосты и целые города. В отличие от обычного рисования или лепки, здесь каждый проект — это полноценное «строительство»: от эскиза до объёмного макета.",
          body: "С чем мы работаем\n\nБумага, картон, клей и чертёжные инструменты. Изучаем основы архитектурной графики, учимся читать чертежи и создавать развёртки. Каждый ребёнок сам придумывает идею, делает набросок, продумывает пропорции и переносит проект в объём.",
          style: "plain",
          columns: 2,
          background: "tint",
          images: [],
          items: [],
        },
        {
          id: "s2",
          type: "cards",
          enabled: true,
          title: "Подробнее о навыках",
          subtitle: "",
          body: "",
          style: "plain",
          columns: 2,
          background: "tint",
          images: [],
          items: [
            {
              icon: "",
              title: "Пространственное мышление",
              text: "Учимся видеть объёмные формы и планировать конструкцию. Представлять, как выглядит объект сверху, сбоку и изнутри. Этот навык лежит в основе геометрии, черчения и точных наук.",
              list: [],
              label: "",
              value: "",
            },
            {
              icon: "",
              title: "Планирование",
              text: "От идеи до реализации — полный цикл создания макета. Мы не даём готовых шаблонов: ребёнок сам придумывает, чертит, рассчитывает и собирает. Формируется системное мышление: цель → этапы → результат.",
              list: [],
              label: "",
              value: "",
            },
            {
              icon: "",
              title: "Инженерное мышление",
              text: "Не просто «сделать красиво», а «сделать надёжно, функционально и продумано». Понимание конструкции, прочности и свойств материалов, поиск оптимальных решений, работа с ошибками.",
              list: [],
              label: "",
              value: "",
            },
            {
              icon: "",
              title: "Усидчивость",
              text: "Создание макета требует точности до миллиметра. Учим детей и взрослых аккуратности, сосредоточенности и умению доводить начатое до конца — качествам, которые пригодятся в школе и в жизни.",
              list: [],
              label: "",
              value: "",
            },
            {
              icon: "",
              title: "Гордость за результат",
              text: "Готовая работа — это не просто «поделка». Это авторский архитектурный объект, который ребёнок спроектировал, рассчитал, построил и оформил сам. Такой опыт даёт ощущение компетентности и уверенности в своих силах.",
              list: [],
              label: "",
              value: "",
            },
          ],
        },
        {
          id: "s3",
          type: "facts",
          enabled: true,
          title: "Формат занятий",
          subtitle: "",
          body: "",
          style: "plain",
          columns: 2,
          background: "tint",
          images: [],
          items: [
            {
              icon: "",
              title: "",
              text: "",
              list: [],
              label: "Возраст",
              value: "Дети от 7 лет, подростки и взрослые",
            },
            {
              icon: "",
              title: "",
              text: "",
              list: [],
              label: "Группа",
              value: "До 6 человек — внимание каждому",
            },
            {
              icon: "",
              title: "",
              text: "",
              list: [],
              label: "Длительность",
              value: "1 час 40 минут",
            },
            {
              icon: "",
              title: "",
              text: "",
              list: [],
              label: "Материалы",
              value: "Все включены в стоимость",
            },
          ],
        },
      ],
    },
    {
      id: "4",
      slug: "eksploriki",
      name: "Эксплорики",
      shortName: "Английский язык",
      age: "7-8 лет",
      ageMin: 7,
      ageMax: 8,
      description: "Не уроки и не зубрёжка — дети исследуют мир на английском как на родном языке",
      color: "#B8A9D4",
      status: "soon",
      statusText: "Скоро",
      duration: "60 минут",
      groupSize: "до 10 детей",
      image: "https://i.ibb.co/Ldy9r4R0/4af909d3-e731-40d7-954f-a066580388f6.jpg",
      formatTitle: "Формат занятий",
      formatExtraLabel: "Пробное",
      formatExtraValue: "Бесплатно",
      benefits: [
        { title: "Естественное восприятие языка", description: "Английский усваивается как родной — через контекст" },
        { title: "Базовый словарный запас", description: "Через игру и общение, без зубрёжки" },
        { title: "Уверенность в коммуникации", description: "Говорим без страха ошибок" },
        { title: "Любопытство к миру", description: "Интерес к другим культурам и традициям" },
      ],
      sections: [],
    },
    {
      id: "5",
      slug: "shtab-pandy",
      name: "Стратеги",
      shortName: "Настольные игры",
      age: "7-8 лет",
      ageMin: 7,
      ageMax: 8,
      description: "Новые друзья, стратегия, логика и море удовольствия — в тёплой компании единомышленников",
      color: "#D4826A",
      status: "active",
      statusText: "Идёт набор",
      duration: "90 минут",
      groupSize: "до 10 человек",
      image: "https://i.ibb.co/ymJpLyzW/photo-2025-12-16-13-46-13.jpg",
      formatTitle: "Формат занятий",
      formatExtraLabel: "Пробное",
      formatExtraValue: "Бесплатно",
      benefits: [
        { title: "Стратегическое мышление", description: "Учимся планировать ходы и предвидеть последствия" },
        { title: "Командная работа", description: "Навыки общения и сотрудничества" },
        { title: "Принятие решений", description: "Учимся делать выбор и нести ответственность" },
        { title: "Лидерство и уважение", description: "Умение вести и уважать других игроков" },
      ],
      sections: [],
    },  ],
  reviews: [
    {
      id: "r1",
      name: "Наталья",
      child: "Дамир, 4 года",
      program: "Смышлёная Панда",
      text: "Занятия нравятся, видно, что всегда готовятся к ним — благодаря этому у детей много активностей и частая смена видов деятельности, что важно для дошкольников. В занятие включены физические, творческие, развивающие и нейропсихологические задания, детки развиваются всесторонне. Меня как маму и педагога всё устраивает 🌸",
      avatar: "https://i.ibb.co/gZk3BwPP/photo-2026-03-22-15-51-16.jpg",
    },
    {
      id: "r2",
      name: "Ольга",
      child: "Маша, 5 лет",
      program: "Смышлёная Панда",
      text: "Хочу выразить огромную благодарность Ольге Михайловне и студии Академия Панды! Для нас это место стало настоящей находкой. Ребёнок бежит на занятия с горящими глазами, а возвращается всегда с новыми знаниями и отличным настроением. Заметно подтянулись моторика и память, дочь стала лучше считать. Самое главное — здесь умеют увлечь детей, каждое занятие это что-то новое и забавное. Спасибо за ваш труд и индивидуальный подход!",
      avatar: "https://i.ibb.co/dJfknY9S/photo-2026-03-22-17-16-31.jpg",
    },
    {
      id: "r3",
      name: "Светлана",
      child: "Есения, 4 года",
      program: "Смышлёная Панда",
      text: "Посещаем Академию Панды с открытия, ребёнок всегда с большим желанием идёт на занятия и даже ждёт их с нетерпением. Занятия красочные, содержательные, каждое занятие новая поделка. Ольга Михайловна отлично ладит с детьми и очевидно, что это дело ей по душе. Ценим за вклад в развитие ребёнка. Советую посещать развивающие занятия!",
      avatar: "https://i.ibb.co/GbwZDG9/photo-2026-03-22-19-31-14.jpg",
    },
    {
      id: "r4",
      name: "Джемма",
      child: "Манэ, 5 лет",
      program: "Смышлёная Панда",
      text: "Занятия очень понравились, ребёнок довольный, чувствуется прогресс в развитии и усидчивости. Благодарю! ❤️",
      avatar: "https://i.ibb.co/TMYzFC12/photo-2026-03-22-15-51-39.jpg",
    },
    {
      id: "r5",
      name: "Ирина Петровна",
      child: "Мирослав, 9 лет",
      program: "Архитектурное моделирование",
      text: "Замечательная студия под руководством Ольги Михайловны — место для тех, кто любит придумывать и воплощать задуманное! Сыну 9 лет, занимается второй год. Научился строить чертёж, делать расчёт, работать с разными материалами и наносить разные фактуры. Очень рада, что вся работа ведётся руками, а не с использованием компьютера — плюс к развитию моторики! Я называю эти занятия «уроки труда на профессиональном уровне». На выходе получаются действительно классные работы, которыми он очень гордится 😀",
      avatar: "https://i.ibb.co/MxJrbdNY/photo-2026-03-31-20-33-18.jpg",
    },
  ],
  faq: [
    {
      id: "f1",
      question: "Где находится центр?",
      answer: "Мы находимся в Ботаническом районе Екатеринбурга, рядом с ТЦ «Дирижабль». Удобно добираться как на машине (есть парковка), так и на общественном транспорте (остановка в 10 минутах ходьбы).",
      showOnHome: true,
    },
    {
      id: "f2",
      question: "Сколько детей в группе?",
      answer: "В наших группах до 10 детей. Это оптимальное количество, чтобы педагог мог уделить внимание каждому ребёнку, при этом сохраняя динамику групповых занятий и возможность общения со сверстниками.",
      showOnHome: true,
    },
    {
      id: "f3",
      question: "Нужна ли подготовка для первого занятия?",
      answer: "Нет, никакой подготовки не требуется! Мы принимаем детей с любым уровнем подготовки. Педагог подберёт задания под каждого ребёнка, учитывая его возраст и навыки. Главное — желание и интерес.",
      showOnHome: true,
    },
    {
      id: "f4",
      question: "Как проходит пробное занятие?",
      answer: "Пробное занятие длится столько же, сколько обычное (от 45 до 90 минут в зависимости от программы). Ребёнок участвует во всех активностях вместе с группой. Родители могут остаться и понаблюдать или подождать в холле — как вам удобнее.",
      showOnHome: true,
    },
    {
      id: "f5",
      question: "Можно ли попробовать перед покупкой абонемента?",
      answer: "Да, конечно! Первое занятие по любому направлению полностью бесплатно при покупке абонемента. Мы считаем, что родители и ребёнок должны сначала познакомиться с педагогом, почувствовать атмосферу, и только потом принимать решение. В случае, если вы решите не посещать наши занятия, пробное занятие оплачивается 50% от его стоимости.",
      showOnHome: true,
    },
    {
      id: "f6",
      question: "Как выбрать подходящее направление для ребёнка?",
      answer: "Напишите нам в Telegram, WhatsApp или позвоните — мы с радостью поможем! Расспросим про интересы ребёнка, его возраст и темперамент, и подскажем, какое направление может подойти лучше всего. А потом можно прийти на пробное и убедиться.",
      showOnHome: true,
    },
    {
      id: "f7",
      question: "Есть ли занятия в выходные?",
      answer: "Да, мы работаем в выходные! Расписание зависит от направления. Точное время занятий можно уточнить по телефону или при записи на пробное занятие.",
      showOnHome: false,
    },
    {
      id: "f8",
      question: "Какой возраст подходит для каждого направления?",
      answer: "У каждого направления есть рекомендуемый возраст: Смышлёная Панда и Эксплорики — 4-6 лет, Пушистые художники — 9+ лет, Секреты миниатюриста — 9+ лет, Стратеги — 7-8 лет. Но это гибкие рамки, мы всегда смотрим на готовность конкретного ребёнка.",
      showOnHome: false,
    },
    {
      id: "f9",
      question: "Что взять с собой на первое занятие?",
      answer: "Все материалы мы предоставляем. Возьмите с собой сменную обувь для ребёнка, хорошее настроение и открытость к новому опыту. Если ребёнок очень привязан к маме, можно взять любимую игрушку для поддержки.",
      showOnHome: false,
    },
  ],
};
