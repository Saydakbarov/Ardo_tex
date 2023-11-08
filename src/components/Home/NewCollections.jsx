import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { NewCollectionData } from "../../data";
import { useSubCategories } from "../../query-data/data.service";
import { Link, useNavigate } from "react-router-dom";

export default function NewCollections() {

  const {data, isLoading, refetch} = useSubCategories("4")
  console.log(data, "da");
  
  const navigate = useNavigate()

  return (
    <Box sx={{ maxWidth: "1500px", margin: "0 auto", mt: 8 }}>
      <Typography
        sx={{ fontSize: "34px", fontWeight: "bold", textAlign: "center" }}
      >
        New Collections
      </Typography>

      <Grid container justifyContent={"center"} gap={4} mt={5}>
        {data?.data?.map((v, i) => (
          <Grid item lg={2.5} md={2.5} sm={5.3} xs={10} key={v.id}>
            <img
              style={{ width: "100%", borderRadius: "6px" }} src={v?.sub_link} />
            <Typography
              sx={{
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              <Link style={{textDecoration: "none", color: "inherit"}} to={`/product?category=${4}&subcategory=${v?.sub_category_id}`} >
              {v.sub_category_name_uz}
              </Link>
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "end" }}>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/product?category=4")
          } }
          sx={{
            background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
            p: 1,
            borderRadius: "30px",
            width: "150px",
            mt: 4,
            transition: " 0.5s linear",
            mr: 8,
            color: "white",

            "&:hover": {
              transition: " 0.5s linear",
              width: "180px",
              background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
            },
          }}
        >
          See all
        </Button>
      </Box>
    </Box>
  );
}
