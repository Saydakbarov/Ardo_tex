import { Box, Typography } from "@mui/material";
import React from "react";
import { CategoryData } from "../../data";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ id, status }) {
  const [subcategory, setSubcategory] = useState([]);

  const navigate = useNavigate();

  console.log(id);

  useEffect(() => {
    CategoryData.filter((e) =>
      e.id == id
        ? setSubcategory((prevData) => [...prevData, e.subCategory])
        : []
    );
  }, [id]);

  console.log(subcategory);

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
      {subcategory.map((v) =>
        v.map((v, i) => (
          <Box
            key={v.id}
            sx={{
              width: "300px",
              cursor: "pointer",
              border: "2px solid gray",
              borderRadius: "6px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            component={"div"}
            onClick={() => navigate("/single/" + v.id)}
          >
            <img
              style={{
                width: "100%",
                height: "300px",
              }}
              src={v.img}
              alt=""
            />
            <Typography sx={{ p: 1 }}>{v.title}</Typography>
          </Box>
        ))
      )}
    </Box>
  );
}
