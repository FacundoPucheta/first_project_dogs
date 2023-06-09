import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CardDetail from "../../components/CardDetail/CardDetail";
import styles from "./Detail.module.css";
import { ThreeBody } from '@uiball/loaders';

const Detail = () => {
  
  const defaultImg =
    "https://img.ecartelera.com/noticias/fotos/24800/24860/5.jpg";
  
  const dogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  const { id } = useParams();
  
  if (dogs.image === "") dogs.image = defaultImg;

  useEffect(() => {
    dispatch(getDogById(id));
  }, [dispatch, id]);

  return dogs.image ? (
    <>
      <div className={styles.mainContainer}>
        <CardDetail
          key={dogs.id}
          id={dogs.id}
          image={dogs.image}
          name={dogs.name}
          height={dogs.height}
          weight={dogs.weight}
          temperament={dogs.temperament}
          life_span={dogs.life_span}
        />
      </div>
    </>
  ) : (
    <div className={styles.mainContainer}>
      <ThreeBody
        size={35}
        speed={1.1}
        color="black"
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default Detail;
