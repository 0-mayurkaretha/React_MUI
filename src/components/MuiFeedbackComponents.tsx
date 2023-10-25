import React, {useState, useEffect, forwardRef} from "react"
import { Box, Stack, Snackbar, Button, Alert, AlertProps, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, CircularProgress, LinearProgress, Skeleton, Typography, Avatar } from '@mui/material'

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {... props} />
  }
)

const MuiFeedbackComponents = () => {
  //for Snackbar
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  const handleClose2 = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if(reason==='clickaway'){
      return
    }
    setOpen2(false)
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if(reason==='clickaway'){
      return
    }
    setOpen(false)
  }

  //for Dialog
  const [dialogOpen, setDialogOpen] = useState(false)
  
  //for Skeleton
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div style={{paddingTop:"32px"}}>
      
      Snackbar: <br/><br/>
      <Button variant='outlined' onClick={() => setOpen2(true)}>Inbuilt</Button>
      <Button variant='outlined' onClick={() => setOpen(true)}>Custom</Button>

      <Snackbar message='Submitted successfully!' autoHideDuration={4000} open={open2} onClose={handleClose2} anchorOrigin={{ vertical:'bottom', horizontal:'center'}} />

      <Snackbar  autoHideDuration={4000} open={open} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity='success'>
          Submitted successfully!
        </SnackbarAlert>
      </Snackbar>

      <br/><br/><br/>
      Dialog: <br/><br/>

      <Button variant='outlined' onClick={() => setDialogOpen(true)}>Opne dialog</Button>

      <Dialog aria-labelledby='dialog-title' aria-describedby='dialog-description' open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id='dialog-description'>Are you sure you want to? You will not be able to edit after submitting</DialogContentText>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button autoFocus onClick={() => setDialogOpen(false)}>Submit</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      <br/><br/><br/>
      Progress: <br/><br/>
      <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress color='success' />
        <CircularProgress variant='determinate' value={60} />

        <LinearProgress />
        <LinearProgress color='success' />
        <LinearProgress variant='determinate' value={60} />
      </Stack>

      <br/><br/><br/>
      Skeleton: <br/><br/>

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

export default MuiFeedbackComponents;