import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();
  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMoive();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <img src={movie.medium_cover_image} />
          <p>{movie.title}</p>
          <p>{movie.rating}</p>
          <p>{movie.runtime}</p>
          {movie.genres.map((g) => (
            <p key={g}>{g}</p>
          ))}
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
