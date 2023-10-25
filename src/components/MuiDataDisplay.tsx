import React from "react"
import { Stack, Avatar, AvatarGroup } from '@mui/material'

const MuiDataDisplay = () => {
  return (
    <div style={{paddingTop:"32px"}}>
      
      <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
          <Avatar sx={{ bgcolor: 'primary.light'}}>BW</Avatar>
          <Avatar sx={{ bgcolor: 'success.light'}}>CK</Avatar>
        </Stack>
        <Stack direction='row' spacing={1}>
          <AvatarGroup>
            <Avatar sx={{ bgcolor: 'primary.light'}}>BW</Avatar>
            <Avatar sx={{ bgcolor: 'success.light'}}>CK</Avatar>
            <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='jane Done' />
            <Avatar src='https://randomuser.me/api/portraits/men/51.jpg' alt='john doe' />
          </AvatarGroup>
        </Stack>
      </Stack>
    </div>
  )
};

export default MuiDataDisplay;