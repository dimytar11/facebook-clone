import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormLabel  from '@mui/material/FormLabel';

export default function MaterialDatePicker() {
  
  const [day, setDay] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [year, setYear] = React.useState("");
  
  const handleChangeDay = (event) => {
    setDay(event.target.value);
  };
  
  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const fillTheOptions = (a, b, arr) => {
    for (let i = a; i <= b; i++) {
      arr.push(i)
    }
    return arr
  }

  return (
    <>
      <FormLabel id="demo-row-radio-buttons-group-label">Дата на раждане<br/></FormLabel>
      <FormControl key={1} required sx={{ m: 1, minWidth: 133 }}>
        <InputLabel id="demo-simple-select-required-label1">Ден</InputLabel>
        <Select
          labelId="demo-simple-select-required-label1"
          id="demo-simple-select-required1"
          value={day}
          label="date"
          onChange={handleChangeDay}
        >
          {fillTheOptions(1, 31, []).map((i) => {
            return <MenuItem value={i}>{i}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl key={2} required sx={{ m: 1, minWidth: 133 }}>
        <InputLabel id="demo-simple-select-required-label2">Месец</InputLabel>
        <Select
          labelId="demo-simple-select-required-label2"
          id="demo-simple-select-required2"
          value={month}
          label="month"
          onChange={handleChangeMonth}
        >
          {fillTheOptions(1, 12, []).map((i) => {
            return <MenuItem value={i}>{i}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl key={3} required sx={{ m: 1, minWidth: 133 }}>
        <InputLabel id="demo-simple-select-required-label3">Година</InputLabel>
        <Select
          labelId="demo-simple-select-required-label3"
          id="demo-simple-select-required3"
          value={year}
          label="year"
          onChange={handleChangeYear}
        >
          {fillTheOptions(1905, 2022, []).map((i) => {
            return <MenuItem value={i}>{i}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );

}
