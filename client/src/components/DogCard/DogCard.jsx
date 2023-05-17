const DogCard = (props) => {
    return (
      <div>
        <h3>Name:  "{props.name}"</h3>
        <img src={props.image} alt={props.name}/>
        <p>Min Weight: {props.minWeight} kg</p>
        <p>Max Weight: {props.maxWeight} kg</p>
        <p>Min Height: {props.minHeight} m</p>
        <p>Max Height: {props.maxHeight} m</p>
        <p>Life span: {props.life_span}</p>
        <p>Temperament: {props.temperament}</p>

      </div>
    )
  
  };
  
  export default DogCard;