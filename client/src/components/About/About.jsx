import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { backHome } from "../../redux/actions";

const About = () => {

    const dispatch = useDispatch();

    const handleBack = () => {

        dispatch(backHome());
    };


  return (
    <div>
    <div className={styles.container}>
      <h1>Welcome</h1>
      <p>
        Hi, my name is Facundo, the author of this page. This single page
        application was created for the community with the goal of helping you
        explore and discover marvelous, funny, and charming dog breeds that
        exist. Perhaps you're interested in finding out who is the heaviest
        breed..? or the smallest? Wait, don't you dare to tell me you want to
        create a new breed and bless it with your awesome taste?
        <br></br>
        Plot twist, you CAN do it!
      </p>
      <p>
        Jokes aside, this was my first-ever webpage, and I enjoyed the entire
        process. I hope you like it.
      </p>
      <footer>By Facu 🧡</footer>
    </div>
    <div className={styles.btn}>
        <Link to="/home">
        <button className={styles.btn} onClick={() => handleBack()}>Go back</button>
        </Link>

    </div>
    </div>
  );
};

export default About;
