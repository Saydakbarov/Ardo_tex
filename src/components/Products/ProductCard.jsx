import { Box, Typography } from "@mui/material";
import React from "react";
import { CategoryData } from "../../data";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ id }) {
  const [subcategory, setSubcategory] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    CategoryData.filter((e) =>
      e.id == id ? setSubcategory(e.subCategory) : []
    );
  }, [id]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        mt: 4,
      }}
    >
      {subcategory.map((v) => (
        <Box
          key={v.id}
          sx={{ width: "323px", cursor: "pointer" }}
          component={"div"}
          onClick={() => navigate("/single/" + v.id)}
        >
          <img
            style={{
              width: "100%",
            }}
            src={v.img}
            alt=""
          />
          <Typography>{v.title}</Typography>
        </Box>
      ))}
    </Box>
  );
}
