import { getDogByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./SearchBar.module.css";


const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleSearch = (event) => {
      setName(event.target.value);
    };

    const onSearch = (name) => {
      dispatch(getDogByName(name));
      setName("");
    };

    return(

        <section>
        <div>
            <input placeholder="Search by doggy name..." onChange={handleSearch} value={name}/>
            <button className={styles.button1} onClick={() => {onSearch(name)}}>Search</button>
        </div>
        </section>
    );

};

export default SearchBar;