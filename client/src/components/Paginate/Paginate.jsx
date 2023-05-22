import React from "react";
import style from "./Paginate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, toFirstPage, toLastPage} from "../../redux/actions";

const Paginate = ({cantPages}) => {

    const {numPage} = useSelector(state => state);
    const dispatch = useDispatch();
    
    const firstPage = () => {
        dispatch(toFirstPage());
    };
    const lastPage = () => {
        dispatch(toLastPage(cantPages))
    };
    const prev = () => {
        dispatch(prevPage());
    };
    const next = () => {
        dispatch(nextPage());
    };

    return (
        <div className={style.page}>
            <span onClick={firstPage} >First..</span>
            <button onClick={prev} disabled={(numPage === 1)}>Prev</button>
            {((numPage - 1) >= 1) && <p>{numPage - 1}</p>}
            <h2>{ numPage }</h2>
            {((numPage + 1) < cantPages) && <p>{numPage + 1}</p>}
            <button onClick={next} disabled={(numPage === cantPages)}>Next</button>
            <span onClick={lastPage} >Last..</span>
        </div>
    )


};

export default Paginate;