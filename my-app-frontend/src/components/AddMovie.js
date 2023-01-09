import React, {useState} from "react";
// import {useLocation} from "react-router-dom";

function AddMovie(){

  

      const [title, setTitle]= useState("");
      const [director, setDirector]= useState("");
      const [genre, setGenre]= useState("");
      const [year, setYear]= useState("");
      const [comment, setComment]= useState("");

      const handleSubmit=(e)=> {
        e.preventDefault();
        const created_at= new Date();

        console.log(title, director, genre, year, comment, created_at);

      const newMovie= {
        title,
        director,
        genre,
        year,
        comment,
        created_at,
        updated_at: ""
      }
console.log(newMovie)

        fetch("http://localhost:8000/movie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({newMovie})
        })
        .then((r) => alert("New movie added successfully!"))
        .catch(err=> {
          console.log(err)
        })
    
      }

    

    return(
        <form onSubmit={(e)=> handleSubmit(e)}>
            <p><label>Title</label><input type="text" placeholder="Title" value={title} onChange={(e)=> setTitle(e.target.value)} required/></p>
            <p><label>Director</label><input type="text" placeholder="Director" value={director} onChange={(e)=> setDirector(e.target.value)} required/></p>
            <p><label>Genre</label><input type="text" placeholder="Genre" value={genre} onChange={(e)=> setGenre(e.target.value)} required/></p>
            <p><label>Year</label><input type="text" placeholder="Year"value={year} onChange={(e)=> setYear(e.target.value)} required/></p>
            <p><label>Comment</label><input type="text" placeholder="Comment"value={comment} onChange={(e)=> setComment(e.target.value)} required/></p>
            <p><button>Submit</button></p> 
        </form>
    )
}

export default AddMovie;