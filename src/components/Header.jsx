import { Typography,AppBar,Box,Toolbar } from '@mui/material';
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
            To-Do App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Header