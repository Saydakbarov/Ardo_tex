import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { CategoryData } from "../../data";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductCategory() {
  const [categoryId, setCategoryId] = useState(1);

  return (
    <Box>
      <Grid container justifyContent={"center"} gap={10}>
        <Grid item lg={2}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {CategoryData.map((v) => (
              <Button
                variant="contained"
                key={v.id}
                sx={{
                  mt: 2,
                }}
                onClick={() => {
                  setCategoryId(v.id);
                }}
              >
                {v.title}
              </Button>
            ))}
          </Box>
        </Grid>

        <Grid item lg={8} mt={2}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Filled"
            variant="filled"
          />
          <ProductCard id={categoryId} />
        </Grid>
      </Grid>
    </Box>
  );
}
