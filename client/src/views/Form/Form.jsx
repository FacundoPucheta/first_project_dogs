import { NavLink } from "react-router-dom";

const Form = () => {
    return (
      <>
        <h1>Esta es la vista de Form</h1>
        <NavLink to="/home" style={{color: "salmon"}}>salir de la creacion del doggy</NavLink>
      </>
    );
  };
  
  export default Form;
  