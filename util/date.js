export const dateToString = dateObj => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const day = days[dateObj.getDay()];

  return `${year}년 ${month}월 ${date}일 ${day}요일`;
};

export const isSameDate = (date1, date2) => {
  date1 = new Date(date1);
  if (date1.getFullYear() !== date2.getFullYear()) return false;
  if (date1.getMonth() !== date2.getMonth()) return false;
  if (date1.getDate() !== date2.getDate()) return false;
  return true;
};

export const dateFormatting = time => {
  const sendDate = new Date(time);
  let getDate = sendDate;
  getDate.setHours(getDate.getHours() + 12);
  const nowDate = new Date();
  const elapsed = (getDate - nowDate) / 1000;
  const min = Math.floor(elapsed / 60) % 60;
  const hour = Math.floor(Math.floor(elapsed / 60) / 60);
  let format = hour > 0 ? `${hour}시간` : "";
  format += min > 0 ? `${min}분` : "";
  return format;
};
