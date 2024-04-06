import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Close, Search } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { colorsData, technologiesData } from "../../data";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { handleCheckboxChange } from "../../utils/functions";
import {
  useCategories,
  useTechnology,
  useTypes,
} from "../../query-data/data.service";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "90%", md: "95%" },
  boxShadow: 24,
  p: 4,
  backgroundColor: "white",
  overflowY: "scroll",
  borderRadius: "10px",
};

export default function SearchComponent() {
  const { data: technologies } = useTechnology();
  const { data: types } = useTypes();
  const { data: categories } = useCategories();

  const [technology, setTechnology] = useState([]);
  const [type, setType] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");


  const [color, setColor] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTechnology([]);
    setType([]);
    setCategory("");
    setColor(null);
  };

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <Search sx={{ color: "black" }} />
      </IconButton>
      <div
        className={
          open
            ? "fixed top-0 left-0 overflow-x-auto w-screen h-screen  md:py-20 flex md:items-center justify-center   bg-[#0000008a] z-50"
            : "hidden"
        }
        onClick={handleClose}
      >
        <div
          className={"bg-white  py-[50px] h-fit p-10 "}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="text-end">
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </div>
          <div className="w-full sm:w-2/3 sm:ml-auto">
            <TextField value={search} onChange={(e) => setSearch(e.target.value)} fullWidth label={t("search")} variant="standard" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-[24px] gap-4 ">
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontFamily: "Gilroy",
                  mb: 1,
                }}
              >
                {t("categories")}
              </Typography>

              <div className="">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  >
                    <FormControlLabel
                      value={""}
                      control={<Radio style={{ color: "#000" }} />}
                      label={t("all")}
                    />
                    {categories?.data?.map((item) => (
                      <FormControlLabel
                        key={item?.category_id}
                        value={item?.category_id}
                        control={<Radio style={{ color: "#000" }} />}
                        label={item[`category_name_${i18n.language ?? "uz"}`]}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontFamily: "Gilroy",
                }}
              >
                {t("type")}
              </Typography>

              <div className="">
                <FormGroup>
                  {types?.data?.map((item) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{ fontFamily: "Gilroy", color: "#000" }}
                          value={item.type_id}
                          checked={type?.includes(item.type_id)}
                          onChange={() =>
                            handleCheckboxChange(type, setType, item?.type_id)
                          }
                        />
                      }
                      label={
                        <Typography
                          style={{ fontWeight: 300, fontFamily: "Gilroy" }}
                        >
                          {item[`type_name_${i18n?.language ?? "uz"}`]}
                        </Typography>
                      }
                    />
                  ))}
                </FormGroup>
              </div>
            </Box>
            <Stack spacing={3}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontFamily: "Gilroy",
                  }}
                >
                  {t("technology")}
                </Typography>

                <div className="">
                  <FormGroup>
                    {technologies?.data?.map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            style={{ fontFamily: "Gilroy", color: "#000" }}
                            value={item.technology_id}
                            checked={technology?.includes(item.technology_id)}
                            onChange={() =>
                              handleCheckboxChange(
                                technology,
                                setTechnology,
                                item?.technology_id
                              )
                            }
                          />
                        }
                        label={
                          <Typography
                            style={{ fontWeight: 300, fontFamily: "Gilroy" }}
                          >
                            {item[`technology_name_${i18n?.language ?? "uz"}`]}
                          </Typography>
                        }
                      />
                    ))}
                  </FormGroup>
                </div>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontFamily: "Gilroy",
                  }}
                >
                  {t("colors")}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    mt: 1,
                  }}
                >
                  {colorsData?.map((item) => (
                    <button
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "4px",
                        overflow: "hidden",
                        margin: "0px",
                        padding: 0,
                        border: color == item?.id ? "2.5px solid black" : 0,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        if (item?.id == color) {
                          setColor(null);
                        } else {
                          setColor(item?.id);
                        }
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item?.name}
                        className=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </button>
                  ))}
                </Box>
              </Box>
            </Stack>
          </div>
          <div className="text-center pb-6">
            <Button
              sx={{
                background: "black",
                color: "white",
                width: "280px",
                transition: "all 0.4s linear",

                "&:hover": {
                  transition: "all 0.4s linear",
                  background: "black",
                  color: "white",
                  width: "320px",
                },
                mt: 5,
              }}
              onClick={() => {
                const url = `/product?${
                  category ? "category=" + category : ""
                }${technology?.length ? "&tech=" + technology?.join(",") : ""}${
                  type?.length ? "&type=" + type?.join(",") : ""
                }${color ? "&color=" + color : ""}${search ? "&q=" + search : ""}`;
                navigate(url);
                handleClose();
              }}
            >
              {t("search")}
            </Button>
          </div>
        </div>
      </div>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign: "end" }}>
           
          </Box>
          <Grid container justifyContent={"center"} gap={10}>
            <Grid item lg={3} md={3} sm={3} xs={10} sx={{ mt: 6 }}>
              <Box sx={{ mt: 3 }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontFamily: "Gilroy",
                  }}
                >
                  {t("technology")}
                </Typography>

                <div className="">
                  <FormGroup>
                    {technologies?.data?.map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            style={{ fontFamily: "Gilroy" }}
                            value={item.technology_id}
                            checked={technology?.includes(item.technology_id)}
                            onChange={() =>
                              handleCheckboxChange(
                                technology,
                                setTechnology,
                                item?.technology_id
                              )
                            }
                          />
                        }
                        label={
                          <Typography
                            style={{ fontWeight: 300, fontFamily: "Gilroy" }}
                          >
                            {item[`technology_name_${i18n?.language ?? "uz"}`]}
                          </Typography>
                        }
                      />
                    ))}
                  </FormGroup>
                </div>
              </Box>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={10}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: { xs: "wrap", sm: "wrap", md: "noWrap" },
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ mt: 3 }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontFamily: "Gilroy",
                    }}
                  >
                    {t("type")}
                  </Typography>

                  <div className="">
                    <FormGroup>
                      {types?.data?.map((item) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              style={{ fontFamily: "Gilroy" }}
                              value={item.type_id}
                              checked={type?.includes(item.type_id)}
                              onChange={() =>
                                handleCheckboxChange(
                                  type,
                                  setType,
                                  item?.type_id
                                )
                              }
                            />
                          }
                          label={
                            <Typography
                              style={{ fontWeight: 300, fontFamily: "Gilroy" }}
                            >
                              {item[`type_name_${i18n?.language ?? "uz"}`]}
                            </Typography>
                          }
                        />
                      ))}
                    </FormGroup>
                  </div>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontFamily: "Gilroy",
                    }}
                  >
                    {t("colors")}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                      mt: 1,
                    }}
                  >
                    {colorsData?.map((item) => (
                      <button
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "4px",
                          overflow: "hidden",
                          margin: "0px",
                          padding: 0,
                          border: color == item?.id ? "2.5px solid black" : 0,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          if (item?.id == color) {
                            setColor(null);
                          } else {
                            setColor(item?.id);
                          }
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item?.name}
                          className=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </button>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: "center" }}>
            <Button
              sx={{
                background: "black",
                color: "white",
                width: "280px",
                transition: "all 0.4s linear",

                "&:hover": {
                  transition: "all 0.4s linear",
                  background: "black",
                  color: "white",
                  width: "320px",
                },
                mt: 5,
              
              }}

              onClick={() => {
                const url = (`/product?${technology?.length ? ("tech=" + technology?.join(",")) : ""}${type?.length ? ("&type=" + type?.join(",")) : ""}${color ? ("&color=" + color) : ""}`)
                navigate(url)
              }}

            >
              Search
            </Button>
          </Box>
        </Box>
      </Modal> */}
    </div>
  );
}
