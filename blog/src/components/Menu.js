import { Drawer, List, IconButton, ListItem,
ListItemIcon, ListItemText, Divider, Container } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import{makeStyles} from '@mui/styles';
import {useHistory} from 'react-router';


const styles = makeStyles({
  backIcon:{
    display:'flex',
    justifyContent: 'end'
  },
  icon:{
    cursor: 'pointer',
    '&:hover':{
       backgroundColor: '#f1f1f1',
    }
  },
  active:{
    backgroundColor: '#f1f1f1',
  },
})

export default function Menu({open, setOpen}){


  const classes = styles();

  const menuItems = [
    {
      title: "Home",
      icon: <HomeIcon/>,
      path: "/"
    },
    {
      title: "Create Blog",
      icon: <CreateIcon/>,
      path: "/create"
    },
  ]
    const history = useHistory();
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
          <ListItem className={classes.icon} key={item.title}
            onClick={()=> history.push(item.path)}
          >
              <ListItemIcon>
               {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />     
          </ListItem>
        ))}
     </List>
    </Drawer>
  );
}