export const getRandomEmoji = (): string => {
  const emojis = ['🦄', '🦊', '👽', '🧃', '🐸', '🌈', '🍭', '🤖', '🐱‍👤'];
  return emojis[Math.floor(Math.random() * emojis.length)];
};
