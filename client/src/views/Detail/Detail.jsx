import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CardDetail from "../../components/CardDetail/CardDetail";

const Detail = () => {
  
  const defaultImg =
    "https://img.ecartelera.com/noticias/fotos/24800/24860/5.jpg";
  
  const dogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  const { id } = useParams();
  

  useEffect(() => {
    dispatch(getDogById(id));
  }, [dispatch, id]);

  return (
    <>
      <div>
        <CardDetail
          key={dogs.id}
          id={dogs.id}
          image={dogs.image !== "" ? dogs.image : defaultImg}
          name={dogs.name}
          height={dogs.height}
          weight={dogs.weight}
          temperament={dogs.temperament}
          life_span={dogs.life_span}
        />
      </div>
    </>
  );
};

export default Detail;
