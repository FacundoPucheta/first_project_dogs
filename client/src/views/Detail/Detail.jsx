import { Link, useParams } from "react-router-dom";
import CardDetail from "../../components/CardDetail/CardDetail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../redux/actions";

const Detail = () => {
  const dogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDogById(id));
  }, [dispatch, id]);

  if (!dogs.image) return <div>Loading..</div>;
  return (
    <div>
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
      <br></br>
      <Link to="/home" style={{ color: "orangered", outlineColor: "coral" }}>
        Volver!
      </Link>
    </div>
  );
};

export default Detail;
