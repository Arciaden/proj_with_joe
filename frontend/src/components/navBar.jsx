import { Box } from "@mui/system";
import Menu from "./menu";

const NavBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#CFECF5",
        width: 1,
        height: 80,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Menu />
    </Box>
  );
};

export default NavBar;
