import {useState} from "react";
import MovieItem from "./MovieItem"

function MovieSearch() {
    
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const searchMovies = async(e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=75f8f70fd52aac7f1994c52e1c71209c&language=en-US&query=${query}&page=1&include_adult=false`
        try {
            const response = await fetch(url);
            const data = await response.json()
            setMovies(data.results)
            setQuery("")
        } catch(err){
            console.log(err)
        }
    }

    console.log(movies)
    return (
    <div className="container">
        <div className="search-container">
            <h2 className="search-heading">Search here</h2>
            <div className="form">
                <form onSubmit={searchMovies}>
                    <input
                        type="text"
                        name="query"
                        className="search-bar"
                        placeholder="Enter movie name, i.e. The Wizard of Oz"
                        value = {query}
                        onChange={handleChange}
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