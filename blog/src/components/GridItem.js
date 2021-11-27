import { Typography, Grid, Paper, Avatar, Chip, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function GridItem({blog, handleDelete}){
  return(
     <Paper sx={{maxWidth: 400, my:1, mx: 'auto',p:2}}>
          <Grid container wrap="nowrap" spacing={2}>       
            <Grid item >
              <Avatar>{blog.title.charAt(0)}</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{blog.title}</Typography>
              <Typography noWrap>{blog.description}</Typography>
              <Chip variant="outlined" label={blog.category}/>      
            </Grid>
            <Grid item>
               <IconButton edge="start" style={{display:'block'}} onClick={()=> handleDelete(blog.id)}>
                <DeleteIcon/>
              </IconButton>
            </Grid>
          </Grid>     
      </Paper>
  );
}