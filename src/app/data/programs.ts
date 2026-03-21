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
  status: "active" | "launching" | "soon";
  statusText: string;
  duration: string;
  groupSize: string;
  image: string;
}

export const programs: Program[] = [
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
    image: "https://i.ibb.co/G4BTpQck/951b69af-3773-d9d1-addd-61b200c988f6.jpg"
  },
  {
    id: "2",
    slug: "pushistye-hudozhniki",
    name: "Пушистые художники",
    shortName: "Рисование",
    age: "7-8+ лет",
    ageMin: 7,
    ageMax: 12,
    description: "Построение рисунка, теория цвета и разные техники — в тёплой творческой атмосфере без оценок и сравнений",
    color: "#F2A65A",
    status: "active",
    statusText: "Идёт набор",
    duration: "60 минут",
    groupSize: "до 10 детей",
    image: "https://i.ibb.co/k2702TBS/photo-2026-03-19-20-51-16.jpg"
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
    status: "launching",
    statusText: "Запуск",
    duration: "60 минут",
    groupSize: "до 10 детей",
    image: "https://i.ibb.co/W43Gwb1z/3bab08d3-e731-40d7-954f-a066580388f6.jpg"
  },
  {
    id: "4",
    slug: "eksploriki",
    name: "Эксплорики",
    shortName: "Английский язык",
    age: "4-6 лет",
    ageMin: 4,
    ageMax: 6,
    description: "Не уроки и не зубрёжка — дети исследуют мир на английском как на родном языке",
    color: "#B8A9D4",
    status: "soon",
    statusText: "Скоро",
    duration: "60 минут",
    groupSize: "до 10 детей",
    image: "https://i.ibb.co/Ldy9r4R0/4af909d3-e731-40d7-954f-a066580388f6.jpg"
  },
  {
    id: "5",
    slug: "shtab-pandy",
    name: "Стратеги",
    shortName: "Настольные игры",
    age: "9+ лет",
    ageMin: 9,
    ageMax: 14,
    description: "Новые друзья, стратегия, логика и море удовольствия — в тёплой компании единомышленников",
    color: "#D4826A",
    status: "soon",
    statusText: "Скоро",
    duration: "90 минут",
    groupSize: "до 10 человек",
    image: "https://i.ibb.co/ymJpLyzW/photo-2025-12-16-13-46-13.jpg"
  },
  {
    id: "6",
    slug: "myagkie-lapki",
    name: "Мягкие лапки",
    shortName: "Танцы",
    age: "5-8 лет",
    ageMin: 5,
    ageMax: 8,
    description: "Пластика, ритм и радость движения — без строгих правил и требования быть идеальным",
    color: "#F0B8A0",
    status: "soon",
    statusText: "Скоро",
    duration: "45 минут",
    groupSize: "до 10 детей",
    image: "https://i.ibb.co/99s2sGkW/71e486d5-f03e-636c-674c-17d67b7088f6.jpgal"
  }
];
