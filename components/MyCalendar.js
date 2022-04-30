//import "react-calendar/dist/Calendar.css";
import { Calendar } from "react-calendar";
import { useRecoilState } from "recoil";
import { dateState } from "../util/recoil";
import myCalenarStyles from "../styles/MyCalendar.module.css";

export default function MyCalendar() {
  const [value, setValue] = useRecoilState(dateState);

  const onChange = value => {
    setValue(value);
  };
  return (
    <div className={myCalenarStyles.calendarWrapper}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
