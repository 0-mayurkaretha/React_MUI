import React from "react"
import { Stack, Avatar, AvatarGroup, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

const MuiDataDisplay = () => {
  return (
    <div style={{paddingTop:"32px"}}>
      
      Avatar: <br/><br/>
      <Stack spacing={2}>
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

      <br/><br/>
      Badge: <br/><br/>
      <Stack spacing={2} direction='row'>
        <Badge badgeContent={5}  color='primary'>
          <MailIcon />
        </Badge>
        <Badge badgeContent={0}  color='primary'>
          <MailIcon />
        </Badge>
        <Badge badgeContent={5}  color='secondary'>
          <MailIcon />
        </Badge>
        <Badge badgeContent={100}  color='error'>
          <MailIcon />
        </Badge>
        <Badge badgeContent={1000}  color='error' max={999}>
          <MailIcon />
        </Badge>
        <Badge variant='dot'  color='primary'>
          <MailIcon />
        </Badge>
      </Stack>
    </div>
  )
};

export default MuiDataDisplay;