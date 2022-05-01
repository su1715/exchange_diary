import { rest } from "msw";

export const __MOCK_JWT_KEY = "JavaScriptIsAwesome!";

const user = {
  id: "sujpark",
  name: "박수정",
  nickname: "빛나는감자",
  level: 2,
  point: 30,
};

const friendsList = [
  {
    id: "seastar",
    nickname: "바다별",
  },
  {
    id: "skybarley",
    nickname: "하늘보리",
  },
  {
    id: "bleedingheart",
    nickname: "금낭화",
  },
  {
    id: "notyourfriend",
    nickname: "샤이가이",
  },
];

export const handlers = [
  rest.post("http://localhost:3000/api/friends/find", async (req, res, ctx) => {
    const { id } = req.body;
    if (id === "abcdefg" || id === "def" || id === "ghi")
      return res(
        ctx.status(200),
        ctx.json({
          result: "success",
          friend: { id, nickname: `촉촉한초코칩` },
        })
      );
    else return res(ctx.status(200), ctx.json({ result: "fail" }));
  }),
  rest.post("http://localhost:3000/api/friends/add", async (req, res, ctx) => {
    const { id } = req.body;
    friendsList.push({ id, nickname: `촉촉한초코칩` });
    return res(ctx.status(200), ctx.json({ result: "success" }));
  }),

  rest.get("http://localhost:3000/api/me", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(user));
  }),

  rest.get("http://localhost:3000/api/me/friends", async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        friends: friendsList,
      })
    );
  }),

  rest.get(
    "http://localhost:3000/api/me/diaries/receive",
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          diaries: [
            {
              id: "4",
              caller: "seastar",
              caller_nickname: "하늘별",
              receiver: [
                "sujpark",
                "skybarley",
                "bleedingheart",
                "notyourfriend",
              ],
              text: "오늘도 화이팅!!!\n다음 주말에 여행갈 생각하니 너무 신난다!\n\n 야근도 날 막을 순 없다!!",
              transmissionTime: new Date(hourBefore(25)),
            },
            {
              id: "5",
              caller: "skybarley",
              caller_nickname: "하늘보리",
              receiver: [
                "seastar",
                "sujpark",
                "bleedingheart",
                "notyourfriend",
              ],
              text: "일기를 쓰는 친구들이 많지 않아서 슬프다. 오늘의 일기를 쓰고 서로에게 공유했으면 좋겠다.",
              transmissionTime: new Date(hourBefore(2)),
            },
            {
              id: "6",
              caller: "bleedingheart",
              caller_nickname: "금낭화",
              receiver: ["seastar", "skybarley", "sujpark", "notyourfriend"],
              text: "당분간 잠수탑니다.\n 인생이 많이 고되고 힘드네요. 잠시 쉬었다 올테니 너무 걱정하지는 마세요",
              transmissionTime: new Date(hourBefore(12)),
            },
          ],
        })
      );
    }
  ),

  rest.get(
    "http://localhost:3000/api/me/diaries/send",
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          diaries: [
            {
              id: "1",
              caller: "sujpark",
              caller_nickname: "빛나는감자",
              receiver: [
                "seastar",
                "skybarley",
                "bleedingheart",
                "notyourfriend",
              ],
              text: "엄마가 섬그늘에 굴 따러 가면 \n아기가 혼자 남아 집을 보다가 \n바다가 불러주는 자장 노래에 \n팔베고 스르르르 잠이 듭니다 \n\n아기는 잠을 곤히 자고 있지만 \n갈매기 울음소리 맘이 설레여 \n다 못찬 굴바구니 머리에 이고 \n엄마는 모랫길을 달려-옵니다 \n",
              transmissionTime: new Date(hourBefore(0)),
            },
            {
              id: "2",
              caller: "sujpark",
              caller_nickname: "빛나는감자",
              receiver: [
                "seastar",
                "skybarley",
                "bleedingheart",
                "notyourfriend",
              ],
              text: "그제도 코딩, 어제도 코딩, 오늘도 코딩, 내일도 코딩, 내년도 코딩... 평생 코딩...",
              transmissionTime: new Date(hourBefore(24)),
            },
            {
              id: "3",
              caller: "sujpark",
              caller_nickname: "빛나는감자",
              receiver: [
                "seastar",
                "skybarley",
                "bleedingheart",
                "notyourfriend",
              ],
              text: "어머니는 짜장면이 싫다고 하셨어",
              transmissionTime: new Date(hourBefore(48)),
            },
          ],
        })
      );
    }
  ),

  rest.get("/api/signin", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "hi" }));
  }),
];

function getDateAfter12Hour(date) {
  return date.setHours(date.getHours() + 12);
}

function hourBefore(hour = 0) {
  const date = new Date();
  return date.setHours(date.getHours() - hour);
}
