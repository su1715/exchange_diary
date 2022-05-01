import ModalLayout from "./layouts/ModalLayout";
import { useState } from "react";
import { postData, getData } from "../util/api";
import { searchFriendState, friendsState } from "../util/recoil";
import { useSetRecoilState } from "recoil";
import styles from "../styles/ReadPaper.module.css";

export default function SearchFriend() {
  const setSearchFriend = useSetRecoilState(searchFriendState);
  const setFriends = useSetRecoilState(friendsState);

  const [id, setId] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const onChange = ({ target: { value } }) => {
    setId(value);
  };

  const search = async () => {
    const data = { id };
    const result = await postData("/api/friends/find", data);
    if (result.result === "success") setSearchResult(result.friend);
  };

  const onKeyPress = async (e) => {
    if (e.key === "Enter") {
      await search();
      setId("");
    }
  };
  const onClose = () => {
    setSearchFriend(false);
  };
  const addFriend = async () => {
    await postData("/api/friends/add", { id: searchResult.id });
    const { friends } = await getData("/api/me/friends");
    setFriends(friends);
    setSearchResult(null);
  };

  return (
    <ModalLayout>
      <div>
        <h1>친구추가</h1>
      </div>
      <div>
        <input
          className={styles.searchInput}
          value={id}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="아이디를 입력해주세요..."
        />
      </div>
      <div className={styles.result}>
        {searchResult ? (
          <div className={styles.resultItem}>
            <div>{searchResult.id}</div>
            <div>{searchResult.nickname}</div>
            <div onClick={addFriend}>친구추가</div>
          </div>
        ) : (
          <div>검색 결과가 없습니다</div>
        )}
      </div>

      <div className={styles.buttons}>
        <button className="buttonSpecial" onClick={onClose}>
          닫기
        </button>
      </div>
    </ModalLayout>
  );
}
