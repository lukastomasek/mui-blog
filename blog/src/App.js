
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purple, red } from '@mui/material/colors';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';
import { BrowserRouter as Router,Switch, Route,} from 'react-router-dom';
import Create from './pages/Create';
import Layout from './pages/Layout';

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


  const [theme, setTheme] = useState(true);

  const icon = !theme ? <Brightness7Icon/> : <DarkModeIcon/>;

  const appliedTheme = createTheme(theme ? light : dark);

  const handleClick = () =>{
    setTheme(!theme)
  };

  return (
    <ThemeProvider theme={appliedTheme}>
       <CssBaseline/>  
        <Router>
         <Layout icon={icon} handleClick={handleClick}>
          <Switch>
            <Route exact path="/">
              {/* home */}
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
