import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";




function Home(){
    const [movies, setMovies]= useState([]);
    const [show, setShow] = useState(false);

    useEffect(()=> {
      getMovies();
    }, []);

    const getMovies=()=> {
        fetch("http://localhost:8000/movie")
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
        setMovies(data)
    });
    }

    const  removeMovie=(id)=> {
        fetch("http://localhost:8000/movie/" +id, {
            method: "DELETE",
            headers: {
                Accept: "application/json"
            }
        })
        .then((r) => {

            movies.filter(movie=> movie.id !== id)
            alert("Movie deleted successfully!")
        })
        .catch(err=> console.log(err))
    
    }
   
     
      const [comment, setComment]= useState("");
      const [id, setId]= useState(null);

      const handleSubmit=(e)=> {
        e.preventDefault();
        const updated_at= new Date();

    

        fetch("http://localhost:8000/movie/" + id, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
          },
          body: JSON.stringify({comment, updated_at})
        })
        .then((r) => {
            setShow(false);
            alert(" Movie updated successfully!")})
        .catch(err=> {
          console.log(err)
        })
    
      }

    


    return(
        <div className="container">
            <h1>The movie list</h1>
            <p><button><Link to="/add-movie">Add movie</Link></button></p>

        {show &&  (  <div className="edit-form">
             <form onSubmit={(e)=> handleSubmit(e)}>
              
                <p><label>Comment</label><input type="text" placeholder="Comment"value={comment} onChange={(e)=> setComment(e.target.value)} required/></p>
                <p><button>Submit</button></p> 
             </form>
            </div>
        )}
        
            <div className="movies">
                {movies.map(movie=> (
                  <div className="movie" key={movie.id}>
                      <h3>Title: {movie.title}</h3>
                      <h3>Director: {movie.director}</h3>
                      <h3>Genre: {movie.genre}</h3>
                      <p>Comment: {movie.comment}</p>
                      <p>Created at: {movie.createdat}, {movie.year}</p>
                      <div><button onClick={()=> {setShow(true); setId(movie.id)}}>Edit</button><button onClick={()=> removeMovie(movie.id)}>Delete</button></div>
                  </div>
                )) }
              

            </div>
        </div>
    )
}

export default Home;