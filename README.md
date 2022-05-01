# Exchange_diary

## 개요

친구들과 일기를 교환할 수 있는 서비스를 제공합니다.

어릴 적 직접 써서 다음날 주었던 교환일기를 모티브로 하여

작성 후 12시간이 지나야 친구의 일기를 열람할 수 있도록 만들었습니다.

## 기술 스택

**Front-End**

- React.js : JavaScript UI 라이브러리
- Next.js : SSR(Server Side Rendering)을 지원하는 프레임워크
- NextAuth : Next.js를 사용하는 애플리케이션에서 로그인을 쉽게 관리할수 있게 해주는 라이브러리
- Recoil : 상태관리 라이브러리

**Back-End**

- MSW

front-end를 먼저 구현하기 위해 MSW를 통해 서버를 Mocking 하였으며 추후 Node.js로 백엔드를 구현할 예정입니다.

## 기능구현

### 로그인

로그인 했을 때의 메인화면 입니다.
![signin](./images/signin.png)

로그인 하지 않았을 때의 메인화면 입니다.
![signout](./images/signout.png)

NextAuth를 사용해 구글아이디를 통해 로그인 할 수 있도록 만들었습니다.
![googleAuth](./images/google_auth.png)

### 일기 작성

오늘의 일기를 아직 작성하지 않은 경우 `일기 쓰기` 버튼을 눌러 일기를 작성할 수 있습니다.
![newDiary](./images/newDiary.png)

### 내가 쓴 일기 확인

일기를 작성하고 12시간이 지나지 않은 경우 남은 시간을 표시합니다.

물론 내가 작성한 일기는 `일기 보기` 버튼을 눌러 언제든지 확인할 수 있습니다.

![afterWrite](./images/afterWriteDiary.png)
![myDiary](./images/myDiary.png)

작성하고 12시간이 지나면 `일기가 전송되었습니다!`라는 문구를 통해 친구들에게 공개되었음을 확인할 수 있습니다.
![afterWrite2](./images/afterWriteDiary2.png)

### 친구가 쓴 일기 확인

해당 날짜에 친구들이 쓴 일기 리스트를 확인할 수 있습니다.

**5월 1일**
![friendDiaries1](./images/friendsDiaries.png)

**5월 2일**

작성 후 12시간이 지나지 않은 경우 내용은 확인할 수 없습니다.
![friendDiaries2](./images/friendsDiaries2.png)

`일기가 전송되었습니다!` 라는 문구가 적힌 아이템을 클릭하면 일기 내용을 확인할 수 있습니다.
![lookFriendDiary](./images/lookFriendDiary.png)

### 친구 목록

친구 목록을 통해 친구들을 확인하고 관리할 수 있습니다.
![friendList](./images/friendList.png)

마우스를 올려 나타나는 버튼으로 친구를 삭제할 수 있습니다.

`하늘보리` 가 삭제된 것을 확인할 수 있습니다.
![deleteFriend](./images/deleteFriend.png)

### 친구 검색, 친구 추가

친구목록 오른쪽 상단의 돋보기 버튼을 눌러 친구를 검색하고 친구를 추가할 수 있습니다.
![addFriend](./images/addFriend.png)

검색 후 친구를 추가하면 친구 목록에 반영됩니다.
![searchFriend](./images/searchFriend.png)
![newFriend](./images/newFriend.png)

## 실행

Development Server:

```bash
npm run dev
# or
yarn dev
```

웹 브라우저에서 `http://localhost:3000` 을 열어 확인할 수 있습니다.
