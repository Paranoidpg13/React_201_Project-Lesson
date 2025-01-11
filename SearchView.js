import Hero from './Hero';
import {Link} from 'react-router-dom';
import image from './MReel.jpg';


const MovieCard = ({movie}) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`

    if (movie.poster_path === null) {
        return (

            <div className="col-lg-4 col-md-2 col-3 my-4">
            <div className="card" >
      <img src={image} className="card-img-top" alt={movie.original_title} />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <Link to={detailUrl} className="btn btn-primary" >Show Details </Link>
      </div>
        </div>
        </div>
        )

    }


    else {

        return (

            <div className="col-lg-4 col-md-2 col-3 my-4">
            <div className="card" >
      <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <Link to={detailUrl} className="btn btn-primary" >Show Details </Link>
      </div>
        </div>
        </div>
        )




    }
  
    



}   


const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`
    
    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })
    if (searchResults.length === 0) {
        const msg = `There are no results for ${keyword}`;
        return (
            <>
              <Hero text={msg} />
            </>
          
        )
    }
    else {
  return (
        <>
            <Hero text={title} />
            {resultsHtml &&
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                        </div>
                    </div> 
            }

        </>
    )


    }
  
}

export default SearchView;