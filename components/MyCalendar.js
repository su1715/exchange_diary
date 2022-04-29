import "react-calendar/dist/Calendar.css";
import { Calendar } from "react-calendar";
import { useRecoilState, seRecoilValue } from "recoil";
import { dateState, isTodayState } from "../util/recoil";
import { useEffect } from "react";

export default function MyCalendar() {
  const [value, setValue] = useRecoilState(dateState);

  const onChange = value => {
    setValue(value);
  };
  return <Calendar onChange={onChange} value={value} />;
}
