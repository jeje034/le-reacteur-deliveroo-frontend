const Basket = ({ basket, setBasket, updateBasket }) => {
    const handleClick = (meal, quantityToAdd) => {
        updateBasket(meal.id, meal.title, quantityToAdd, meal.price);
    };

    let subtotal = 0;

    return (
        <div className="basket-card">
            <button>Valider votre panier</button>

            {basket && basket.length > 0 && basket[0].title ? (
                basket.map((meal, indice) => {
                    subtotal += meal.quantity * meal.price;
                    return (
                        <div className="basket-meal" key={meal.id}>
                            <button
                                onClick={() => {
                                    handleClick(meal, -1);
                                }}
                            >
                                -
                            </button>
                            <p>{meal.quantity}</p>
                            <button
                                onClick={() => {
                                    handleClick(meal, 1);
                                }}
                            >
                                +
                            </button>
                            <div key={meal.id}>
                                {" " + meal.title + " " + meal.price}
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>"Votre panier est vide"</div>
            )}
            {subtotal > 0 && <div>{"Sous-total : " + subtotal}</div>}
            {subtotal > 0 && <div>{"Frais de livraison : 2.50 €"}</div>}
            {subtotal > 0 && <div>{"Total : " + (subtotal + 2.5)}</div>}
        </div>
    );
};

export default Basket;
