import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createDog, getAllTemper } from "../../redux/actions";
import style from "./Form.module.css";
import validateForm from "../../validations/validation";

const Form = () => {

//crear nuevo estado para: ERRORES, IMAGEN EN VIVO, MOSTRAR LAS COSAS SELECCIONADAS
//solo permitir que se agreguen 5 temperamentos o 3!


const temperaments  = useSelector((state) => state.temperaments);

const dispatch = useDispatch();

  const [dogCreated, setDogCreated] = useState("");
  const [selectScreen, setSelectScreen] = useState([]);
  const [errors, setErrors] = useState({errors: true});

  

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
    setNewBreed({
      ...newBreed,
      temperament: [...newBreed.temperament, ...selectScreen]
    })
    const newBreedCreated = {
      ...newBreed,
      height: `${newBreed.minHeight} - ${newBreed.maxHeight}`,
      weight: `${newBreed.minWeight} - ${newBreed.maxWeight}`,
      life_span: `${newBreed.minLifespan} - ${newBreed.maxLifespan} years`,
    };
    console.log(newBreedCreated)
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
    

    setErrors(validateForm({
      ...newBreed,
      [event.target.name]: event.target.value
    }));
  };
  
  
  
  const handleSelectChange =  (event) => {
    const arrOptionSelected = Array.from(event.target.selectedOptions);
    const optionSelected = arrOptionSelected.map(option => option.value);
    
    if(optionSelected.every(option => !selectScreen.includes(option))){
      setSelectScreen([...selectScreen, ...optionSelected])
      
       
    }
    
    console.log(newBreed)

  };
  
  const handleUpdateOp = (option) => {
    
    const updatedOption = selectScreen.filter(temper => temper !== option);
    setSelectScreen(updatedOption);
    setNewBreed({
      ...newBreed,
      temperament: [...updatedOption]
    });
    
  }

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
          {errors?.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Image URL: </label>
          <input type="text" name="image" value={newBreed.image} onChange={handleChange}/>
          
        </div>
        <div>
          <label>Height: 
          min <input type="text" name="minHeight" value={newBreed.minHeight} onChange={handleChange}/> -
          max <input type="text" name="maxHeight" value={newBreed.maxHeight} onChange={handleChange}/>
          {errors?.height && <p>{errors.height}</p>}
          </label>
        </div>
        <div>
          <label>Weight: 
          min <input type="text" name="minWeight" value={newBreed.minWeight} onChange={handleChange}/> -
          max <input type="text" name="maxWeight" value={newBreed.maxWeight} onChange={handleChange}/>
          {errors?.weight && <p>{errors.weight}</p>}
          </label>
        </div>
        <div>
          <label>Lifespan: 
            min <input type="text" name="minLifespan" value={newBreed.minLifespan} onChange={handleChange}/> -
            max <input type="text" name="maxLifespan" value={newBreed.maxLifespan} onChange={handleChange}/>
            {errors?.life_span && <p>{errors.life_span}</p>}
          </label>
        </div>
        <div>
          <label>Temperament:  </label>
          <select multiple name="temper" value={handleChange.optionSelected} onChange={handleSelectChange} >
            {temperaments?.map((temp) => {
              return <option key={temp.id} value={temp.name} name={temp.name}>{temp.name}</option>;
            })}
          </select>
          <br></br>
          <div className={style.selectedOption}>{selectScreen.map((option) => (
            <div key={option}>
              <p>{option}</p>
              <button onClick={() => handleUpdateOp(option)}>❌</button>
            </div>
            
          ))}</div>
          
        </div>
        <button onClick={handleSubmit} disabled={Object.keys(errors).length > 0}>Create! ✔️</button> 
        
      </form>

      <NavLink to="/home" style={{ color: "salmon" }}>
        EXIT
      </NavLink>
    </>
  );
};

export default Form;
