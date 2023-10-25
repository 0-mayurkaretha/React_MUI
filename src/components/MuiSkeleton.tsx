import React, {useState, useEffect, forwardRef} from "react"
import { Box, Stack, Snackbar, Button, Alert, AlertProps, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, CircularProgress, LinearProgress, Skeleton, Typography, Avatar } from '@mui/material'

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div style={{paddingTop:"32px"}}>
      <Stack spacing={1} width='250px'>
        <Skeleton variant='text' animation='wave' />
        <Skeleton variant='circular' width={40} height={40} animation='wave' />
        <Skeleton variant='rectangular' width={250} height={125} animation='wave' />
      </Stack>

      <br/><br/>
      <Box sx={{ width: '250px'}}>
        {
          loading ? (
            <Skeleton variant='rectangular' width={256} height={144} animation='wave'   />
          ) : (
            <img src='https://source.unsplash.com/random/256x144' alt='skeleton' width={256} height={144} />
          )}

          <Stack direction='row' spacing={1} sx={{ width: '100%', marginTop: '12px'}}>
          {
            loading ? (
              <Skeleton variant='circular' width={40} height={40} animation='wave'   />
            ) : (
              <Avatar sx={{ bgcolor: 'primary.main'}}>R</Avatar>
            )}
            <Stack sx={{ width: '80%'}}>
              {
                loading ? (
                  <>
                    <Typography variant='body1'>
                      <Skeleton variant='text' width='100%' animation='wave' />
                    </Typography>
                    <Typography variant='body2'>
                      <Skeleton variant='text' width='100%' animation='wave' />
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography variant='body1'>React MUI</Typography>
                    <Typography variant='body2'>body2 text anjaw ajwnda awdn</Typography>
                  </>
                )}
            </Stack>
        </Stack>
      </Box>
    </div>
  )
};

export default MuiSkeleton;