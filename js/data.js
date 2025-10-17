import { getRandomInt, getUniqueNumbers } from './util.js';
import { COMMENT_MESSAGES, COMMENT_NAMES, DESCRIPTIONS } from './constants.js';

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
    const index = getRandomInt(0, COMMENT_MESSAGES.length - 1);
    if (!chosen.includes(COMMENT_MESSAGES[index])) {
      chosen.push(COMMENT_MESSAGES[index]);
    }
  }
  return chosen.join(' ');
}

function generateComment() {
  return {
    id: getUniqueCommentId(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getRandomMessage(),
    name: COMMENT_NAMES[getRandomInt(0, COMMENT_NAMES.length - 1)]
  };
}

export function generatePhotos(num = 25) {
  const photoIds = getUniqueNumbers(num, 1, 25);
  const photos = [];

  for (let i = 0; i < num; i++) {
    const description = DESCRIPTIONS[i % DESCRIPTIONS.length];
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
