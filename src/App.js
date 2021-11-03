import React from 'react'
import { Typography, AppBar, Toolbar, Container, ImageList, ImageListItem } from '@material-ui/core'
import ImagesData from './Data.json'


const App = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ "marginTop": "80px", "textAlign": "center" }}>
        <Typography variant="h3">Our latest version of Photography</Typography>
        <Typography paragraph>Pleasure to take your photos as well!</Typography>
      </Container>
      <Container>
        <ImageList rowHeight={170} cols={3}>
          {ImagesData.map(imageObj =>
            <ImageListItem key={imageObj.id} cols={1}>
              <img src={imageObj.img} alt={imageObj.description} />
            </ImageListItem>)}

        </ImageList>

      </Container>

    </>
  )
}

export default App
