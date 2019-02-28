const realty = [
  {text: 'Новостройки'},
  {text: 'Квартиры'},
  {text: 'Комнаты'},
  {text: 'Дома'},
  {text: 'Гаражи'},
  {text: 'Участки'},
];

const cars = [
  {text: 'Легковые авто'},
  {text: 'Грузовики'},
  {text: 'Мототехника'},
  {text: 'Спецтхника'},
  {text: 'Прицепы'},
  {text: 'Водный транспорт'},
  {text: 'Расходники'},
];

const repairs = [
  {text: 'Строительный инструмент'},
  {text: 'Сантехника'},
  {text: 'Стройматериалы'},
  {text: 'Окна и двери'},
  {text: 'Прочее'},
];

const technology = [
  {text: 'Аудиотехника'},
  {text: 'Телевизоры'},
  {text: 'Фототехника'},
  {text: 'Компьютеры'},
  {text: 'Приставки'},
  {text: 'Телефоны'},
  {text: 'Бытовая техника'},
];

const clothes = [
  {text: 'Мужская одежда'},
  {text: 'Женская одежда'},
  {text: 'Обувь'},
  {text: 'Аксессуары'},
];

const house = [
  {text: 'Мебель'},
  {text: 'Посуда'},
];

const animals = [
  {text: 'Домашние питомцы'},
  {text: 'Сельхоз животные'},
  {text: 'Товары для животных'},
];

const plants = [
  {text: 'Рассада'},
  {text: 'Семена'},
  {text: 'Удобрения'},
  {text: 'Прочее'},
];

const books = [
  {text: 'Образование книги'},
  {text: 'Журналы'},
  {text: 'Прочии'},
];

const sport = [
  {text: 'Велосипеды'},
  {text: 'Прочии'},
];

const other = [
  {text: 'Канцелярские товары'},
  {text: 'Медицинские товары'},
  {text: 'Продукты питаня'},
  {text: 'Все остальное'},
];

export const CATEGORY = [
  { text: 'Недвижимость', subcategory: realty, category: "realty" },
  { text: 'Авто и мото', subcategory: cars, category: "cars"  },
  { text: 'Ремонт и стройка', subcategory: repairs, category: "repairs"  },
  { text: 'Техника', subcategory: technology, category: "technology"  },
  { text: 'Одежда', subcategory: clothes, category: "clothes"  },
  { text: 'Для дома', subcategory: house, category: "house"  },
  { text: 'Животные', subcategory: animals, category: "animals"  },
  { text: 'Растения', subcategory: plants, category: "plants"  },
  { text: 'Книги и учебники', subcategory: books, category: "books"  },
  { text: 'Спорт и отдых', subcategory: sport, category: "sport"  },
  { text: 'Прочее', subcategory: other, category: "other"  },
];