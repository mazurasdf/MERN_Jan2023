import React, { useState } from "react";

const SimpleForm = (props) => {
    const [form,setForm] = useState({
        title: "",
        year: "",
        rating: "",
        description: "",
        recentWatch: false
    })

    const onChangeHandler = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("submitted!!");
    }

    return (
        <div>
            {/* title, year, rating, quick description, genre, runtime, watched this year */}
            <h1>Simple Form</h1>
            <form className="w-50 p-3 mx-auto border border-dark my-3" onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" onChange={onChangeHandler}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="year" className="form-label">Year released</label>
                    <input type="number" name="year" className="form-control" onChange={onChangeHandler}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" name="description" className="form-control" onChange={onChangeHandler}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="rating" className="form-label">Rating</label>
                    <input type="number" name="rating" className="form-control" onChange={onChangeHandler}/>
                </div>

                <div className="mb-3">
                    <input type="checkbox" name="recentWatch" className="form-check-input" onChange={onChangeHandler}/>
                    <label htmlFor="recentWatch" className="form-label">I watched it </label>
                </div>

                <button type="submit" className="btn btn-primary btn-lg">Send rating</button>
            </form>
        </div>
    )
}

export default SimpleForm;