import { getRandomInt } from './util.js';
import { messages, names } from './data.js';

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
    const index = getRandomInt(0, messages.length - 1);
    if (!chosen.includes(messages[index])) {
      chosen.push(messages[index]);
    }
  }
  return chosen.join(' ');
}

export function generateComment() {
  return {
    id: getUniqueCommentId(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getRandomMessage(),
    name: names[getRandomInt(0, names.length - 1)]
  };
}
