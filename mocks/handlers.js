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
  rest.post("http://localhost:3000/api/signin", async (req, res, ctx) => {
    try {
      const { id, password } = req.body;
      if (!id || !password) {
        throw new UnauthorizedError();
      }

      const token = jwt.sign({ id: id }, __MOCK_JWT_KEY);
      return res(ctx.status(200), ctx.json({ token }));
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        return res(ctx.status(401), ctx.json({ message: error.message }));
      }
      return res(
        ctx.status(504),
        ctx.json({ message: "Something went wrong.." })
      );
    }
  }),

  rest.get("http://localhost:3000/api/me", async (req, res, ctx) => {
    try {
      // const authHeader = req.headers.get("Authorization");
      // if (!authHeader || !authHeader.startsWith("Bearer "))
      //   throw new UnauthorizedError();
      // const token = authHeader.substring(7, authHeader.length);
      // jwt.verify(token, __MOCK_JWT_KEY);

      return res(ctx.status(200), ctx.json(user));
    } catch (error) {
      if (
        error instanceof UnauthorizedError ||
        error instanceof JsonWebTokenError
      ) {
        return res(ctx.status(401), ctx.json({ message: "Unauthorized" }));
      }
      return res(
        ctx.status(504),
        ctx.json({ message: "Something went wrong.." })
      );
    }
  }),

  rest.get("http://localhost:3000/api/me/friends", async (req, res, ctx) => {
    try {
      return res(
        ctx.status(200),
        ctx.json({
          friends: [
            {
              id: "seastar",
              nickname: "바다별",
              time: getDateAfter12Hour(new Date(2022, 3, 28, 13, 0, 0))
            },
            {
              id: "skybarley",
              nickname: "하늘보리",
              time: getDateAfter12Hour(new Date(2022, 3, 28, 17, 0, 0))
            },
            {
              id: "bleedingheart",
              nickname: "금낭화",
              time: getDateAfter12Hour(new Date(2022, 3, 28, 9, 0, 0))
            }
          ]
        })
      );
    } catch (error) {
      if (
        error instanceof UnauthorizedError ||
        error instanceof JsonWebTokenError
      ) {
        return res(ctx.status(401), ctx.json({ message: "Unauthorized" }));
      }
      return res(
        ctx.status(504),
        ctx.json({ message: "Something went wrong.." })
      );
    }
  }),
  rest.get(
    "http://localhost:3000/api/me/letter/recieve",
    async (req, res, ctx) => {
      try {
        return res(
          ctx.status(200),
          ctx.json({
            letters: [
              {
                id: "1",
                caller: "seastar",
                reciever: "sujpark",
                text: "오늘도 화이팅!!!"
              },
              {
                id: "2",
                caller: "skybarley",
                reciever: "sujpark",
                text: "여러분 잘 지내나요? 편지 좀 보내주세요"
              },
              {
                caller: "bleedingheart",
                reciever: "sujpark",
                text: "당분간 잠수탑니다. 연락하지마세요~"
              }
            ]
          })
        );
      } catch (error) {
        if (
          error instanceof UnauthorizedError ||
          error instanceof JsonWebTokenError
        ) {
          return res(ctx.status(401), ctx.json({ message: "Unauthorized" }));
        }
        return res(
          ctx.status(504),
          ctx.json({ message: "Something went wrong.." })
        );
      }
    }
  ),

  rest.get(
    "http://localhost:3000/api/me/letter/send",
    async (req, res, ctx) => {
      try {
        return res(
          ctx.status(200),
          ctx.json({
            letters: [
              {
                id: "4",
                caller: "sujpark",
                reciever: "seastar",
                text: "그래요 화이팅!!!"
              },
              {
                id: "5",
                caller: "sujpark",
                reciever: "skybarley",
                text: "옛다 편지~"
              },
              {
                id: "6",
                caller: "sujpark",
                reciever: "bleedingheart",
                text: "친삭하겠습니다^^"
              }
            ]
          })
        );
      } catch (error) {
        if (
          error instanceof UnauthorizedError ||
          error instanceof JsonWebTokenError
        ) {
          return res(ctx.status(401), ctx.json({ message: "Unauthorized" }));
        }
        return res(
          ctx.status(504),
          ctx.json({ message: "Something went wrong.." })
        );
      }
    }
  ),

  rest.get("/api/signin", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "hi" }));
  })
];

function getDateAfter12Hour(date) {
  return date.setHours(date.getHours() + 12);
}
