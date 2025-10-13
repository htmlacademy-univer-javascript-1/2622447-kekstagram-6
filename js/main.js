const commentMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const commentNames = [
  'света', 'миша', 'лена', 'дима',
  'юля', 'игорь', 'наташа', 'рома'
];

const descriptions = [
  'прогулка по старому городу.',
  'утренний кофе с видом на залив.',
  'дождь за окном создавал уют.',
  'первые лучи солнца сквозь листву.',
  'один из тех дней, что запоминаются.',
  'город просыпается постепенно.',
  'момент безмятежности и покоя.',
  'дорога, ведущая к дому.',
  'отражения в лужах после дождя.',
  'теплый свет вечерних окон.',
  'ветер гнал облака по небу.',
  'одинокий фонарь в ночном парке.',
  'морозные узоры на стекле.',
  'шум прибоя и крики чаек.',
  'горный воздух пахнет хвоей.',
  'сумерки окрасили все в синие тона.',
  'солнечные зайчики на стене.',
  'осенний ковер из листьев.',
  'тишина заснеженного леса.',
  'аромат свежей выпечки из кафе.',
  'танец теней под старым фонарем.',
  'река несла последний лед.',
  'ржавое колесо обозрения в поле.',
  'старый мост через речку.',
  'заброшенная лодка на берегу.'
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
  const chosen = [];
  while (chosen.length < count) {
    const index = getRandomInt(0, commentMessages.length - 1);
    if (!chosen.includes(commentMessages[index])) {
      chosen.push(commentMessages[index]);
    }
  }
  return chosen.join(' ');
}

function generateComment() {
  return {
    id: getUniqueCommentId(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getRandomMessage(),
    name: commentNames[getRandomInt(0, commentNames.length - 1)]
  };
}

function generatePhotos(num = 25) {
  const photoIds = getUniqueNumbers(num, 1, 25);
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
