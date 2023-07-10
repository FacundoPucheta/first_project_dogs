import { backHome, createDog, getAllTemper, toLastNumPage } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import validateForm from "../../validations/validation";
import styles from "./Form.module.css";


// MODIFICAR ESTILOS !                       !!!!!!!!!!!!!!!!!!!!!!!!!!

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
      temperament: [...newBreed.temperament, ...optionSelected],        // can be changed. handleSelectChange and hanldleUpdateOp set temperament in diferent ways
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
    <div className={styles.mainContainer}>
  
    <div  className={styles.formContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        
        <div className={styles.labelInput}>
          <label>Name: </label>
          <input type="text" name="name" value={newBreed.name} onChange={handleChange}/>
          {formValidate.name && <div className={styles.errorMsg} >{formValidate.name}</div>}
        </div>
        <div className={styles.labelInput}>
          <label>Image URL: </label>
          <input type="text" placeholder=" - max of 2000 chars " name="image" value={newBreed.image} onChange={handleChange}/>
          
        </div>
        <div className={styles.spaceTemper}>
        <div className={styles.labelInput}>
          <label>Height: 
          min <input  placeholder="-> m. <-" type="text" name="minHeight" value={newBreed.minHeight} onChange={handleChange}/> -
          max <input placeholder="-> m. <-" type="text" name="maxHeight" value={newBreed.maxHeight} onChange={handleChange}/>
          </label>
          <div>
          {formValidate.height && <div className={styles.errorMsg} >{formValidate.height}</div>}
          </div>
        </div>
        <div className={styles.labelInput}>
          <label>Weight: 
          min <input placeholder="-> kg. <-" type="text" name="minWeight" value={newBreed.minWeight} onChange={handleChange}/> -
          max <input placeholder="-> kg. <-" type="text" name="maxWeight" value={newBreed.maxWeight} onChange={handleChange}/>
          </label>
          <div>
          {formValidate.weight && <div className={styles.errorMsg} >{formValidate.weight}</div>}
          </div>
        </div>
        <div className={styles.labelInput}>
          <label>Lifespan: 
            min <input placeholder="-> years <-" type="text" name="minLifespan" value={newBreed.minLifespan} onChange={handleChange}/> -
            max <input placeholder="-> years <-" type="text" name="maxLifespan" value={newBreed.maxLifespan} onChange={handleChange}/>
          </label>
          <div>
            {formValidate.life_span && <div className={styles.errorMsg} >{formValidate.life_span}</div>}
            </div>
        </div>
        
        <div className={styles.labelInput}>
          <label >Temperament:  </label>
          <select multiple name="temper" value={handleChange.optionSelected} onChange={handleSelectChange} >
            {temperaments?.map((temp) => {
              return <option key={temp.id} value={temp.name} name={temp.name}>{temp.name}</option>;
            })}
          </select>
          <div className={styles.selectedOption}>{selectScreen.map((option) => (
            <div key={option}>
              <p>{option}</p>
              <button onClick={() => handleUpdateOp(option)}>❌</button>
            </div>
          ))}</div>
          
        </div>
        </div>
        <button onClick={handleSubmit} disabled={(Object.keys(formValidate).length > 0 ) || (!selectScreen.length)}>Create! ✔️</button> 
        
      </form>
      </div>
      <div className={styles.message}>
        <div className={styles.messageCreation}>
      {creationState === "Dog breed created successfully!" ? <p style={{ color: "green"}}>{creationState}</p> : <p style={{ color: "red" }}>{creationState}</p> }
      </div>
      <div className={styles.messageBack} >
      <NavLink to="/home"  onClick={()=> handleBack()}>
        Go back !
      </NavLink>
      </div>
      </div>
    </div>
  );
};

export default Form;
