import React from "react"
import { Box, Card, CardContent, CardActions, Button, CardMedia, Typography } from '@mui/material'

const MuiCard = () => {
  return (
    <div style={{paddingTop:"32px"}}>
      <Box width='300px'> 
        <Card>
          <CardMedia component='img' height='148' image='https://source.unsplash.com/random' alt='unsplash image' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'> React MUI </Typography>
            <Typography variant='body2' color='GrayText.secondary' > Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste hic architecto ea delectus libero similique vitae cupiditate eius ad!</Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn more</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  )
};

export default MuiCard;