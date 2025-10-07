import { getRandomInt, getUniqueNumbers } from './util.js';
import { descriptions } from './data.js';
import { generateComment } from './comment-generator.js';

export function generatePhotos(num = 25) {
  const photoIds = getUniqueNumbers(num, 1, 25);
  const photos = [];

  for (let i = 0; i < num; i++) {
    const description = descriptions[i % descriptions.length];
    const likes = getRandomInt(15, 200);
    const commentsCount = getRandomInt(0, 30);
    const comments = Array.from({ length: commentsCount }, generateComment);

    photos.push({
      id: photoIds[i],
      url: `photos/${i + 1}.jpg`,
      description,
      likes,
      comments
    });
  }

  return photos;
}
