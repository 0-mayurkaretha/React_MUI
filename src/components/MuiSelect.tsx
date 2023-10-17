import React, { useState } from "react"
import { Box, TextField, MenuItem } from "@mui/material"

const MuiSelect = () => {
  const [country, setCountry] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string)
  }

  const [countries, setCountries] = useState<string[]>([])
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries( typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <div>
      <br/><br/>

      <Box width='250px'>
        <TextField label='Select country' select value={country} onChange={handleChange} fullWidth helperText='! can select one'>
          <MenuItem value='IN'>India</MenuItem>
          <MenuItem value='US'>USA</MenuItem>
          <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
      </Box>
      <br/>
      <Box width='250px'>
        <TextField label='Select countries' select value={countries} onChange={handleChange2} fullWidth SelectProps={{multiple: true}} helperText='! can select multiple'>
          <MenuItem value='IN'>India</MenuItem>
          <MenuItem value='US'>USA</MenuItem>
          <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
      </Box>
    </div>
  )
};

export default MuiSelect;