import { usePersistedState } from "./Utils/usePersistedState";

import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import { Header } from "./components/Header";
import Global from "./styles/global";

export default function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  function toogleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Global />
        <Header toogleTheme={toogleTheme} />
      </div>
    </ThemeProvider>
  );
}
