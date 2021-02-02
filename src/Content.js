import Section from "./Section";
import data from "./data.json";

const Content = () => {
  return (
    <div className="content">
      {data.map((el, index) => {
        return <Section key={index} sectionTitle={el.category} movies={el.images} />;
      })}
    </div>
  );
};

export default Content;
