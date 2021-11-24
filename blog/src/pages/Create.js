import React,{useState} from "react";
import { Container, Typography, TextField, Button, FormLabel, RadioGroup, Radio, FormControl, FormControlLabel  } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';



export default function Create(){

  const [title,setTitle] = useState('');
  const [blogDetails, setBlogDetails] = useState('');
  const [category,setCategory] = useState('Business');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    setTitleError(false);
    setDetailsError(false);

    if(title == ''){
      setTitleError(true);
    }

    if(blogDetails == ''){
      setDetailsError(true);
    }

    if(title && blogDetails){
      // make a post reqest
      console.log(`title: ${title}, blog: ${blogDetails}, category: ${category}`);
    }

  };

  return(
    <Container>
      <Typography
       variant="h3"
       noWrap
       color="inherit"
       align="center"
       gutterBottom
      >Create New Blog</Typography>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
      
      <TextField style={{
        display:'block', marginTop:20, marginBottom:20,
      }} onChange={(e)=> setTitle(e.target.value)}  variant="outlined" error={titleError} fullWidth required label="Title"/>
      <TextField style={{
        display:'block', marginBottom:20, marginTop:20,
      }} onChange={(e)=> setBlogDetails(e.target.value)} multiline  rows={4} variant="outlined" error={detailsError} fullWidth required label="Blog Details"/>
      <FormControl style={{
        display:'block', marginTop:20, marginBottom:20,
      }}>
        <FormLabel>Choose a Blog Category:</FormLabel>
        <RadioGroup
          value={category}
          onChange={(e)=> setCategory(e.target.value)}
          name="radio-buttons-group"
        >
          <FormControlLabel  control={<Radio/>} color="primary" label="Business" value="Business"/>
          <FormControlLabel control={<Radio/>} label="Art" value="Art"/>
          <FormControlLabel control={<Radio/>} label="Social Media" value="Social Media"/>
        </RadioGroup>
      </FormControl>

       <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<SendIcon/>}
        
          >
          Submit
        </Button>
      </form>
    </Container>
  );
}