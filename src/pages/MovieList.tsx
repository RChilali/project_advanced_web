import { Link } from "react-router-dom";
import {MovieA} from "../components/MovieA.tsx";
import {MovieDiv} from "../components/Div.tsx";


function MovieList() {
  const  movieList: Movie[] = [ {id: 10, title: "test"}]  //todo replace with service call
  return (
      <div>
        <Link to={`movie/${movieList[0].id}`}><MovieA><MovieDiv></MovieDiv></MovieA></Link>
      </div>
  );
}

export default MovieList