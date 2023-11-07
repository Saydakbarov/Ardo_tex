import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { CategoryData } from "../../data";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductCategory() {
  const [categoryId, setCategoryId] = useState(1);

  const [value, setValue] = React.useState([20000, 1000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Grid container justifyContent={"center"} gap={10}>
        <Grid
          item
          lg={2.5}
          sx={{ border: "2px solid gray", p: 2, borderRadius: "10px" }}
        >
          <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
            Type
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
            {CategoryData.map((v) => (
              <FormControlLabel
                control={<Checkbox />}
                label={v.title}
                onChange={() => setCategoryId(v.id)}
              />
            ))}
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Technology
            </Typography>
            <Box sx={{}}>
              <FormControlLabel control={<Checkbox />} label="Easy Clean" />
              <FormControlLabel
                control={<Checkbox />}
                label="Water Repellent"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Water Repellent"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Recycled Polyester"
              />
              <FormControlLabel control={<Checkbox />} label="Basic Davis" />
            </Box>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Colors
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 1 }}>
              <p
                style={{
                  width: "25px",
                  height: "25px",
                  background: "red",
                  borderRadius: "2px",
                  margin: "0px",
                }}
              ></p>
              <p
                style={{
                  width: "25px",
                  height: "25px",
                  background: "black",
                  borderRadius: "2px",
                  margin: "0px",
                }}
              ></p>
              <p
                style={{
                  width: "25px",
                  height: "25px",
                  background: "green",
                  borderRadius: "2px",
                  margin: "0px",
                }}
              ></p>
              <p
                style={{
                  width: "25px",
                  height: "25px",
                  background: "yellow",
                  borderRadius: "2px",
                  margin: "0px",
                }}
              ></p>
            </Box>
          </Box>

          {/* <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Filters
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 1 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
            </Box>
          </Box> */}
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
