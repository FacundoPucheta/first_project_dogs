// import style from "./CardDetail.module.css";


const CardDetail = (props) => {


  return (
    <div>
      <div>
        <h2>Id: {props.id}</h2>
        <img src={props.image} alt={props.id} />
        <h2>Name: {props.name}</h2>
        <h3>Height: {props.height} m</h3>
        <h3>Weight: {props.weight} kg</h3>
        <h3>Temperament: {props.temperament}</h3>
        <h3>Life span: {props.life_span}</h3>
      </div>
    </div>
  );
};

export default CardDetail;
