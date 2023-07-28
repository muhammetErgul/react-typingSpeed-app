import { createSlice } from "@reduxjs/toolkit";
import { getRandomWords } from "../helpers/getRandomWords";

export const typingSpeedSlice = createSlice({
  name: "typingSpeed",
  initialState: {
    items: getRandomWords("turkish"),
    language: "turkish",
    currentText: {
      index: 0,
      backgroundColor: "#99b4bf",
    },
    correctWordCount: 0,
    incorrectWordCount: 0,
    isFinished: false,
    totalKeyPress: 0,
    correctKeyPress: 0,
    timer: 60,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      state.items = getRandomWords(action.payload);
      state.currentText.index = 0;
      state.currentText.backgroundColor = "#99b4bf";
    },
    checkWord: (state, action) => {
      const { items, currentText } = state;
      const { index } = currentText;
      const word = action.payload;
      const currentWord = items[index];

      state.totalKeyPress += 1;
      if (!state.isFinished) state.isFinished = true; // harf girildiğinde timer'ı başlatıyor

      if (currentWord.word.startsWith(word)) {
        state.correctKeyPress += 1;
        state.currentText.backgroundColor =
          currentWord.backgroundColor === "red"
            ? "#99b4bf"
            : state.currentText.backgroundColor;
      } else {
        state.currentText.backgroundColor = "red";
      }
    },
    updateWord: (state, action) => {
      state.totalKeyPress += 1;
      const currentWord = state.items[state.currentText.index].word;
      const word = action.payload;

      if (currentWord === word) {
        state.items[state.currentText.index].color = "green";
        state.correctWordCount += 1;
        state.correctKeyPress += 1;
      } else {
        state.items[state.currentText.index].color = "red";
        state.incorrectWordCount += 1;
      }

      state.currentText.backgroundColor = "#99b4bf";

      //  wordDisplay alanındaki kelime sayısı kadar yazdığımızda yeniden kelimelerle dolmasını sağlar
      if (state.currentText.index === state.items.length - 1) {
        state.items = getRandomWords(state.language);
        state.currentText.index = 0;
      } else {
        state.currentText.index += 1;
      }
    },
    resetGame: (state) => {
      state.items = getRandomWords(state.language);
      state.currentText.index = 0;
      state.currentText.backgroundColor = "#99b4bf";
      if (state.isFinished) {
        state.correctWordCount = 0;
        state.incorrectWordCount = 0;
        state.isFinished = false;
        state.totalKeyPress = 0;
        state.correctKeyPress = 0;
        state.timer = 60;
      }
    },

    setTimer: (state) => {
      if (state.timer > 0) state.timer -= 1;
    },
  },
});
export const selectItems = (state) => state.typingSpeed.items;
export const selectLang = (state) => state.typingSpeed.language;
export const selectCurrentText = (state) => state.typingSpeed.currentText;
export const selectTimer = (state) => state.typingSpeed.timer;
export const selectIsFinished = (state) => state.typingSpeed.isFinished;
export const { setLanguage, checkWord, updateWord, resetGame, setTimer } =
  typingSpeedSlice.actions;
export default typingSpeedSlice.reducer;
