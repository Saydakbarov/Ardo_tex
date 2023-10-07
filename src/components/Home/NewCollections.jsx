import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { NewCollectionData } from "../../data";

export default function NewCollections() {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography
        sx={{ fontSize: "34px", fontWeight: "bold", textAlign: "center" }}
      >
        New Collections
      </Typography>

      <Grid container justifyContent={"center"} gap={4} mt={5}>
        {NewCollectionData.map((v, i) => (
          <Grid item lg={2.5} md={2.5} sm={5.3} xs={10} key={v.id}>
            <video
              style={{ width: "100%", borderRadius: "6px" }}
              autoPlay
              muted
              loop
            >
              <source src={v.video} type="video/mp4" />
            </video>
            <Typography
              sx={{
                fontSize: "30px",
                textAlign: "center",
                fontFamily: "Inter",
              }}
            >
              {v.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "end" }}>
        <Button
          variant="outlined"
          sx={{ mt: 4, mr: 12, color: "black", border: "1px solid black" }}
        >
          See all
        </Button>
      </Box>
    </Box>
  );
}
