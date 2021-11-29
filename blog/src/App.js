
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purple } from '@mui/material/colors';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';
import { BrowserRouter as Router,Switch, Route,} from 'react-router-dom';
import Create from './pages/Create';
import Layout from './pages/Layout';
import Home from './pages/Home';


const LOCAL_KEY = "save_theme";

const light = {
  palette:{
    mode: 'light',
    primary:{
      main: '#2962ff'
    },
    secondary: purple
  },
  typography:{
    // fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold:700,
  },
 
}

const dark = {
  palette: {
      mode: 'dark',
      primary:{
      main: '#fefefe'
    
    },
    secondary: purple
  },
  typography:{
    // fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold:700,
  },

}

function App() {

  const data = localStorage.getItem(LOCAL_KEY);

  let isTheme;

  if(data){
    isTheme = JSON.parse(data);
  }


  const [theme, setTheme] = useState(!isTheme);

  const icon = !theme ? <Brightness7Icon/> : <DarkModeIcon/>;

  const appliedTheme = createTheme(theme ? light : dark);

  const handleClick = () =>{
    setTheme(!theme)
    localStorage.setItem(LOCAL_KEY, JSON.stringify(theme));
  };

  return (
    <ThemeProvider theme={appliedTheme}>
       <CssBaseline/>  
        <Router>
         <Layout icon={icon} handleClick={handleClick}>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
               <Create/>
            </Route>
            
          </Switch>
         </Layout>
        </Router>

    </ThemeProvider>
  );
}

export default App;
