const Category = ({ category, basket, setBasket, updateBasket }) => {
    const handleClick = (meal) => {
        updateBasket(meal.id, meal.title, 1, meal.price);
    };

    return (
        <div className="category-div-main">
            <h2>{category.name}</h2>
            <div className="category-meals">
                {category.meals.map((meal) => {
                    return (
                        <div
                            key={meal.id}
                            className="category-meal"
                            onClick={() => {
                                handleClick(meal);
                            }}
                        >
                            <div>
                                <h3>{meal.title}</h3>
                                <p className="category-meal-description">
                                    {meal.description}
                                </p>
                                <div className="category-price-and-popularity">
                                    <div className="category-price">
                                        {meal.price}&nbsp;€
                                    </div>
                                    <div>
                                        {meal.popular && (
                                            <div className="category-popular">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="#ff8000"
                                                    className="category-star"
                                                >
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                                populaire
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

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
        </div>
    );
};

export default Category;
