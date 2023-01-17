import React, { useState } from "react";

const TraditionalForm = (props) => {
    const [title,setTitle] = useState("");
    const [year,setYear] = useState("");
    const [description,setDescription] = useState("");
    const [rating,setRating] = useState("");
    const [watchedThisYear,setWatchedThisYear] = useState(false);

    const titleHandler = (event) => {
        // console.log(event.target.value);
        setTitle(event.target.value);
    }

    return (
        <div>
            {/* title, year, rating, quick description, genre, runtime, watched this year */}
            <h1>Traditional Form</h1>
            <form className="w-50 p-3 mx-auto border border-dark my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" onChange={titleHandler}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="year" className="form-label">Year released</label>
                    <input type="number" className="form-control" onChange={(event)=>{setYear(event.target.value)}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" onChange={(event)=>{setDescription(event.target.value)}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="rating" className="form-label">Rating</label>
                    <input type="number" className="form-control" onChange={(event)=>{setRating(event.target.value)}}/>
                </div>

                <div className="mb-3">
                    <input type="checkbox" className="form-check-input" onChange={(event)=>{setWatchedThisYear(event.target.checked)}}/>
                    <label htmlFor="watchedThisYear" className="form-label">I watched it </label>
                </div>

                <button type="submit" className="btn btn-primary btn-lg">Send rating</button>
            </form>
        </div>
    )
}

export default TraditionalForm;