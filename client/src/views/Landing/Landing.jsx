import { NavLink } from "react-router-dom";
import style from "../Landing/Landing.module.css";

const Landing = () => {
  return (
    
      <div className={style.mainContainer}>
        <div className={style.banner}>
          <h1>Dogs Up!</h1>
          <span>🐾🐾</span>
        </div>

        <div className={style.landing}>
          <div className={style.legend}>
            Ready to explore the humans best friends?
          </div>
          <br></br>
          <NavLink to="/home">
            <button>SHOW ME</button>
          </NavLink>
        </div>
        <footer>By Facu 🧡</footer>
      </div>
    
  );
};

export default Landing;
