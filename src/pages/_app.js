import { ThemeProvider } from "styled-components";
import GlobalStyled from "@/components/GlobalStyled";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const theme = {
  colors: {
    light: "#FFFFFF",
    primary: {
      300: "#FFCC21",
      400: "#FF963C",
      500: "#EA6C00",
    },
    secondary: "#8FE9D0",
    dark: {
      500: "#414141",
      600: "#2E2E2E",
    },
    gray: "#777777",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <div className="wrap-page">
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
