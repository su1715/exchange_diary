import "react-calendar/dist/Calendar.css";
import { Calendar } from "react-calendar";
import { useRecoilState } from "recoil";
import { dateState } from "../util/recoil";

export default function MyCalendar() {
  const [value, setValue] = useRecoilState(dateState);
  const onChange = value => {
    setValue(value);
  };
  return <Calendar onChange={onChange} value={value} />;
}
