import React, { useState } from "react"
import { Stack, Autocomplete, TextField } from '@mui/material'

type Skill = {
  id: number
  label: string
}

const skills = ['HTML', 'CSS', 'JS', 'React', 'MUI'] 

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill
}))

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null)
  console.log(value)

  const [skill, setSkill] = useState<Skill | null>(null)
  console.log(skill) 

  return (
    <div>
      <br/><br/>

      <Stack spacing={2} width='250px'>
        <Autocomplete 
          options={skills} 
          renderInput={(params) => <TextField {...params} label='Skills' helperText='! string'/>}
          value={value}
          onChange={(event: any, newValue) => setValue(newValue)}
          freeSolo
          />

        <Autocomplete 
          options={skillsOptions} 
          renderInput={(params) => <TextField {...params} label='Skills' helperText='! object'/>}
          value={skill}
          onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
          />
      </Stack>
    </div>
  )
};

export default MuiAutocomplete;