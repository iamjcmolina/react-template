import { useEffect, useRef, useState } from 'react';
import { Box, Stack, Container, Typography } from "@mui/material"
import { red } from "@mui/material/colors"

function App() {
  const appBarRef = useRef<HTMLDivElement>();
  const bottomBarRef = useRef<HTMLDivElement>();
  const [windowWidth, setWindowWidth] = useState(window.innerHeight);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    calculateContentHeight();
    
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const handleWindowResize = () => {
    setWindowWidth(window.innerHeight);
  };

  const calculateContentHeight = () => {
    const appBarHeight =
      appBarRef.current == null? 0
      : appBarRef.current.getBoundingClientRect().height;
    const bottomBarHeight =
      bottomBarRef.current == null? 0
      : bottomBarRef.current.getBoundingClientRect().height;
    setContentHeight(windowWidth - appBarHeight - bottomBarHeight - 16);
  };

  return (
    <>
      <Container>
        <Stack justifyContent="space-between">
          <Box ref={appBarRef}>
            <Stack direction="row" spacing={1} justifyContent="center" >
              <Box>Logo</Box>
              <Box>Titulo</Box>
            </Stack>
            <Typography>dsajkdl</Typography>
            <Typography>dsajkdl</Typography>
            <Typography>dsajkdl</Typography>
          </Box>
          <Box height={`${contentHeight}px`} sx={{backgroundColor: red[50], overflowY: 'auto'}}>
            <Typography>Item 2</Typography>
            <Typography>dsajkdl</Typography>
            <Typography>dsajkdl</Typography>
            <Typography>dsajkdl</Typography>
            <Typography>dsajkdl</Typography>
            <Typography>dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl dsajkdl</Typography>
            <Stack direction="row" spacing={1} justifyContent="space-between">
              <Box>Logo</Box>
              <Box>Titulo</Box>
            </Stack>
          </Box>
          <Box ref={bottomBarRef}>
            <Typography>Item 3</Typography>
            <Typography>dsajkdl</Typography>
            <Typography>dsajkdl</Typography>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export default App
