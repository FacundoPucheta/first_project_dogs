import { NavLink } from "react-router-dom";


const Detail = () => {
    return (
      <>
        <h1>Esta es la vista de Detail</h1>
        <NavLink to="/home" style={{color: "orangered", outlineColor: "coral"}}>Volver!</NavLink>
      </>
    );
  };
  
  export default Detail;
  