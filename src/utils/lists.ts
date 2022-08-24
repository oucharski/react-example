export const getRandomFromList = (list: any[]) => {
  const max = list.length - 1;
  const index = Math.floor(Math.random() * (max - 0 + 1)) + 0;
  return list[index];
};
