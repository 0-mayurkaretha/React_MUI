import React, { useState } from "react"
import { Stack, Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null)
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  }
  console.log(value)

  return (
    <div>
      <br/><br/>

      <Stack spacing={2}>
        <Rating value={value} onChange={handleChange} precision={0.1} icon={<FavoriteIcon fontSize='inherit' />} emptyIcon={<FavoriteBorderIcon />}/> 
        Rate
        <Rating value={3.5} precision={0.1} icon={<FavoriteIcon fontSize='inherit' />} emptyIcon={<FavoriteBorderIcon />} readOnly/> 
        readOnly

      </Stack>
    </div>
  )
};

export default MuiRating;