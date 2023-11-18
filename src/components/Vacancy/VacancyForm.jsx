import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function VacancyForm() {
  // const [family, setFamily] = useState("");

  // const [languages, setLanguages] = useState({
  //   english: true,
  //   uzbek: false,
  //   russian: false,
  // });

  // const [busy, setBusy] = useState("");

  // const handleCheckboxChange = (event) => {
  //   setLanguages({ ...languages, [event.target.name]: event.target.checked });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const selectedLanguages = Object.keys(languages).filter(
  //     (lang) => languages[lang]
  //   );

  //   const selectedLanguagesString = selectedLanguages.join(", ");

  //   const {
  //     name,
  //     age,
  //     address,
  //     reference,
  //     baby,
  //     live,
  //     work,
  //     health,
  //     hobby,
  //     salary,
  //     phone,
  //   } = e.target.elements;
  //   const token = "6889465570:AAHaWvdhdb7Y0LT9fK3jd-YbQ9mzj6Ormuc";
  //   const chat_id =  "-4063476415";
  //   let text = "";

  //   text =
  //     text +
  //     ` %0A Анкета для нового сотрудника: %0A Имя клиента: ${name.value} %0A Возраст клиента: ${age.value} %0A Адрес клиента: ${address.value} %0A Информация: ${reference.value} %0A Количество детей: ${baby.value} %0A С кем ты живешь?: ${live.value} %0A Работал: ${work.value}  %0A Здоровье: ${health.value} %0A Интерес: ${hobby.value} %0A Зарплата: ${salary.value}  %0A Номер телефона: ${phone.value}  %0A Семейное положение: ${family} %0A Какие языки ты знаешь?: ${selectedLanguagesString} %0A Чем ты сейчас занят?: ${busy} ;`;

  //   const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

  //   let api = new XMLHttpRequest();
  //   api.open("GET", url, true);
  //   api.send();

  //   name.value = "";
  //   age.value = "";
  //   address.value = "";
  //   reference.value = "";
  //   baby.value = "";
  //   live.value = "";
  //   work.value = "";
  //   health.value = "";
  //   hobby.value = "";
  //   salary.value = "";
  //   phone.value = "";
  // };


  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Box>
      <Typography
        sx={{ fontSize: "34px", textAlign: "center", fontWeight: "500" }}
      >
        ЯНГИ ХОДИМ УЧУН АНКЕТА-СЎРОВНОМА
      </Typography>
      <Grid container justifyContent={"center"} p={3}>
        <Grid item lg={8} md={8}>
          <Box component={"form"} onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              name="name"
              id="filled-basic"
              label=" Исм фамилиянгиз"
              variant="filled"
              sx={{ mt: 2 }}
            />
            <TextField
              required
              fullWidth
              name="age"
              id="filled-basic"
              label="Ёшингиз"
              variant="filled"
              sx={{ mt: 2 }}
              type="number"
            />
            <TextField
              required
              fullWidth
              name="address"
              id="filled-basic"
              label="Доимий яшаш манзилингиз"
              variant="filled"
              sx={{ mt: 2 }}
            />
            <TextField
              required
              fullWidth
              name="reference"
              id="filled-basic"
              label="Маълумотингиз"
              variant="filled"
              sx={{ mt: 2 }}
            />
            <TextField
              required
              fullWidth
              name="baby"
              id="filled-basic"
              label="Фарзандларингиз сони"
              variant="filled"
              sx={{ mt: 2 }}
              type="number"
            />
            <TextField
              required
              fullWidth
              name="live"
              id="filled-basic"
              label="Ким билан яшайсиз"
              variant="filled"
              sx={{ mt: 2 }}
            />
            <TextField
              required
              name="work"
              id="filled-basic"
              label="Қаерларда ва қайси лавозимларда ишлагансиз"
              multiline
              rows={4}
              variant="filled"
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              required
              name="work_"
              id="filled-basic"
              label="Ишдан бўшашингиз сабаби"
              multiline
              rows={4}
              variant="filled"
              sx={{ mt: 2 }}
              fullWidth
            />
            <Box>
              <TextField
                required
                name="health"
                id="filled-basic"
                label="Соғлиғингиз"
                multiline
                rows={4}
                variant="filled"
                sx={{ mt: 2 }}
                fullWidth
              />
              <Typography sx={{ color: "gray", fontSize: "14px" }}>
                (Юқумли, оғир касалликлар борми? Ногиронлик гуруҳи? Оғир
                операция бўлганми?)
              </Typography>
            </Box>
            <TextField
              required
              name="health"
              id="filled-basic"
              label="Ўзингизни нимада устун деб биласиз ёки устун томонларингиз"
              multiline
              rows={4}
              variant="filled"
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              required
              name="hobby"
              id="filled-basic"
              label="Қизиқишларингиз нимадан иборат"
              multiline
              rows={4}
              variant="filled"
              sx={{ mt: 2 }}
              fullWidth
            />
            <TextField
              required
              fullWidth
              name="salary"
              id="filled-basic"
              label="Қанча ойлик иш ҳақи кутаяпсиз"
              variant="filled"
              sx={{ mt: 2 }}
              type="number"
            />
            <TextField
              required
              fullWidth
              name="phobe_number"
              id="filled-basic"
              label="Телефон рақамингиз"
              variant="filled"
              sx={{ mt: 2 }}
              type="number"
            />
            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                Оилавий аҳволингиз?
              </Typography>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Oilaliman"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Uylanmaganman"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Ajrashganman"
                />
              </RadioGroup>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                Қайси тилларни биласиз ва қайдаражада?
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Инглиз"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Узбек"
                />
                <FormControlLabel control={<Checkbox />} label="Рус" />
              </FormGroup>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                Ҳозирда нима билан бандсиз?
              </Typography>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Талабаман"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Вактинча ишсиз"
                />
                <FormControlLabel
                  value="Ишлайман бушамокчиман"
                  control={<Radio />}
                  label="Ишлайман бушамокчиман"
                />
              </RadioGroup>
            </Box>
            <Button fullWidth variant="contained" sx={{ mt: 2 }} type="submit">
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
