import Movie from "./Movie";

const Section = (props) => {
  return (
    <div className="section">
      <h2>{props.sectionTitle}</h2>
      <Movie movies={props.movies} />
    </div>
  );
};

export default Section;
