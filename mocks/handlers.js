import { rest } from "msw";

export const __MOCK_JWT_KEY = "JavaScriptIsAwesome!";

let user = { name: "박수정", nickname: "sujpark", level: 2, point: 30 };

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

  rest.get("/api/signin", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "hi" }));
  })
];
