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


const vacancyLanguages = [
  {
    id:1, 
    name: "Инглиз"
  },
  {
    id:2, 
    name: "Узбек"
  },
  {
    id:3, 
    name: "Рус"
  },
]

const familyStateData = [
  {
    id:1, 
    name: "Оилалиман"
  },
  {
    id:2, 
    name: "Уйланмаганман"
  },
  {
    id:3, 
    name: "Ажрашганман"
  },
]

const currentWorkData = [
  {
    id:1, 
    name: "Талабаман"
  },
  {
    id:2, 
    name: "Вактинча ишсиз"
  },
  {
    id:3, 
    name: "Ишлайман бушамокчиман"
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

    text = text + ` %0A Анкета для нового сотрудника: %0A Имя клиента: ${name} %0A Возраст клиента: ${age} %0A Адрес клиента: ${address} %0A Информация: ${degree} %0A Количество детей: ${children} %0A С кем ты живешь?: ${livesWith} %0A Работал: ${whereWorked}  %0A Здоровье: ${health} %0A Интерес: ${interests} %0A Зарплата: ${salary}  %0A Номер телефона: ${phone}  %0A Семейное положение: ${familyState} %0A Какие языки ты знаешь?: ${languages?.join(", ")} %0A Чем ты сейчас занят?: ${currentWork} ;`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`;

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
              label="Ёшингиз"
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
              label="Доимий яшаш манзилингиз"
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
              label="Маълумотингиз"
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
              label="Фарзандларингиз сони"
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
              label="Ким билан яшайсиз"
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
              label="Қаерларда ва қайси лавозимларда ишлагансиз"
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
              label="Ишдан бўшашингиз сабаби"
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
                label="Соғлиғингиз"
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
              value={advantages}
              onChange={(e) => {
                setState(prev => ({...prev, advantages: e.target.value}))
              }}
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
              label="Қанча ойлик иш ҳақи кутаяпсиз"
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
              label="Телефон рақамингиз"
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
                Оилавий аҳволингиз?
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
                  label={item?.name}
                />
                  ))
                }
              </RadioGroup>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                Қайси тилларни биласиз ва қайдаражада?
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
                  label={item?.name}
                />
                ))
              }
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
                  label={item?.name}
                />))}
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
