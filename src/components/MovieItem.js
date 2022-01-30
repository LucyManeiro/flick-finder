function MovieItem({movie}) {

  const {title, vote_average, vote_count, poster_path, overview, release_date} = movie;
  //convert release date to year only
  const year = release_date.split("").slice(0, 4).join("")
 
  return (
    <div className="movie-card">
        <h3 className="movie-title">{title}</h3>
          
          <div className="movie-content">
            {/* movie poster */}
            <div className="movie-poster">
                <img className="poster-image" src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={`movie poster for ${title}`}/>
            </div>
        
            {/* movie details */}
            <div className="movie-info">
                <p><strong>Year released:</strong> {year}</p>
                <p><strong>Rating:</strong> {vote_average} ({vote_count} votes)</p>
                <p className="movie-details"><strong>Movie details:</strong> {overview}</p>
            </div>  
          </div>
      </div>
  )
}

export default MovieItem;
