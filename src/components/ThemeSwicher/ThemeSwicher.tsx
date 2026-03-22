import { Switch } from "@chakra-ui/react";
import { useState } from "react";

export const ThemeSwitcher = () => {
  const [checked, setChecked] = useState(false);

  const onCheckerChange = () => {
    setChecked(!checked)
    
  }
  

  return (
    <Switch.Root
      colorPalette={"blue"}
      onCheckedChange={onCheckerChange}
      checked={checked}
    >
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>Dark mode</Switch.Label>
    </Switch.Root>
  );
};
