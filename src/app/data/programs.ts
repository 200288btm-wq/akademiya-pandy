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
    image: "https://images.unsplash.com/photo-1758598737498-03850be1ad89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBsZWFybmluZyUyMGFjdGl2aXR5fGVufDF8fHx8MTc3MzU5MDQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
    image: "https://images.unsplash.com/photo-1581606588715-a4735b758c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0JTIwY2xhc3MlMjBkcmF3aW5nfGVufDF8fHx8MTc3MzU5MDQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
    image: "https://images.unsplash.com/photo-1759646828783-7e1b8f02f89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY3JlYXRpdmUlMjB3b3Jrc2hvcCUyMGhhbmRzfGVufDF8fHx8MTc3MzU5MDQxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
    image: "https://images.unsplash.com/photo-1565843248736-8c41e6db117b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZW5nbGlzaCUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzU5MDQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "5",
    slug: "shtab-pandy",
    name: "Штаб Панды",
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
    image: "https://images.unsplash.com/photo-1672908871944-bf391a71cd12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGJvYXJkJTIwZ2FtZXMlMjBwbGF5aW5nfGVufDF8fHx8MTc3MzU5MDQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
    image: "https://images.unsplash.com/photo-1759734802071-98fbb4c4467a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGRhbmNpbmclMjBtb3ZlbWVudHxlbnwxfHx8fDE3NzM1OTA0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];
