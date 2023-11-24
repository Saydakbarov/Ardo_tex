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
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { colorsData, technologiesData } from "../../data";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "90%", md: "95%" },
  boxShadow: 24,
  p: 4,
  backgroundColor: "white",
  overflowX: "scroll",
  height: "70vh",
  borderRadius: "10px",
};

export default function SearchComponent() {
  const [technology, setTechnology] = useState([]);

  const [color, setColor] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t, i18n } = useTranslation();

  const handleCheckboxChange = (state, setState, id) => {
    if (state?.includes(id)) {
      setState(state?.filter((item) => item != id));
    } else {
      setState([...state, id]);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <Search sx={{ color: "black" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign: "end" }}>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
          <Grid container justifyContent={"center"} gap={10} mt={8}>
            <Grid item lg={3} md={3} sm={3} xs={10}>
              <Box sx={{ mt: 3 }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontFamily: "Gilroy",
                  }}
                >
                  {t("Технология")}
                </Typography>

                <div className="">
                  <FormGroup>
                    {technologiesData?.map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            style={{ fontFamily: "Gilroy" }}
                            value={item.id}
                            checked={technology?.includes(item.id)}
                            onChange={() =>
                              handleCheckboxChange(
                                technology,
                                setTechnology,
                                item?.id
                              )
                            }
                          />
                        }
                        label={
                          <Typography
                            style={{ fontWeight: 300, fontFamily: "Gilroy" }}
                          >
                            {item.name}
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
                    {t("Технология")}
                  </Typography>

                  <div className="">
                    <FormGroup>
                      {technologiesData?.map((item) => (
                        <FormControlLabel
                          control={
                            <Checkbox
                              style={{ fontFamily: "Gilroy" }}
                              value={item.id}
                              checked={technology?.includes(item.id)}
                              onChange={() =>
                                handleCheckboxChange(
                                  technology,
                                  setTechnology,
                                  item?.id
                                )
                              }
                            />
                          }
                          label={
                            <Typography
                              style={{ fontWeight: 300, fontFamily: "Gilroy" }}
                            >
                              {item.name}
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
          ;
        </Box>
      </Modal>
    </div>
  );
}
