const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUniqueNumbers(count, min, max) {
  const numbers = [];
  while (numbers.length < count) {
    const num = getRandomInt(min, max);
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
}

const usedCommentIds = new Set();
function getUniqueCommentId() {
  let candidate = getRandomInt(1, 10000);
  while (usedCommentIds.has(candidate)) {
    candidate = getRandomInt(1, 10000);
  }
  usedCommentIds.add(candidate);
  return candidate;
}

function getRandomMessage() {
  const count = getRandomInt(1, 2);
  let chosen = [];
  while (chosen.length < count) {
    const index = getRandomInt(0, messages.length - 1);
    if (!chosen.includes(messages[index])) {
      chosen.push(messages[index]);
    }
  }
  return chosen.join(' ');
}

function generateComment() {
  return {
    id: getUniqueCommentId(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getRandomMessage(),
    name: names[getRandomInt(0, names.length - 1)]
  };
}

function generatePhotos(num = 25) {
  const photoIds = getUniqueNumbers(num, 1, 25);
  const urls = [...photoIds];
  const photos = [];

  for (let i = 0; i < num; i++) {

    const description = descriptions[i % descriptions.length];
    const likes = getRandomInt(15, 200);
    const commentsCount = getRandomInt(0, 30);
    const comments = Array.from({ length: commentsCount }, generateComment);

    photos.push({
      id: photoIds[i],
      url: `photos/${photoIds[i]}.jpg`,
      description,
      likes,
      comments
    });
  }

  return photos;
}

const photosArray = generatePhotos(25);
