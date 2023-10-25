import React, {useState, forwardRef} from "react"
import { Snackbar, Button, Alert, AlertProps } from '@mui/material'

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {... props} />
  }
)

const MuiFeedbackComponents = () => {
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

    </div>
  )
};

export default MuiFeedbackComponents;