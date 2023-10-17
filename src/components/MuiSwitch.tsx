import React, { useState } from "react"
import { Box, FormControlLabel, Switch } from '@mui/material'

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <div>
      <br/><br/>

      <Box>
        <FormControlLabel label='Dark Mode' control={<Switch checked={checked} onChange={handleChange} />} />
      </Box>
      
      checked = {checked ? 'true' : 'false'}
    </div>
  )
};

export default MuiSwitch;