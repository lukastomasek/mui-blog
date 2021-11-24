import SearchIcon from '@mui/icons-material/Search';
import {styled, alpha, InputBase, Container} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover':{
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft:0,
  width: '100%',
  [theme.breakpoints.up('sm')]:{
    marginLeft: theme.spacing(1),
    width: 'auto'
  }

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInput = styled(InputBase)(({theme})=>({
  color: 'inherit',
  '& .MuiInputBase-input':{
    padding: theme.spacing(1,1,1,0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]:{
      width: '12ch',
      '$:focus':{
        width:'20ch',
      }
    },
  },
}));

export default  function SearchBar(){

 return(
    <Search>  
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>
      <StyledInput placeholder="search" />
    </Search>
 );
}