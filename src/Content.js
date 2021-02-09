import Category from "./Category";
import { useMediaQuery } from "react-responsive";

const Content = ({ datas, basket, setBasket, updateBasket }) => {
    const isMediumScreenOrLess = useMediaQuery({ maxWidth: 1250 });
    const isSmallScreen = useMediaQuery({ maxWidth: 870 });

    return (
        <div>
            <div className="content-div-main">
                <div
                    className={
                        isSmallScreen
                            ? "content-div-main-margin content-div-main-margin-small-screen"
                            : isMediumScreenOrLess
                            ? "content-div-main-margin content-div-main-margin-medium-screen"
                            : "content-div-main-margin"
                    }
                >
                    {datas.categories.map((category, index) => {
                        return (
                            <div key={index}>
                                {category.meals.length > 0 && (
                                    <Category
                                        category={category}
                                        basket={basket}
                                        setBasket={setBasket}
                                        updateBasket={updateBasket}
                                    ></Category>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Content;
