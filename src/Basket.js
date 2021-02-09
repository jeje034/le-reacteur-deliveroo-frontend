import lessPicture from "./assets/Less.PNG";
import plusPicture from "./assets/Plus.PNG";

const Basket = ({ basket, setBasket, updateBasket }) => {
    const handleClick = (meal, quantityToAdd) => {
        updateBasket(meal.id, meal.title, quantityToAdd, meal.price);
    };

    let subtotal = 0;

    return (
        <div className="basket-card">
            <button className="basket-validation">Valider mon panier</button>

            {basket && basket.length > 0 && basket[0].title ? (
                basket.map((meal, indice) => {
                    subtotal += meal.quantity * meal.price;
                    return (
                        <div className="basket-meal" key={meal.id}>
                            <img
                                className="basket-plus-less-button basket-less-button"
                                onClick={() => {
                                    handleClick(meal, -1);
                                }}
                                src={lessPicture}
                                alt="Moins"
                            ></img>
                            <p className="basket-quantity-for-1-meal">
                                {meal.quantity}
                            </p>
                            {
                                <img
                                    className="basket-plus-less-button"
                                    onClick={() => {
                                        handleClick(meal, 1);
                                    }}
                                    src={plusPicture}
                                    alt="Plus"
                                ></img>
                            }
                            <div className="basket-title-and-price">
                                <div className="basket-meal-title">
                                    {meal.title}
                                </div>
                                <div className="basket-amount-for-1-meal">
                                    {meal.price + " €"}
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>"Votre panier est vide"</div>
            )}
            {subtotal > 0 && (
                <div>
                    <div className="basket-sums">
                        <div>Sous-total</div>
                        <div>{subtotal + " €"}</div>
                    </div>
                    <div className="basket-sums">
                        <div>Frais de livraison</div>
                        <div>2.50 €</div>
                    </div>
                    <div className="basket-sums">
                        <div>Total</div>
                        <div>{subtotal + 2.5 + " €"}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Basket;
