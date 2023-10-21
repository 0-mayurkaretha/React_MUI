import React, { useState } from "react"
import { Stack, AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
    </div>
  )
};

export default MuiNavbar;