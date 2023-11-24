import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name  && formData.phone) {
      // Ma'lumotlarni yuborishni bajarish
       
    const token = "6889465570:AAHaWvdhdb7Y0LT9fK3jd-YbQ9mzj6Ormuc";
    const chat_id =  "-4063476415";
    let text = ` %0A *Заявка* %0A *Имя:* ${formData.name} %0A *Телефон:* ${formData.phone} %0A *Сообшение:* ${formData.message}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=MarkdownV2`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    alert("Заявка принята")
    setFormData({
      name: "",
      phone: "",
      message: "",
    })

    } else {
      alert("Заполните все поля");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const {t} = useTranslation()

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label={t("name")}
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mt: 2 }}
        />
        <TextField
          label={t("phone")}
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mt: 2 }}
          type="number"
        />
        <TextField
          label={t("message")}
          type="text"
          name="message"
          multiline
          rows={3}
          value={formData.message}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mt: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
            p: 1,
            borderRadius: "30px",
            width: "250px",
            mt: 2,
            transition: " 0.5s linear",
            color: "white",

            "&:hover": {
              transition: " 0.5s linear",
              width: "180px",
              background: "linear-gradient(270deg, #307bc4 0%, #274760 100%)",
            },
          }}
          fullWidth
        >
          {t("send")}
        </Button>
      </form>
    </Box>
  );
}
