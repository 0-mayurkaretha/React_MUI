import React, {useState} from "react"
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material"
import { Form } from "react-router-dom"

const MuiRadioButton = () => {
  const [value, setValue] = useState('') 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <br/><br/>

      <Box>
        <FormControl>
          <FormLabel id='job-experience-group-label'>
            Years of experience
          </FormLabel>
          <RadioGroup name='job-experience-group' aria-label='job-experience-group-label' value={value} onChange={handleChange} row>
            <FormControlLabel control={<Radio  color='secondary' />} label='0-2' value='0-2' />
            <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
            <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
          </RadioGroup>
          <FormHelperText>select one</FormHelperText>
        </FormControl>
      </Box>
    </div>
  )
};

export default MuiRadioButton;