import React, { useState } from "react"
import { Box, Stack, AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Link, Breadcrumbs, Drawer, SpeedDial, SpeedDialAction, SpeedDialIcon, BottomNavigation, BottomNavigationAction} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import MenuIcon from '@mui/icons-material/Menu'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'

const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div style={{paddingTop:"32px"}}>
      
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <CatchingPokemonIcon />
          </IconButton>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
            POKEMONAPP
          </Typography>

          <Stack direction='row' spacing={2}>
            <Button color='inherit'>Features</Button>
            <Button color='inherit'>Pricing</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit' id='resouces-button' onClick={handleClick} aria-control={open ? 'resources-menu' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined} endIcon={<KeyboardArrowDownIcon />}>Resources</Button>
            <Button color='inherit'>Login</Button>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Stack>

          <Menu 
            id='resources-menu' 
            anchorEl={anchorEl} 
            open={open} 
            MenuListProps={{ 'aria-labelledby' : 'resouces-button',}} 
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem>Blog</MenuItem>
              <MenuItem>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <br/>
      <Stack spacing={2} direction='row' m={4}>
        <Link href='#'>Link primary</Link>
        <Link href='#' color='secondary'>Link secondary</Link>
        <Link href='#' underline='hover'>Undeline hover</Link>
        <Link href='#' underline='none'>Undeline none</Link>
      </Stack>

      <br/>
      <Box m={4}>
        <Breadcrumbs aria-label='breadcrumbs' separator={<NavigateNextIcon fontSize='small' />}>
          <Link underline='hover' href='#'>Home</Link>
          <Link underline='hover' href='#'>Catalog</Link>
          <Link underline='hover' href='#'>Accessories</Link>
          <Typography color='text.primary'>Shoes</Typography>
        </Breadcrumbs>
      </Box> 
    
      <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width='256px' textAlign='center' role='presentation'>
          <Typography variant='h6' component='div'>
            Side panel
          </Typography>
        </Box>
      </Drawer>

      <SpeedDial ariaLabel='Navigation speed dial' sx={{ position: 'absolute', bottom: 16, right: 16}} icon={<SpeedDialIcon />}>
        <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy' />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' />
      </SpeedDial>

      {/* for mobile and tablet devices */}
      <BottomNavigation sx={{ width: '25%', position: 'absolute', bottom: 0}} showLabels>
        <BottomNavigationAction label='Home' icon={<HomeIcon />} />
        <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
        <BottomNavigationAction label='Profile' icon={<PersonIcon />} />
      </BottomNavigation>
    </div>
  )
};

export default MuiNavbar;