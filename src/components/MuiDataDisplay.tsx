import React, { useState } from "react"
import { Box, Stack, Avatar, AvatarGroup, Badge, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, ListItemButton, Divider, Chip } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import FaceIcon from '@mui/icons-material/Face'

const MuiDataDisplay = () => {
  const [chips, setChips] = useState(['chip 1', 'chip 2', 'chip 3'])
  const handleDelete = (chipToDelete: string) => {
    setChips(chips => chips.filter((chip) => chip!== chipToDelete))
  }

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

      <br/><br/><br/>
      List: <br/><br/>
      <Box sx={{ width: '400px', bgcolor: '#efefef'}}>
        <List>

          <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar>
                      <MailIcon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
              <ListItemText primary='List Item 1' secondary='Secondary text' />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary='List Item 2' secondary='Secondary text' />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary='List Item 3' secondary='Secondary text' />
            </ListItemButton>
          </ListItem>

        </List>
      </Box>

      <br/><br/><br/>
      Chip: <br/><br/>
      <Stack direction='row' spacing={1}>
        <Chip label='Chip' />
        <Chip label='Chip' color='primary' />
        <Chip label='Chip outlined' color='primary' variant='outlined' />
        <Chip label='Chip avatar' color='primary' variant='outlined' avatar={<Avatar>V</Avatar>} />
        <Chip label='Chip icon' color='primary' icon={<FaceIcon />} />
        <Chip label='Click' color='success' onClick={() => alert('clicked!')} />
        <Chip label='Delete' color='error' onClick={() => alert('clicked!')} onDelete={() => alert('Delete handler called')} />
        {
          
          chips.map( chip => (
            <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
          ))
        }
      </Stack>
 
    </div>
  )
};

export default MuiDataDisplay;