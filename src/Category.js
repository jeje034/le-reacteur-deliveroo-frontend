const Category = ({ category }) => {
    return (
        <div>
            <h2>{category.name}</h2>
            {category.meals.map((meal) => {
                return (
                    <div key={meal.id}>
                        <h3>{meal.title}</h3>
                        <div>{meal.description}</div>
                        <div>{meal.price}</div>

                        <div>{meal.popular && <div>* populaire</div>}</div>
                        <div>
                            {meal.picture && (
                                <img
                                    src={meal.picture}
                                    alt="Meal"
                                    className="category-meal-picture"
                                ></img>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Category;
