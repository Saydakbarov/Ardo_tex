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
import { useTranslation } from "react-i18next";


const vacancyLanguages = [
  {
    id:1, 
    name: "Инглиз",
    translationName : "en"
  },
  {
    id:2, 
    name: "Узбек",
    translationName : "uz"
  },
  {
    id:3, 
    name: "Рус",
    translationName : "ru"
  },
]

const familyStateData = [
  {
    id:1, 
    name: "Оилалиман",
    translationName : "married"
  },
  {
    id:2, 
    name: "Уйланмаганман",
    translationName : "unmarried"
  },
  {
    id:3, 
    name: "Ажрашганман",
    translationName : "divorsed"
  },
]

const currentWorkData = [
  {
    id:1, 
    name: "Талабаман",
    translationName : "student"
  },
  {
    id:2, 
    name: "Вактинча ишсиз",
    translationName : "no-work"
  },
  {
    id:3, 
    name: "Ишлайман бушамокчиман",
    translationName : "want-to-leave"
  },
]


export default function VacancyForm() {
  const [
    {
      name,
      age,
      address,
      degree,
      children,
      livesWith,
      whereWorked,
      whyLeaveWork,
      health,
      advantages,
      interests,
      salary,
      phone,
      familyState,
      languages,
      currentWork,
    },
    setState,
  ] = useState({
    name: "",
    age: "",
    address: "",
    degree: "",
    children: "",
    livesWith: "",
    whereWorked: "",
    whyLeaveWork: "",
    health: "",
    advantages: "",
    interests: "",
    salary: "",
    phone: "",
    familyState: "",
    languages: [],
    currentWork: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const token = "6889465570:AAHaWvdhdb7Y0LT9fK3jd-YbQ9mzj6Ormuc";
    const chat_id =  "-4063476415";
    let text = "";

    text = text + ` %0A *Анкета для нового сотрудника:* %0A *Имя клиента:* ${name} %0A *Возраст клиента:* ${age} %0A *Адрес клиента:* ${address} %0A *Информация:* ${degree} %0A *Количество детей:* ${children} %0A *С кем ты живешь?:* ${livesWith} %0A *Работал:* ${whereWorked}  %0A *Здоровье:* ${health} %0A *Интерес:* ${interests} %0A *Зарплата:* ${salary}  %0A *Номер телефона:* ${phone}  %0A *Семейное положение:* ${familyState} %0A *Какие языки ты знаешь?:* ${languages?.join(", ")} %0A *Чем ты сейчас занят?:* ${currentWork} ;`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=MarkdownV2`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setState({
      name: "",
      age: "",
      address: "",
      degree: "",
      children: "",
      livesWith: "",
      whereWorked: "",
      whyLeaveWork: "",
      health: "",
      advantages: "",
      interests: "",
      salary: "",
      phone: "",
      familyState: "",
      languages: [],
      currentWork: "",
    })

    alert("Заяфка принята")
   
  };

  const {t} = useTranslation()

  

  return (
    <Box>
      <Typography
        sx={{ fontSize: "34px", textAlign: "center", fontWeight: "500" }}
      >
        {t("vacancy-heading")}
      </Typography>
      <Grid container justifyContent={"center"} p={3}>
        <Grid item lg={8} md={8}>
         
          <Box component={"form"} onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              name="name"
              id="filled-basic"
              label={t("name")}
              variant="filled"
              sx={{ mt: 2 }}
              value={name}
              onChange={(e) => {
                setState(prev => ({...prev, name: e.target.value}))
              }}
            />
            <TextField
              required
              fullWidth
              name="age"
              id="filled-basic"
              label={t("age")}
              variant="filled"
              sx={{ mt: 2 }}
              type="number"
              value={age}
              onChange={(e) => {
                setState(prev => ({...prev, age: e.target.value}))
              }}
            />
            <TextField
              required
              fullWidth
              name="address"
              id="filled-basic"
              label={t("always-address")}
              variant="filled"
              sx={{ mt: 2 }}
              value={address}
              onChange={(e) => {
                setState(prev => ({...prev, address: e.target.value}))
              }}
            />
            <TextField
              required
              fullWidth
              name="reference"
              id="filled-basic"
              label={t("degree")}
              variant="filled"
              sx={{ mt: 2 }}
              value={degree}
              onChange={(e) => {
                setState(prev => ({...prev, degree: e.target.value}))
              }}
            />
            <TextField
              required
              fullWidth
              name="baby"
              id="filled-basic"
              label={t("children")}
              variant="filled"
              sx={{ mt: 2 }}
              type="number"
              value={children}
              onChange={(e) => {
                setState(prev => ({...prev, children: e.target.value}))
              }}
            />
            <TextField
              required
              fullWidth
              name="live"
              id="filled-basic"
              label={t("lives-with")}
              variant="filled"
              sx={{ mt: 2 }}
              value={livesWith}
              onChange={(e) => {
                setState(prev => ({...prev, livesWith: e.target.value}))
              }}
            />
            <TextField
              required
              name="work"
              id="filled-basic"
              label={t("where-worked")}
              multiline
              rows={4}
              variant="filled"
              sx={{ mt: 2 }}
              fullWidth
              value={whereWorked}
              onChange={(e) => {
                setState(prev => ({...prev, whereWorked: e.target.value}))
              }}
            />
            <TextField
              required
              name="work_"
              id="filled-basic"
              label={t("why-leave-work")}
              multiline
              rows={4}
              variant="filled"
              sx={{ mt: 2 }}
              fullWidth
              value={whyLeaveWork}
              onChange={(e) => {
                setState(prev => ({...prev, whyLeaveWork: e.target.value}))
              }}
            />
            <Box>
              <TextField
                required
                name="health"
                id="filled-basic"
                label={t("health")}
                multiline
                rows={4}
                variant="filled"
                sx={{ mt: 2 }}
                fullWidth
                value={health}
              onChange={(e) => {
                setState(prev => ({...prev, health: e.target.value}))
              }}
              />
              <Typography sx={{ color: "gray", fontSize: "14px" }}>
                ({t("is-sick")}?)
              </Typography>
            </Box>
            <TextField
              required
              name="health"
              id="filled-basic"
              label={t("advantages")}
              multiline
              rows={4}
              variant="filled"
              sx={{ mt: 2 }}
              fullWidth
              value={advantages}
              onChange={(e) => {
                setState(prev => ({...prev, advantages: e.target.value}))
              }}
            />
            <TextField
              required
              name="hobby"
              id="filled-basic"
              label={t("interests")}
              multiline
              rows={4}
              variant="filled"
              sx={{ mt: 2 }}
              fullWidth
              value={interests}
              onChange={(e) => {
                setState(prev => ({...prev, interests: e.target.value}))
              }}
            />
            <TextField
              required
              fullWidth
              name="salary"
              id="filled-basic"
              label={t("salary")}
              variant="filled"
              sx={{ mt: 2 }}
              type="number"
              value={salary}
              onChange={(e) => {
                setState(prev => ({...prev, salary: e.target.value}))
              }}
            />
            <TextField
              required
              fullWidth
              name="phobe_number"
              id="filled-basic"
              label={t("phone")}
              variant="filled"
              sx={{ mt: 2 }}
              type="number"
              value={phone}
              onChange={(e) => {
                setState(prev => ({...prev, phone: e.target.value}))
              }}
            />
            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                {t("family-state")}?
              </Typography>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
               
                {
                  familyStateData?.map(item => (
                    <FormControlLabel
                    key={item?.name}
                  
                  control={<Radio onChange={() => {
                    if(item.name == familyState) {
                      setState(prev => ({...prev, familyState: null}))
                    }else {
                      setState(prev => ({...prev, familyState: item?.name}))
                    }
                  }} checked={item?.name == familyState} />}
                  label={t(item?.translationName)}
                />
                  ))
                }
              </RadioGroup>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                {t("languages-you-know")}?
              </Typography>
              <FormGroup>
              {
                vacancyLanguages?.map(item => (
                  <FormControlLabel
                  key={item?.id}
                  control={<Checkbox checked={languages?.includes(item?.name)} onChange={() => {
                    if(languages?.includes(item?.name)) {
                      setState(prev => ({...prev, languages: languages?.filter(el => el != item?.name)}))
                    }else {
                      setState(prev => ({...prev, languages: [...languages, item?.name]}))
                    }
                  }} />}
                  label={t(item?.translationName)}
                />
                ))
              }
              </FormGroup>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                {t("current-work")}?
              </Typography>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                
               {currentWorkData?.map(item => (
                <FormControlLabel
                key={item?.id}
                  value="Ишлайман бушамокчиман"
                  control={<Radio checked={item?.name == currentWork} onChange={() => {
                  if(item?.name == currentWork) {
                  setState(prev => ({...prev, currentWork: null}))
                  }else {
                   setState(prev => ({...prev, currentWork: item?.name}))
                   }
                  }}  />}
                  label={t(item?.translationName)}
                />))}
              </RadioGroup>
            </Box>
            <Button fullWidth variant="contained" sx={{ mt: 2 }} type="submit">
              {t("send")}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
