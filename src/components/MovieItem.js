import {Link} from "react-router-dom"
function MovieItem({movie}) {
  return (
    <div className="movie-card">
        <h3 className="movie-title">{movie.title}</h3>
        
        <div className="movie-content">
            <div className="movie-poster">
                <img className="poster-image" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`movie poster for ${movie.title}`}/>
            </div>
        
            <div className="movie-info">
                <p><strong>Release date:</strong> {movie.release_date}</p>
                <p><strong>Rating:</strong> {movie.vote_average} ({movie.vote_count} votes)</p>
                <p className="movie-details"><strong>Movie details:</strong> {movie.overview}</p>
            </div>  
        </div>
    </div>
  
  )
}

export default MovieItem;
