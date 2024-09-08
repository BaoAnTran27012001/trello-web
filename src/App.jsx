import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value={"light"}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LightModeIcon /> Light
            </Box>
          </MenuItem>
          <MenuItem value={"dark"}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ModeNightIcon /> Dark
            </Box>
          </MenuItem>
          <MenuItem value={"system"}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <SettingsSuggestIcon /> System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <Box
        sx={{
          backgroundColor: "primary.light",
          height: (theme) => theme.trello.appBarHeight,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          height: (theme) => theme.trello.boardBarHeight,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Bard
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: (theme) => `calc(100vh - 120px)`,
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Content
      </Box>
    </Container>
  );
}

export default App;
