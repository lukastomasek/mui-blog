import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import GridItem from "../components/GridItem";
import { Typography,Grid } from "@mui/material";

export default function Home(){

  const [blogs,setBlogs] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');

  useEffect(()=>{
    fetch('http://localhost:8000/blogs')
      .then((res) => res.json())
      .then((data)=>{
        setBlogs(data);
        setError(false);
        setErrorMessage('');
      })
      .catch((error)=>{
        setError(true);
        setErrorMessage(error.message);
      });

  },[ ]);

  const handleDelete = async (id) =>{
     await fetch('http://localhost:8000/blogs/' + id, {
       method: 'DELETE'
     });

     const filteredBlogs = blogs.filter(blog => blog.id !== id);
     setBlogs(filteredBlogs);
  };

  return(
      <Box sx={{flexGrow:1, overflow: 'hidden', px:2}}>
        <Typography variant="h2" gutterBottom align="center">Home</Typography>
        {error && <Typography align="center" color="secondary">{errorMessage}</Typography>}
        
        <Grid>       
        {blogs.map(blog => (
          <GridItem 
          key={blog.id} 
          blog={blog}
          handleDelete={handleDelete}
          />
        ))}
        </Grid>
      </Box>
  );
}