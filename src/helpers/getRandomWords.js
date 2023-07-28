import { words } from "../Data";

export const getRandomWords = (lang) => {
  const langList = ["turkish", "english"];
  if (!langList.includes(lang)) return [];

  const wordsData = words
    .sort(() => Math.random() - 0.5)
    .slice(0, 50)
    .map((word) => ({
      id: word.id,
      word: word[lang],
      color: "black",
    }));
  return wordsData;
};
