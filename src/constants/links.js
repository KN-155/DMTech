export const MAIN_LINKS = [
  { icon: 'business', text: 'Недвижимость', url: 'realty' },
  { icon: 'directions_car', text: 'Авто и мото', url: 'cars' },
  { icon: 'format_paint', text: 'Ремонт и стройка', url: 'repairs' },
  { icon: 'laptop_chromebook', text: 'Техника', url: 'technology' },
  { icon: 'person', text: 'Одежда', url: 'clothes' },
  { icon: 'weekend', text: 'Для дома', url: 'house' },
  { icon: 'pets', text: 'Животные', url: 'animals' },
  { icon: 'local_florist', text: 'Растения', url: 'plants' },
  { icon: 'school', text: 'Книги и учебники', url: 'books' },
  { icon: 'fitness_center', text: 'Спорт и отдых', url: 'sport' },
  { icon: 'apps', text: 'Прочее', url: 'other' },
];

export const GUEST_LINKS = [
  { title: 'Регистрация', icon: 'face', url: '', method: 'onRegistration' },
  { title: 'Вход', icon: 'lock', url: '', method: 'onLogin' },
];

export const USER_LINKS = [
  { title: 'Профиль', icon: 'account_circle', url: '/profile' },
  { title: 'Мои объявления', icon: 'view_list', url: '/ads' },
  { title: 'Избранное', icon: 'favorite', url: '/favorites' },
  { title: 'Выйти', icon: 'exit_to_app', url: '', method: 'onExit' },
];