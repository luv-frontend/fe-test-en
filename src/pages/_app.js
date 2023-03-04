import { ThemeProvider } from "styled-components";
import GlobalStyled from "@/components/GlobalStyled";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
