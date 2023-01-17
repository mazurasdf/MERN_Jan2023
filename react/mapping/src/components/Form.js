import React, {useState} from "react";

const Form = (props) => {
    const [form,setForm] = useState({
        title: "",
        artist: "",
        year: "",
        imgURL: ""
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        // console.log(props.albums);
        props.setAlbums([
            ...props.albums,
            form
        ]);
    }

    return(
        <form className="w-50 d-block mx-auto my-2" onSubmit={onSubmitHandler}>
            <div className="mb-3 row">
                <label htmlFor="imgURL" className="col-sm-2 col-form-label">image URL:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="imgURL" onChange={onChangeHandler}/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-2 col-form-label">title:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="title" onChange={onChangeHandler}/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="artist" className="col-sm-2 col-form-label">artist:</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="artist" onChange={onChangeHandler}/>
                </div>
            </div>

            <div className="mb-3 row">
                <label htmlFor="year" className="col-sm-2 col-form-label">year:</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" name="year" onChange={onChangeHandler}/>
                </div>
            </div>

            <button className="btn btn-primary" type="submit">add album!</button>
        </form>
    )
}

export default Form;