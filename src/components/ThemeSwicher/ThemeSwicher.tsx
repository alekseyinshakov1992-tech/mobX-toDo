import { Switch } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export const ThemeSwitcher = () => {
  const context = useContext(ThemeContext);

  const onCheckerChange = () => {
    console.log(666);

    context?.toggleTheme();
  };

  return (
    <div>
      <span> </span>
      <Switch.Root
        colorPalette={"blue"}
        onCheckedChange={onCheckerChange}
        checked={context?.theme === "dark"}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>🌙</Switch.Label>
      </Switch.Root>
      
    </div>
  );
};
