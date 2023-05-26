import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDogs, getAllTemper, resetDog } from "../../redux/actions";
import DogsContainer from "../../components/DogsContainer/DogsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllTemper());
    return () => {
      dispatch(resetDog());
    };
  }, [dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getAllDogs());
  };

  return (
    <div className={styles.mainContainerHome}>
      <div className={styles.container1}>
        <div >
          <Filters />
        </div>

        <div className={styles.container2}>
          <div>
            <button
              className={styles.button2}
              onClick={() => navigate("/create")}
            >
              CREATE!
            </button>
          </div>
          <div className={styles.container3} >
            <button style={{fontWeight: "bolder"}} className={styles.button3} onClick={handleClick}>
              Dogs Up!
            </button>
            <div>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
      <DogsContainer />
    </div>
  );
};

export default Home;
