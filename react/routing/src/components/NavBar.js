import React from "react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

const NavBar = (props) => {
    const [form,setForm] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        // console.log(form);
        navigate(`/repeater/${form}`);
    }

    return(
        <div className="w-100 p-2 d-flex justify-content-around border border-bottom">
            <Link to="/" className="btn btn-primary">Main</Link>
            <Link to="/second" className="btn btn-warning">Second</Link>
            <form className="d-flex" onSubmit={onSubmitHandler}>
                <input type="text" className="form-control" onChange={(event)=>setForm(event.target.value)}/>
                <button type="submit" className="btn btn-success btn-sm">GO!</button>
            </form>
        </div>
    )
}

export default NavBar;