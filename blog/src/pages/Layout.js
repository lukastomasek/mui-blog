import Navigation from "./Navigation";

export default  function Layout({children, icon, handleClick}){
  return(
    <div>
       <Navigation modeIcon={icon} setMode={handleClick}/>
      {children}
    </div>
  );
};