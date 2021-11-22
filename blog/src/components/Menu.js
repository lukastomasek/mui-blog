import { Drawer, List, IconButton, Typography, ListItem,
ListItemIcon, ListItemText, Divider, Container } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import{makeStyles, styled} from '@mui/styles';

import { useState } from "react";

const styles = makeStyles({
  backIcon:{
      display:'flex',
      justifyContent: 'end'
  }
})

export default function Menu({open, setOpen}){


  const classes = styles();

  const menuItems = [
    {
      title: "Home",
      icon: <HomeIcon/>,
    },
    {
      title: "Create Blog",
      icon: <CreateIcon/>,
    },
  ]



  return(
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Container className={classes.backIcon}>
        <IconButton
          onClick={()=> setOpen(false)}
        >
          <ArrowBackIosIcon/>
        </IconButton>
      </Container>
      <Divider/>
     <List>
        {menuItems.map(item=>(
          <ListItem key={item.title}>
            <IconButton>
              <ListItemIcon>
               {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </IconButton>
          </ListItem>
        ))}
     </List>
    </Drawer>
  );
}