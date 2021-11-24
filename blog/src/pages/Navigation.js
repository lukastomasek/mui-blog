import { AppBar, Box, Toolbar, IconButton, Typography,} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from "../components/SearchBar";
import Menu from "../components/Menu";
import{makeStyles, styled} from '@mui/styles';
import { useState } from "react";



const useStyle = makeStyles({
  iconMode:{
    position: 'relative',
    left: 200,
  },
});

export default function Navigation({modeIcon,setMode}){

  const classes = useStyle();

  const[open,setOpen] = useState(false);

  return(
    <Box sx={{flexGrow:1}}>
      <AppBar
          position="static"
          style={{backgroundColor: '#2962ff'}}
        >
        <Toolbar>
           <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={setMode}
            className={classes.iconMode} 
            sx={{left:-15}}
            md={{left:200}}
          
            >
            {modeIcon}
          </IconButton>    
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