import { useDispatch, useSelector } from "react-redux";
import { filterSource, filterTemper, getAllDogs, orderName, orderWeight } from "../../redux/actions";

const Filters = () => {

  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();


  const handleTemper =  async (event) => {
    await dispatch(getAllDogs());
    dispatch(filterTemper(event.target.value));
  };

  const handleName = (event) => {
    dispatch(orderName(event.target.value));
  };

  const handleWeight = (event) => {
    dispatch(orderWeight(event.target.value));
  };

  const handleSource = async (event) => {
    const allDogs = await dispatch(getAllDogs());
    dispatch(filterSource(event.target.value, allDogs));
  };

  return (

    <div>
      
      <div>
        <div>Filter by:</div>
        <div>
          <label>Temperament </label>
          <select onChange={handleTemper}>
            {temperaments?.map((temp) => (
              <option key={temp.id} value={temp.name}>
                {temp.name}
              </option>
            ))}
          </select>
          </div>

          <div>
          <label>Name </label>
          <select onChange={handleName}>
            <option value="A"> A - Z ↕️</option>
            <option value="Z"> Z - A ↕️</option>
          </select>

          <label>Weight </label>
          <select onChange={handleWeight}>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
          </select>
        </div>
      </div>

      <section>
        <label>Source </label>
        <label>All<input type="radio" name="source" value="all" defaultChecked onChange={handleSource} /></label>
        <br />
        <label>Default <input type="radio" name="source" value="default" onChange={handleSource} /> </label>
        <br />
        <label>Created<input type="radio" name="source" value="created" onChange={handleSource} /> </label>
      </section>

    </div>

  );

};

export default Filters;
