import { atom, selector } from "recoil";

export const userState = atom({
  key: "userState",
  default: {}
});

export const friendsState = atom({
  key: "friendsState",
  default: []
});

export const dateState = atom({
  key: "dateState",
  default: new Date()
});

export const newLetterState = atom({
  key: "newLetterState",
  default: false
});

export const recieveLettersState = atom({
  key: "recieveLetterState",
  default: []
});

export const sendLettersState = atom({
  key: "sendLetterState",
  default: []
});

export const paperState = atom({
  key: "paperState",
  default: null
});

export const totalPapersState = selector({
  key: "totalPapersState",
  get: ({ get }) => {
    return [...get(sendLettersState), ...get(recieveLettersState)];
  }
});

export const isTodayState = selector({
  key: "isTodayState",
  get: ({ get }) => {
    const date = get(dateState);
    const elapsed = new Date() - date;
    const seconds = elapsed / 1000;
    if (seconds / (60 * 60) < 24 && seconds > 0) return true;
    return false;
  }
});
