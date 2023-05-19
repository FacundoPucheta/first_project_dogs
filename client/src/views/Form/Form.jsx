import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createDog, getAllTemper } from "../../redux/actions";

const Form = () => {

//crear nuevo estado para: ERRORES, IMAGEN EN VIVO, MOSTRAR LAS COSAS SELECCIONADAS

  const dispatch = useDispatch();

  const temperaments  = useSelector((state) => state.temperaments);
  // const orderedTempers = [...temperaments].sort((a, b) => (a.name > b.name ? 1 : -1));

  const [dogCreated, setDogCreated] = useState("");
  const [selectScreen, setSelectScreen] = useState([]);

  const [newBreed, setNewBreed] = useState({
    name: "",
    image:"",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLifespan: "",
    maxLifespan: "",
    temperament: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBreedCreated = {
      ...newBreed,
      height: `${newBreed.minHeight} - ${newBreed.maxHeight}`,
      weight: `${newBreed.minWeight} - ${newBreed.maxWeight}`,
      life_span: `${newBreed.minLifespan} - ${newBreed.maxLifespan} years`,
      
    };
    
    dispatch(createDog(newBreedCreated))
    .then(() => {
      setDogCreated("Dog breed created successfully!");
    })
    .catch(() => {
      setDogCreated("Error creating dog breed!");
    });
  };

  const handleChange = (event) => {
    
    setNewBreed({
      ...newBreed,
      [event.target.name]: event.target.value
    });
  };
  
  

  const handleSelectChange = (event) => {
    const optionsSelected = event.target.value;

    setSelectScreen([
      ...selectScreen, optionsSelected

    ]);
    
  };
  const addTemperHandler = (event) => {
    event.preventDefault();
    setNewBreed({
      ...newBreed,
      temperament:[...newBreed.temperament ,...selectScreen]
    });
  };

  useEffect(() => {
    dispatch(getAllTemper());
  }, [dispatch]);


  return (
    <>
    {dogCreated === "Dog breed created successfully!" ? <p style={{ color: "green"}}>{dogCreated}</p> : <p style={{ color: "red" }}>{dogCreated}</p> }
    
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={newBreed.name} onChange={handleChange}/>
        </div>
        <div>
          <label>Image URL: 
          <input type="text" name="image" value={newBreed.image} onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label>Height: 
          min <input type="text" name="minHeight" value={newBreed.minHeight} onChange={handleChange}/> -
          max <input type="text" name="maxHeight" value={newBreed.maxHeight} onChange={handleChange}/>

          </label>
        </div>
        <div>
          <label>Weight: 
          min <input type="text" name="minWeight" value={newBreed.minWeight} onChange={handleChange}/> -
          max <input type="text" name="maxWeight" value={newBreed.maxWeight} onChange={handleChange}/>

          </label>
        </div>
        <div>
          <label>Lifespan: 
            <br></br>
            min <input type="text" name="minLifespan" value={newBreed.minLifespan} onChange={handleChange}/> -
            max <input type="text" name="maxLifespan" value={newBreed.maxLifespan} onChange={handleChange}/>
          
          </label>
        </div>
        <div>
          <label>Temperament:  </label>
          <select
            name="temper"
            value={{selectScreen}}
            onChange={handleSelectChange}
          >
            {temperaments?.map((temp) => {
              return <option key={temp.id} value={temp.name} name={temp.name}>
              {temp.name}
            </option>;
            })}
          </select>
          <br></br>
          <div>{selectScreen}</div>
          <button onClick={addTemperHandler}>✔️</button>
        </div>
        <button onClick={handleSubmit}>Create!</button>
      </form>

      <NavLink to="/home" style={{ color: "salmon" }}>
        EXIT
      </NavLink>
    </>
  );
};

export default Form;
