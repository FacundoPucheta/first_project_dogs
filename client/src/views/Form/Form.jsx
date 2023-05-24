import { backHome, createDog, getAllTemper, toLastNumPage } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import validateForm from "../../validations/validation";
import style from "./Form.module.css";

const Form = () => {

const temperaments = useSelector((state) => state.temperaments);
const numPage = useSelector((state) => state.numPage);
const dispatch = useDispatch();

const [creationState, setCreationState] = useState("");
const [selectScreen, setSelectScreen] = useState([]);
const [formValidate, setFormValidate] = useState({ formValidate: true });

const [newBreed, setNewBreed] = useState({
  name: "",
  image: "",
  minHeight: "",
  maxHeight: "",
  minWeight: "",
  maxWeight: "",
  minLifespan: "",
  maxLifespan: "",
  temperament: [],
});


const resetForm = () => {
  setNewBreed({
    name: "",
    image: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLifespan: "",
    maxLifespan: "",
    temperament: [],
  });
  setSelectScreen([]);
  setFormValidate({ formValidate: true });
};

const handleBack = () => {
   dispatch(toLastNumPage(numPage));
  dispatch(backHome());
};

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
      setCreationState("Dog breed created successfully!");
      resetForm();
    })
    .catch(() => {
      setCreationState("Error creating dog breed!");
      resetForm();
    });
};

const handleChange = (event) => {
  setCreationState("");

  setNewBreed({
    ...newBreed,
    [event.target.name]: event.target.value,
  });

  setFormValidate(
    validateForm({
      ...newBreed,
      [event.target.name]: event.target.value,
    })
  );

};

const handleSelectChange = (event) => {
  setCreationState("");
  
  const arrOptionSelected = Array.from(event.target.selectedOptions);
  const optionSelected = arrOptionSelected.map((option) => option.value);

  if (optionSelected.every((option) => !selectScreen.includes(option))) {
    setSelectScreen([...selectScreen, ...optionSelected]);

    setNewBreed({
      ...newBreed,
      temperament: [...newBreed.temperament, ...optionSelected],
    });
  }
};

const handleUpdateOp = (option) => {
  const updatedOption = selectScreen.filter((temper) => temper !== option);
  setSelectScreen(updatedOption);
  setNewBreed({
    ...newBreed,
    temperament: [...updatedOption],
  });
};

useEffect(() => {
  dispatch(getAllTemper());
}, [dispatch]);


  return (
    <>
    {creationState === "Dog breed created successfully!" ? <p style={{ color: "green"}}>{creationState}</p> : <p style={{ color: "red" }}>{creationState}</p> }
    
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={newBreed.name} onChange={handleChange}/>
          {formValidate?.name && <span>{formValidate.name}</span>}
        </div>
        <div>
          <label>Image URL: </label>
          <input type="text" placeholder=" - max of 2000 chars " name="image" value={newBreed.image} onChange={handleChange}/>
          
        </div>
        <div>
          <label>Height: 
          min <input type="text" name="minHeight" value={newBreed.minHeight} onChange={handleChange}/> -
          max <input type="text" name="maxHeight" value={newBreed.maxHeight} onChange={handleChange}/>
          </label>
          {formValidate?.height && <span>{formValidate.height}</span>}
        </div>
        <div>
          <label>Weight: 
          min <input type="text" name="minWeight" value={newBreed.minWeight} onChange={handleChange}/> -
          max <input type="text" name="maxWeight" value={newBreed.maxWeight} onChange={handleChange}/>
          </label>
          {formValidate?.weight && <span>{formValidate.weight}</span>}
        </div>
        <div>
          <label>Lifespan: 
            min <input type="text" name="minLifespan" value={newBreed.minLifespan} onChange={handleChange}/> -
            max <input type="text" name="maxLifespan" value={newBreed.maxLifespan} onChange={handleChange}/>
          </label>
            {formValidate?.life_span && <span>{formValidate.life_span}</span>}
        </div>
        <div>
          <label>Temperament:  </label>
          <select multiple name="temper" value={handleChange.optionSelected} onChange={handleSelectChange} >
            {temperaments?.map((temp) => {
              return <option key={temp.id} value={temp.name} name={temp.name}>{temp.name}</option>;
            })}
          </select>
          <div className={style.selectedOption}>{selectScreen.map((option) => (
            <div key={option}>
              <p>{option}</p>
              <button onClick={() => handleUpdateOp(option)}>❌</button>
            </div>
          ))}</div>
          
        </div>
        <button onClick={handleSubmit} disabled={(Object.keys(formValidate).length > 0 ) || (!selectScreen.length)}>Create! ✔️</button> 
        
      </form>

      <NavLink to="/home" style={{ color: "salmon" }} onClick={()=> handleBack()}>
        EXIT
      </NavLink>
    </>
  );
};

export default Form;
