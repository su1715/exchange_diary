import ModalLayout from "./layouts/ModalLayout";
import { useState } from "react";
import { postData } from "../util/api";

export default function SettingFriend() {
  const [id, setId] = useState("");
  const onChange = ({ target: { value } }) => {
    setId(value);
  };

  const search = async () => {
    const data = { id };
    const searchResult = await postData("/api/friends/find", data);
    console.log(searchResult);
    return searchResult;
  };

  //   const showResult = result => {
  //     if (result === "success") {
  //     } else {
  //     }
  //   };

  const onKeyPress = async e => {
    if (e.key === "Enter") {
      const result = await search();
      //   showResult(result);
      setId("");
    }
  };
  return (
    <ModalLayout>
      <div>
        <h1>친구추가</h1>
      </div>
      <div>
        <input
          value={id}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="아이디를 입력해주세요..."
        />
      </div>
    </ModalLayout>
  );
}
