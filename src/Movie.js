const Movie = (props) => {
  return (
    <div className="movies">
      {props.movies.map((el, index) => {
        return <img key={index} src={el} alt="Movies picture" />;
      })}
    </div>
  );
};

export default Movie;
