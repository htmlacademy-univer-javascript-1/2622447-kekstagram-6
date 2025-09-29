// main.js

// Массив случайных предложений для комментариев
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Массив случайных имен для комментаторов
const names = [
  'Артём',
  'Мария',
  'Дмитрий',
  'Анна',
  'Сергей',
  'Елена',
  'Иван',
  'Ольга',
  'Алексей',
  'Наталья',
  'Павел',
  'Юлия',
  'Михаил',
  'Екатерина',
  'Андрей'
];

// Массив описаний для фотографий
const descriptions = [
  'Прекрасный закат на море',
  'Горный пейзаж в утреннем тумане',
  'Уличное кафе в старом городе',
  'Кофе и книга в уютном уголке',
  'Осенний парк с золотыми листьями',
  'Городские огни ночью',
  'Пляж с белым песком и бирюзовой водой',
  'Снежные вершины гор',
  'Цветущий сад весной',
  'Улочки европейского города',
  'Архитектура современного мегаполиса',
  'Дождь в городской среде',
  'Лесная тропинка в солнечный день',
  'Мосты через реку в сумерках',
  'Морозные узоры на стекле',
  'Праздничный фейерверк',
  'Уютный интерьер с камином',
  'Уличные музыканты',
  'Рынок с свежими продуктами',
  'Исторический памятник архитектуры',
  'Отражение в воде',
  'Маяк на скалистом берегу',
  'Поле с подсолнухами',
  'Звездное небо в горах',
  'Уличное искусство и граффити'
];

// Функция для генерации случайного числа в заданном диапазоне
function getRandomInteger(minimum, maximum) {
  const lowerBound = Math.ceil(Math.min(minimum, maximum));
  const upperBound = Math.floor(Math.max(minimum, maximum));
  return Math.floor(lowerBound + Math.random() * (upperBound - lowerBound + 1));
}

// Функция для получения случайного элемента из массива
function getRandomArrayElement(array) {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
}

// Функция для создания генератора уникальных идентификаторов
// Теперь гарантирует уникальность в большом диапазоне, а не просто последовательность.
function createUniqueIdGenerator(minId, maxId) {
  const generatedIds = new Set();
  return function() {
    let id = getRandomInteger(minId, maxId);
    while (generatedIds.has(id)) {
      id = getRandomInteger(minId, maxId);
    }
    generatedIds.add(id);
    return id;
  };
}

// Создаем генератор идентификаторов для комментариев с большим диапазоном
const generateCommentId = createUniqueIdGenerator(1, 10000); // Например, от 1 до 10000

// Функция для создания одного комментария
function createComment() {
  const numberOfSentences = getRandomInteger(1, 2); // От 1 до 2 предложений
  const commentMessages = [];

  // Выбираем уникальные предложения для комментария
  while (commentMessages.length < numberOfSentences) {
    const randomMessage = getRandomArrayElement(messages);
    if (!commentMessages.includes(randomMessage)) { // Проверяем на уникальность
      commentMessages.push(randomMessage);
    }
  }

  const comment = {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`, // Используем шаблонные строки
    message: commentMessages.join(' '), // Объединяем предложения
    name: getRandomArrayElement(names)
  };
  return comment;
}

// Функция для создания массива комментариев
function createComments() {
  const commentsCount = getRandomInteger(0, 30);
  // Используем Array.from для более чистого создания массива
  const commentsArray = Array.from({ length: commentsCount }, createComment);
  return commentsArray;
}

// Функция для создания объекта фотографии
function createPhoto(index) {
  const photo = {
    id: index,
    url: `photos/${index}.jpg`, // Используем шаблонные строки
    description: getRandomArrayElement(descriptions), // Случайное описание
    likes: getRandomInteger(15, 200),
    comments: createComments()
  };

  return photo;
}

// Функция для генерации массива из 25 фотографий
function generatePhotos() {
  const photosArray = [];

  for (let i = 1; i <= 25; i++) {
    const newPhoto = createPhoto(i);
    photosArray.push(newPhoto);
  }

  return photosArray;
}

// Создание массива фотографий
const photos = generatePhotos();
