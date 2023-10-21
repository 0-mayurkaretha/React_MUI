import React from "react"
import { Box, Stack, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'

const MuiImageList = () => {
  return (
    <div style={{paddingTop:"32px"}}>
      
      <Stack spacing={4}>
        
        <span>Simple</span>
        <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
          {
            itemData.map(item => 
              <ImageListItem key={item.img}>
                <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                <ImageListItemBar title={item.title} />
              </ImageListItem> 
            )
          }
        </ImageList>

        <span>variant='woven'</span>
        <ImageList variant='woven' sx={{width: 500, height: 450}} cols={3} gap={8}>
          {
            itemData.map(item => 
              <ImageListItem key={item.img}>
                <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                <ImageListItemBar title={item.title} />
              </ImageListItem> 
            )
          }
        </ImageList>

        
        <span>variant='masonry'</span>
        <Box sx={{width: 500, height: 450, overflowY: 'scroll'}}>
          <ImageList variant='masonry'  cols={3} gap={8}>
            {
              itemData.map(item => 
                <ImageListItem key={item.img}>
                  <img src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                  <ImageListItemBar title={item.title} />
                </ImageListItem> 
              )
            }
          </ImageList>
        </Box>

      </Stack>
    </div>
  )
};

const itemData = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae',
    title: 'random 1'
  },
  {
    img: 'https://images.unsplash.com/photo-1591779051696-1c3fa1469a79',
    title: 'random 2'
  },
  {
    img: 'https://images.unsplash.com/photo-1570051008600-b34baa49e751',
    title: 'random 3'
  },
  {
    img: 'https://images.unsplash.com/photo-1586810724476-c294fb7ac01b',
    title: 'random 4'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'random 5'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae',
    title: 'random 1'
  },
  {
    img: 'https://images.unsplash.com/photo-1591779051696-1c3fa1469a79',
    title: 'random 2'
  },
  {
    img: 'https://images.unsplash.com/photo-1570051008600-b34baa49e751',
    title: 'random 3'
  },
  {
    img: 'https://images.unsplash.com/photo-1586810724476-c294fb7ac01b',
    title: 'random 4'
  },
  {
    img: 'https://images.unsplash.com/photo-1570051008600-b34baa49e751',
    title: 'random 3'
  },
  {
    img: 'https://images.unsplash.com/photo-1586810724476-c294fb7ac01b',
    title: 'random 4'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'random 5'
  },
]

export default MuiImageList;