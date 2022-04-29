import { rest } from "msw";

export const __MOCK_JWT_KEY = "JavaScriptIsAwesome!";

let user = {
  id: "sujpark",
  name: "박수정",
  nickname: "빛나는감자",
  level: 2,
  point: 30
};

export const handlers = [
  rest.get("http://localhost:3000/api/me", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(user));
  }),

  rest.get("http://localhost:3000/api/me/friends", async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        friends: [
          {
            id: "seastar",
            nickname: "바다별"
          },
          {
            id: "skybarley",
            nickname: "하늘보리"
          },
          {
            id: "bleedingheart",
            nickname: "금낭화"
          },
          {
            id: "notyourfriend",
            nickname: "글쎄요"
          }
        ]
      })
    );
  }),

  rest.get(
    "http://localhost:3000/api/me/letters/receive",
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          letters: [
            {
              id: "4",
              caller: "seastar",
              caller_nickname: "하늘별",
              receiver: "sujpark",
              text: "오늘도 화이팅!!!",
              transmissionTime: new Date(hourBefore(25))
            },
            {
              id: "5",
              caller: "skybarley",
              caller_nickname: "하늘보리",
              receiver: "sujpark",
              text: "잘 지내나요? 편지 좀 보내주세요",
              transmissionTime: new Date(hourBefore(2))
            },
            {
              id: "6",
              caller: "bleedingheart",
              caller_nickname: "금낭화",
              receiver: "sujpark",
              text: "당분간 잠수탑니다. 연락하지마세요~",
              transmissionTime: new Date(hourBefore(12))
            },
            {
              id: "7",
              caller: "bleedingheart",
              caller_nickname: "금낭화",
              receiver: "sujpark",
              text: "절교해요~",
              transmissionTime: new Date(hourBefore(9))
            }
          ]
        })
      );
    }
  ),

  rest.get(
    "http://localhost:3000/api/me/letters/send",
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          letters: [
            {
              id: "1",
              caller: "sujpark",
              caller_nickname: "빛나는감자",
              receiver: "seastar",
              text: "그래요 화이팅!!!",
              transmissionTime: new Date(hourBefore(13))
            },
            {
              id: "2",
              caller: "sujpark",
              caller_nickname: "빛나는감자",
              receiver: "skybarley",
              text: "옛다 편지~",
              transmissionTime: new Date(hourBefore(14))
            },
            {
              id: "3",
              caller: "sujpark",
              caller_nickname: "빛나는감자",
              receiver: "bleedingheart",
              text: "친삭하겠습니다^^",
              transmissionTime: new Date(hourBefore(12))
            }
          ]
        })
      );
    }
  ),

  rest.get("/api/signin", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "hi" }));
  })
];

function getDateAfter12Hour(date) {
  return date.setHours(date.getHours() + 12);
}

function hourBefore(hour = 0) {
  const date = new Date();
  return date.setHours(date.getHours() - hour);
}
