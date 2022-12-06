import Movie from "../Movie/Movie";

const Movies = ({movies = []}) => {
    return (
        <div className="movies">
            {movies.length ? movies.map(value => (
                <Movie key={value.imdbID} {...value}/>
            )) : <h4>Not found</h4>}
        </div>
    )
}

export default Movies;