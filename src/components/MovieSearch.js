import {useState} from "react";
import MovieItem from "./MovieItem"

function MovieSearch() {
    
    const URL = process.env.REACT_APP_MOVIE_URL;
    
    //state to handle query parameters and movie list
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    //gets movies based on search parameter
    const handleSubmit = async(e) => {
        e.preventDefault();
        const url = `${URL}&query=${query}&page=1&include_adult=false`
        try {
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results)
            setQuery("")
        } catch(err){
            console.log(err)
        }
    }

    return (
        <div className="container">
            <div className="search-container">
                <h2>Enter movie title:</h2>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="query"
                                className="search-bar"
                                placeholder="i.e. The Wizard of Oz "
                                value = {query}
                                onChange={handleChange}
                                required={true}
                            />
                            <button className="btn btn-dark" type="submit">Search</button>
                        </form>
                    </div>
            </div>

            <div className="search-results">
                {movies.map((movie)=> (
                    <MovieItem key={movie.id} movie={movie}/>
                ))}
            </div> 
        </div>
    )
}

export default MovieSearch;