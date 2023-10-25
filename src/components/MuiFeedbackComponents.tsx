import React, {useState, useEffect, forwardRef} from "react"
import { Stack, Snackbar, Button, Alert, AlertProps, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, CircularProgress, LinearProgress } from '@mui/material'

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
      
    </div>
  )
};

export default MuiFeedbackComponents;