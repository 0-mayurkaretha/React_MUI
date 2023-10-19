import React, {useEffect} from "react"
import { Box, Stack, Divider, Grid, Paper } from '@mui/material'

const MuiLayout = () => {

  useEffect(() => {
    document.body.style.backgroundColor = '#eeeeee'
    return () => {
      document.body.style.backgroundColor = 'white'
    };
  }, [])

  return (
    <div>
      <br/><br/>

      <Paper sx={{ padding: '32px'}} elevation={12}>
        Stack for 1-dimensional components
        <Stack sx={{border: '1px solid'}} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem />}  my={4}>
          <Box sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover':{
              backgroundColor: 'primary.light'
            }
          }}>
            Box 1
          </Box>

          <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2}>
            Box 2
          </Box>
        </Stack>
        Grid for 2-dimensional components
        <Grid container my={4} spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light' p={2}>Item 1</Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light' p={2}>Item 2</Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light' p={2}>Item 3</Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light' p={2}>Item 4</Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
};

export default MuiLayout;