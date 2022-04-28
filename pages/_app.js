import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks");
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </RecoilRoot>
  );
}

export default MyApp;
