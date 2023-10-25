import React, { useState } from "react"
import { Box, Stack, Avatar, AvatarGroup, Badge, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, ListItemButton, Divider, Chip, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'
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
      
      <br/><br/><br/>
      Table: <br/><br/>
      <TableContainer component={Paper} sx={{ maxHeight: '300px'}}>
        <Table aria-label='simple table' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              tableData.map(row => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0}}}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
 
    </div>
  )
};

export default MuiDataDisplay;

const tableData = [{
  "id": 1,
  "first_name": "Tobi",
  "last_name": "Stack",
  "email": "tstack0@icio.us",
  "gender": "Female",
  "ip_address": "199.213.16.247"
}, {
  "id": 2,
  "first_name": "Sarina",
  "last_name": "Borrow",
  "email": "sborrow1@flickr.com",
  "gender": "Female",
  "ip_address": "236.25.118.134"
}, {
  "id": 3,
  "first_name": "Lydon",
  "last_name": "Beere",
  "email": "lbeere2@sina.com.cn",
  "gender": "Male",
  "ip_address": "61.129.86.147"
}, {
  "id": 4,
  "first_name": "Foster",
  "last_name": "McCart",
  "email": "fmccart3@illinois.edu",
  "gender": "Male",
  "ip_address": "162.175.147.68"
}, {
  "id": 5,
  "first_name": "Maximilian",
  "last_name": "Callendar",
  "email": "mcallendar4@time.com",
  "gender": "Male",
  "ip_address": "46.82.144.57"
}, {
  "id": 6,
  "first_name": "Theresina",
  "last_name": "Lambin",
  "email": "tlambin5@soundcloud.com",
  "gender": "Female",
  "ip_address": "202.48.89.71"
}, {
  "id": 7,
  "first_name": "Franny",
  "last_name": "Netti",
  "email": "fnetti6@census.gov",
  "gender": "Female",
  "ip_address": "90.27.54.170"
}, {
  "id": 8,
  "first_name": "Rudie",
  "last_name": "Tal",
  "email": "rtal7@com.com",
  "gender": "Male",
  "ip_address": "152.192.84.190"
}, {
  "id": 9,
  "first_name": "Farrell",
  "last_name": "Cumberpatch",
  "email": "fcumberpatch8@mapy.cz",
  "gender": "Male",
  "ip_address": "37.107.42.20"
}, {
  "id": 10,
  "first_name": "Stephen",
  "last_name": "Aksell",
  "email": "saksell9@sciencedirect.com",
  "gender": "Male",
  "ip_address": "90.216.186.207"
}]