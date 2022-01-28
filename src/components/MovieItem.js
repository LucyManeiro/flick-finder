function MovieItem({movie}) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img className="poster-image" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`movie poster for ${movie.title}`}/>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>

      </div>  
    </div>
  
  )
}

export default MovieItem;
