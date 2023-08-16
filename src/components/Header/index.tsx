import ReactSwitch from "react-switch";
import { Container } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

interface Props {
  toogleTheme(): void
}

export function Header({ toogleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      Hello World!

      <ReactSwitch
        onChange={toogleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  )
}