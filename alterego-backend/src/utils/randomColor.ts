export const getRandomColor = (): string => {
  const colors = ['#FFC0CB', '#ADD8E6', '#90EE90', '#FFFACD', '#D3D3D3', '#FFB6C1', '#FFD700', '#8A2BE2'];
  return colors[Math.floor(Math.random() * colors.length)];
};
