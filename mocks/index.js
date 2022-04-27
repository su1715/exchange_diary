if (typeof window === "undefined") {
  const { server } = require("./node");
  server.listen();
} else {
  const { worker } = require("./browser");
  worker.start();
}
