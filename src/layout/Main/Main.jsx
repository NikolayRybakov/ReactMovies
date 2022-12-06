import { useState, useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Preloader from "../../components/Preloader/Preloader";
import Search from "../../components/Search/Search";

function Main() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=ed630be2&s=matrix`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
                setLoading(false)
            })      
                .catch((err) => {
                    console.log(err)
                    setLoading(false)
            })
    }, [])


    const searchMovies = (str, type="all") => {
        setLoading(false)
        fetch(`http://www.omdbapi.com/?apikey=ed630be2&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
                setLoading(false)
            })
           .catch((err) => {
                console.log(err)
                setLoading(false)
    })
}

    return (
        <main className="container content">
            <Search searchMovies={searchMovies} />
            {loading ?
                <Preloader /> : <Movies movies={movies} />}
        </main>
    )
}

export default Main;