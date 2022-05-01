import { atom, selector } from "recoil";

export const userState = atom({
  key: "userState",
  default: {},
});

export const friendsState = atom({
  key: "friendsState",
  default: [],
});

export const dateState = atom({
  key: "dateState",
  default: new Date(),
});

export const newDiaryState = atom({
  key: "newDiaryState",
  default: false,
});

export const friendDiariesState = atom({
  key: "friendDiariesState",
  default: [],
});

export const myDiariesState = atom({
  key: "myDiariesState",
  default: [],
});

export const readPaperState = atom({
  key: "readPaperState",
  default: null,
});

export const searchFriendState = atom({
  key: "searchFriendState",
  default: false,
});

export const allDiariesState = selector({
  key: "allDiariesState",
  get: ({ get }) => {
    return [...get(myDiariesState), ...get(friendDiariesState)];
  },
});

export const isTodayState = selector({
  key: "isTodayState",
  get: ({ get }) => {
    const date = get(dateState);
    const elapsed = new Date() - date;
    const seconds = elapsed / 1000;
    if (seconds / (60 * 60) < 24 && seconds > 0) return true;
    return false;
  },
});
