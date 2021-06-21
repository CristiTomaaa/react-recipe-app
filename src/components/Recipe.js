const Recipe = ({ title, calories, img, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={img} alt="" />
      <ol>
        {ingredients.map((ingredient) => (
          <li key={ingredients.title}>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
