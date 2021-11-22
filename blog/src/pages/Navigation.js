import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from "../components/SearchBar";
import Menu from "../components/Menu";

import { useState } from "react";

export default function Navigation(){


  const[open,setOpen] = useState(false);

  return(
    <Box sx={{flexGrow:1}}>
      <AppBar
          position="static"
        >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{mr:2}}
            onClick={()=> setOpen(!open)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow:1, display: {xs: 'none', sm: 'block'}}}
          >
            My Blog
          </Typography>
          <SearchBar/>
          <Menu open={open} setOpen={setOpen}/>
            
        </Toolbar>
      </AppBar>
    </Box>
  );
}