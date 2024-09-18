import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <div
      style={{
        position: "fixed",
        height: "64px",
        width: "100%",
        backgroundColor: "#ffe600",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
        boxSizing: "border-box",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          flex: "0 0 auto",
          marginRight: "20px",
        }}
      >
        <Sidebar />
      </Box>
    </div>
  );
}
