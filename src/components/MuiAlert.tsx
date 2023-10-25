import React from "react"
import { Stack, Alert, AlertTitle, Button } from '@mui/material'

const MuiAlert = () => {
  return (
    <div  style={{paddingTop:"32px"}}>
      
      <Stack spacing={2}>
        <Alert severity='error'>This is an Error alert.</Alert>
        <Alert severity='warning'>This is an Warning alert.</Alert>
        <Alert severity='info'>This is an Info alert.</Alert>
        <Alert severity='success'>This is an Success alert.</Alert>

        <Alert variant ='outlined' severity='error'>
          <AlertTitle>Error</AlertTitle>
          This is an Error alert.
        </Alert>
        <Alert variant ='outlined' severity='warning'>
          <AlertTitle>Warning</AlertTitle>
          This is an Warning alert.
        </Alert>
        <Alert variant ='outlined' severity='info'>
          <AlertTitle>Info</AlertTitle>
          This is an Info alert.
        </Alert>
        <Alert variant ='outlined' severity='success'>
          <AlertTitle>Success</AlertTitle>
          This is an Success alert.
        </Alert>

        <Alert variant='filled' severity='error' onClose={() => alert('close clicked.')}>This is an Error alert.</Alert>
        <Alert variant='filled' severity='warning'>This is an Warning alert.</Alert>
        <Alert variant='filled' severity='info'>This is an Info alert.</Alert>
        <Alert variant='filled' severity='success' action={
          <Button color='inherit' size='small'>UNDO</Button>
          }>
          This is an Success alert.</Alert>
      </Stack>
    </div>
  )
};

export default MuiAlert;