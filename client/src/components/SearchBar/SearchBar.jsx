import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName } from "../../redux/actions";


const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleSearch = (event) => {
        setName(event.target.value);
    }

    const onSearch = (name) => {    
        
     dispatch(getDogByName(name))
        
    };

    return(
        <>
        <div>
            <input onChange={handleSearch} value={name}/>
            <button onClick={() => {onSearch(name)}}>Search</button>
        </div>
        </>
    )
};

export default SearchBar;