import {
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MenuData } from "../../data";
import DrawerComp from "./DrawerComp";
import { Facebook, Instagram, Telegram, YouTube } from "@mui/icons-material";

import Logo from "../../logo.png";
import { useTranslation } from "react-i18next";
import SearchComponent from "./SearchComponent";
import { languages } from "../../utils/consts";
import { useEffect } from "react";

export default function HeaderMenu() {
  const navigate = useNavigate();

  //   Responsive Menu
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState(languages[1])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if(localStorage.getItem("lang")) {
      i18n.changeLanguage(localStorage.getItem("lang"))
      setLang(languages?.find(item => item?.name == localStorage.getItem("lang")))
    }
  },[])

  useEffect(() => {
window?.scrollTo({
  top: 0,
  behavior: "smooth",
})
  }, [])


  return (
   <div className="w-full fixed top-0 left-0 z-[10] bg-white shadow-md">
     <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1300px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          p: {
            xs: "20px 8px",
            sm: "20px 10px",
            md: "20px 30px",
            lg: "20px 30px",
          },
        }}
      >
        <Toolbar
          sx={{
            borderBottom: "1px solid white",
            padding: "0px !important",
            zIndex: "100",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isMatch ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <img
                  style={{
                    width: "150px",
                    cursor: "pointer",
                  }}
                  src={Logo}
                  onClick={() => navigate("/")}
                  alt=""
                />
                <div
                  className=""
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <SearchComponent />
                  <Box>
                    <div className="relative">
                    <IconButton
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                      sx={{ color: "gray" }}
                      onClick={() => {
                        // if (i18n?.language == "uz") {
                        //   i18n.changeLanguage("ru");
                        //   localStorage.setItem("lang", "ru");
                        // } else {
                        //   i18n.changeLanguage("uz");
                        //   localStorage.setItem("lang", "uz");
                        // }

                        setOpen(e => !e)
                      }}
                    >
                      <span
                        style={{ fontSize: "16px", textTransform: "uppercase" }}
                      >
                        {
                          lang?.name
                        }
                      </span>
                      <img
                        src={
                          lang?.image
                        }
                        style={{
                          width: "30px",
                          height: "30px",
                          objectFit: "contain",
                        }}
                        alt=""
                        className=""
                      />
                    </IconButton>
                    <div className={` ${open ? "block" : "hidden"} shadow-md absolute flex flex-col pt-2 top-full left-0 w-full bg-white z-10 rounded-md`}>
                      {
                        languages?.map(item => {
                          if(item.id != lang?.id){
                            return (
                              <IconButton
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "5px"
                              }}
                              sx={{ color: "gray" }}
                              onClick={() => {
                                // if (i18n?.language == "uz") {
                                //   i18n.changeLanguage("ru");
                                //   localStorage.setItem("lang", "ru");
                                // } else {
                                //   i18n.changeLanguage("uz");
                                //   localStorage.setItem("lang", "uz");
                                // }
        
                                setOpen(false)
                                setLang(item)
                                localStorage.setItem("lang", item.name)
                                i18n?.changeLanguage(item.name)
                              }}
                            >
                              <span
                                style={{ fontSize: "16px", textTransform: "uppercase" }}
                              >
                                {
                                  item?.name
                                }
                              </span>
                              <img
                                src={
                                  item?.image
                                }
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  objectFit: "contain",
                                }}
                                alt=""
                                className=""
                              />
                            </IconButton>
                            )
                          }
                        })
                      }
                    </div>
                    </div>
                  </Box>

                  <DrawerComp />
                </div>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                    },
                  }}
                >
                  <img
                    style={{
                      width: "100px",
                      cursor: "pointer",
                    }}
                    src={Logo}
                    onClick={() => navigate("/")}
                    alt=""
                  />
                </Box>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {MenuData.map((item, i) => (
                    <Button
                      key={i}
                      sx={{
                        color: "black",
                        fontWeight: "500",
                        ml: 2,
                      }}
                      onClick={() => navigate(item.path)}
                    >
                      {t(item.title)}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SearchComponent />
                  {/* <IconButton
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                    sx={{ color: "gray" }}
                    onClick={() => {
                      if (i18n?.language == "uz") {
                        i18n.changeLanguage("ru");
                        localStorage.setItem("lang", "ru");
                      } else {
                        i18n.changeLanguage("uz");
                        localStorage.setItem("lang", "uz");
                      }
                    }}
                  >
                    <span
                      style={{ fontSize: "16px", textTransform: "uppercase" }}
                    >
                      {i18n?.language == "uz"
                        ? languages[1]?.lang
                        : languages[0]?.lang}
                    </span>
                    <img
                      src={
                        i18n?.language == "uz"
                          ? languages[1]?.image
                          : languages[0]?.image
                      }
                      style={{
                        width: "30px",
                        height: "30px",
                        objectFit: "contain",
                      }}
                      alt=""
                      className=""
                    />
                  </IconButton> */}

<div className="relative">
                    <IconButton
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                      sx={{ color: "gray" }}
                      onClick={() => {
                        // if (i18n?.language == "uz") {
                        //   i18n.changeLanguage("ru");
                        //   localStorage.setItem("lang", "ru");
                        // } else {
                        //   i18n.changeLanguage("uz");
                        //   localStorage.setItem("lang", "uz");
                        // }

                        setOpen(e => !e)
                      }}
                    >
                      <span
                        style={{ fontSize: "16px", textTransform: "uppercase" }}
                      >
                        {
                          lang?.name
                        }
                      </span>
                      <img
                        src={
                          lang?.image
                        }
                        style={{
                          width: "30px",
                          height: "30px",
                          objectFit: "contain",
                        }}
                        alt=""
                        className=""
                      />
                    </IconButton>
                    <div className={` ${open ? "block" : "hidden"} shadow-md absolute flex flex-col pt-2 top-full left-0 w-full bg-white z-10 rounded-md`}>
                      {
                        languages?.map(item => {
                          if(item.id != lang?.id){
                            return (
                              <IconButton
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "5px"
                              }}
                              sx={{ color: "gray" }}
                              onClick={() => {
                                // if (i18n?.language == "uz") {
                                //   i18n.changeLanguage("ru");
                                //   localStorage.setItem("lang", "ru");
                                // } else {
                                //   i18n.changeLanguage("uz");
                                //   localStorage.setItem("lang", "uz");
                                // }
        
                                setOpen(false)
                                setLang(item)
                                localStorage.setItem("lang", item.name)
                                i18n?.changeLanguage(item.name)
                              }}
                            >
                              <span
                                style={{ fontSize: "16px", textTransform: "uppercase" }}
                              >
                                {
                                  item?.name
                                }
                              </span>
                              <img
                                src={
                                  item?.image
                                }
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  objectFit: "contain",
                                }}
                                alt=""
                                className=""
                              />
                            </IconButton>
                            )
                          }
                        })
                      }
                    </div>
                    </div>
                </Box>

                <Box sx={{ color: "gray" }}>
                  <IconButton sx={{ color: "gray" }}>
                    <Link
                      target="blank"
                      to="https://m.facebook.com/ardotex.uz"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      <Facebook />
                    </Link>
                  </IconButton>
                  <IconButton sx={{ color: "gray" }}>
                    <Link
                      to="https://www.instagram.com/ardotex/"
                      style={{ textDecoration: "none", color: "gray" }}
                      target="blank"
                    >
                      <Instagram />
                    </Link>
                  </IconButton>
                  <IconButton sx={{ color: "gray" }}>
                    <Link
                      to="https://www.youtube.com/@ardotex"
                      target="blank"
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      <YouTube />
                    </Link>
                  </IconButton>
                </Box>
              </Box>
            </>
          )}
        </Toolbar>
      </Box>
    </Box>
   </div>
  );
}
