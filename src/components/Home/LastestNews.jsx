import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LastestNewsCard from "./LastestNewsCard";

export default function LastestNews() {
  return (
    <Box
      sx={{
        maxWidth: "1500px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          backgroundImage:
            "url('https://wpbingosite.com/wordpress/furety/wp-content/uploads/2023/05/back.jpg')",
          minHeight: "400px",
          backgroundPosition: "100%",
          mt: 10,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: "250px", sm: "300px", md: "350px", lg: "400px" },
            top: "30%",
            left: "5%",
          }}
        >
          <Typography sx={{ fontSize: "34px" }}>
            Pebble Ottoman
          </Typography>
          <Typography
            sx={{ fontSize: "16px",  mt: 2, color: "gray" }}
          >
            Kiln-dried engineered wood frame with reinforced joinery. webbed
            seat support
          </Typography>
          <Button sx={{ mt: 3 }} variant="outlined">
            Shop Now
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 10 }}>
        <Typography
          sx={{ fontSize: "34px", textAlign: "center", fontWeight: "600" }}
        >
          Lastest News
        </Typography>
        <LastestNewsCard />
      </Box>
    </Box>
  );
}
